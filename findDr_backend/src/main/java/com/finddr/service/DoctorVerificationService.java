package com.finddr.service;

import com.finddr.dto.DoctorVerificationDto;
import com.finddr.dto.UpdateVerificationStatusDto;
import com.finddr.entity.DoctorVerification;
import com.finddr.entity.type.VerificationStatus;
import com.finddr.repository.DoctorVerificationRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
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
                .orElseThrow(() -> new RuntimeException("Verification not found"));
        return convertToDto(entity);
    }

    public List<DoctorVerificationDto> getPendingVerifications() {
        return repository.findAllByVerificationStatus(VerificationStatus.PENDING)
                .stream().map(this::convertToDto).collect(Collectors.toList());
    }

    public List<DoctorVerificationDto> getVerifiedVerifications() {
        return repository.findAllByVerificationStatus(VerificationStatus.VERIFIED)
                .stream().map(this::convertToDto).collect(Collectors.toList());
    }

    public List<DoctorVerificationDto> getRejectedVerifications() {
        return repository.findAllByVerificationStatus(VerificationStatus.REJECTED)
                .stream().map(this::convertToDto).collect(Collectors.toList());
    }

    public DoctorVerificationDto updateVerificationStatus(Long id, UpdateVerificationStatusDto dto) {
        DoctorVerification entity = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Doctor verification not found"));

        if (entity.getVerificationStatus() != VerificationStatus.PENDING) {
            throw new RuntimeException("Only pending verifications can be updated.");
        }

        entity.setVerificationStatus(dto.getVerificationStatus());

        if (dto.getVerificationStatus() == VerificationStatus.VERIFIED) {
            entity.setVerifiedAt(LocalDateTime.now());
        } else if (dto.getVerificationStatus() == VerificationStatus.REJECTED) {
            entity.setNotes(dto.getNotes()); // optional
        }

        repository.save(entity);
        return convertToDto(entity);
    }

    private DoctorVerificationDto convertToDto(DoctorVerification entity) {
        DoctorVerificationDto dto = mapper.map(entity, DoctorVerificationDto.class);
        dto.setUserId(entity.getUser().getId());
        dto.setFullName(entity.getUser().getFullName());
        return dto;
    }
}
