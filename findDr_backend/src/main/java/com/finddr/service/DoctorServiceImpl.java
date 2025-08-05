package com.finddr.service;

import com.finddr.dto.Clinic.ClinicInfo;
import com.finddr.dto.Doctor.DoctorRequestDto;
import com.finddr.dto.Doctor.DoctorResponseDto;
import com.finddr.dto.SpecialityDto;
import com.finddr.entity.Clinic;
import com.finddr.entity.Doctor;
import com.finddr.entity.Speciality;
import com.finddr.entity.User;
import com.finddr.exception.ApiException;
import com.finddr.exception.ErrorCode;
import com.finddr.repository.ClinicRepository;
import com.finddr.repository.DoctorRepository;
import com.finddr.repository.SpecialityRepository;
import com.finddr.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DoctorServiceImpl {

    private final UserRepository userRepository;
    private final DoctorRepository doctorRepository;
    private final SpecialityRepository specialityRepository;
    private final ClinicRepository clinicRepository;
    private final ModelMapper mapper;

    public DoctorResponseDto createDoctor(DoctorRequestDto doctorDto) {
        Doctor doctor = mapper.map(doctorDto, Doctor.class);

        User user = userRepository.findById(doctorDto.getUserId()).orElse(null);
        Clinic clinic = clinicRepository.findById(doctorDto.getClinicId()).orElse(null);
        Speciality speciality = specialityRepository.findById(doctorDto.getSpecialtyId()).orElse(null);

        if (user == null || clinic == null || speciality == null) {
            throw new ApiException(ErrorCode.INADEQUATE_DOCTOR_DATA, "Inadequate data", HttpStatus.NOT_FOUND);
        }

        doctor.setUser(user);
        doctor.setClinic(clinic);
        doctor.setSpeciality(speciality);

        Doctor savedDoctor = doctorRepository.save(doctor);
        return mapToDoctorResponseDto(savedDoctor);
    }

    public List<DoctorResponseDto> getAllDoctors() {
        List<Doctor> doctors = doctorRepository.findAll();
        return doctors.stream()
                .map(this::mapToDoctorResponseDto)
                .toList();
    }

    public DoctorResponseDto getDoctorById(Long id) {
        Doctor doctor = doctorRepository.findById(id)
                .orElseThrow(() -> new ApiException(
                        ErrorCode.DOCTOR_NOT_FOUND,
                        "Doctor not found with id: " + id,
                        HttpStatus.NOT_FOUND
                ));

        return mapToDoctorResponseDto(doctor);
    }

    public void deleteDoctor(Long id) {
        doctorRepository.deleteById(id);
    }

    private DoctorResponseDto mapToDoctorResponseDto(Doctor doctor) {
        DoctorResponseDto dto = new DoctorResponseDto();

        dto.setId(doctor.getId());
        dto.setFullName(doctor.getUser().getFullName());
        dto.setEmail(doctor.getUser().getEmail());
        dto.setPhoneNumber(doctor.getUser().getPhoneNumber());
        dto.setExperience(doctor.getExperience());
        dto.setFees(doctor.getFees());
        dto.setRating(doctor.getRating());
        dto.setPrime(doctor.isPrime());
        dto.setDescription(doctor.getDescription());
        // Speciality
        Speciality speciality = doctor.getSpeciality();
        if (speciality != null) {
            SpecialityDto specialityDto = new SpecialityDto();
            specialityDto.setId(speciality.getId());
            specialityDto.setName(speciality.getName());
            dto.setSpeciality(specialityDto);
        }

        // Clinic
        Clinic clinic = doctor.getClinic();
        if (clinic != null) {
            ClinicInfo clinicDto = new ClinicInfo();
            clinicDto.setId(clinic.getId());
            clinicDto.setName(clinic.getName());
            clinicDto.setAddress(clinic.getAddress());
            clinicDto.setPincode(clinic.getPincode());
            clinicDto.setCityName(clinic.getCity().getName());
            dto.setClinic(clinicDto);
        }
        return dto;
    }
}
