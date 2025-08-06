package com.finddr.service;

import com.finddr.dto.doctor.DoctorVerificationDto;
import com.finddr.dto.UpdateVerificationStatusDto;
import com.finddr.entity.DoctorVerification;
import com.finddr.entity.type.VerificationStatus;
import com.finddr.exception.ApiException;
import com.finddr.exception.ErrorCode;
import com.finddr.repository.DoctorVerificationRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class DoctorVerificationService {

    private final DoctorVerificationRepository repository;
    private final ModelMapper mapper;

    public List<DoctorVerificationDto> getAllVerifications() {
        return repository.findAll().stream().map(this::convertToDto).collect(Collectors.toList());
    }

    public DoctorVerificationDto getVerificationById(Long id) {
        DoctorVerification entity = repository.findById(id)
                .orElseThrow(() -> new ApiException(ErrorCode.INVALID_INPUT,"Verification not found",HttpStatus.NOT_FOUND));
        return convertToDto(entity);
    }

    public List<DoctorVerificationDto> getPendingVerifications() {
        return repository.findAllByVerificationStatus(VerificationStatus.PENDING)
                .stream().map(this::convertToDto).toList();
    }

    public List<DoctorVerificationDto> getVerifiedVerifications() {
        return repository.findAllByVerificationStatus(VerificationStatus.VERIFIED)
                .stream().map(this::convertToDto).toList();
    }

    public List<DoctorVerificationDto> getRejectedVerifications() {
        return repository.findAllByVerificationStatus(VerificationStatus.REJECTED)
                .stream().map(this::convertToDto).toList();
    }

    public DoctorVerificationDto updateVerificationStatus(Long doctorId, UpdateVerificationStatusDto dto) {
        DoctorVerification doctor = repository.findById(doctorId)
                .orElseThrow(() -> new RuntimeException("Doctor verification not found"));

        if (doctor.getVerificationStatus() != VerificationStatus.PENDING) {
            throw new ApiException(ErrorCode.INVALID_INPUT,"Only pending verifications can be updated.", HttpStatus.BAD_REQUEST);
        }

        doctor.setVerificationStatus(dto.getVerificationStatus());

        if (dto.getVerificationStatus() == VerificationStatus.VERIFIED) {
            doctor.setVerifiedAt(LocalDateTime.now());
        } else if (dto.getVerificationStatus() == VerificationStatus.REJECTED) {
            doctor.setNotes(dto.getNotes());
        }

        repository.save(doctor);
        return convertToDto(doctor);
    }

    private DoctorVerificationDto convertToDto(DoctorVerification entity) {
        DoctorVerificationDto dto = mapper.map(entity, DoctorVerificationDto.class);
        dto.setUserId(entity.getUser().getId());
        dto.setFullName(entity.getUser().getFullName());
        return dto;
    }
}
