package com.finddr.service;

import com.finddr.dto.DoctorRequestDto;
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
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class DoctorServiceImpl {

    private final UserRepository userRepository;
    private final DoctorRepository doctorRepository;
    private final SpecialityRepository specialityRepository;
    private final ClinicRepository clinicRepository;
    private final ModelMapper mapper;

    public Doctor createDoctor(DoctorRequestDto doctorDto) {
        Doctor doctor = mapper.map(doctorDto, Doctor.class);
        User user = userRepository.findById(doctorDto.getUserId()).orElse(null);
        Clinic clinic = clinicRepository.findById(doctorDto.getClinicId()).orElse(null);
        Speciality speciality = specialityRepository.findById(doctorDto.getSpecialtyId()).orElse(null);
        if (user == null || clinic == null || speciality == null) {
            throw new ApiException(ErrorCode.INADEQUATE_DOCTOR_DATA, "Inadequate data", HttpStatus.NOT_FOUND);
        }


        doctor.setClinic(clinic);
        doctor.setSpeciality(speciality);
        doctor.setUser(user);
        return doctorRepository.save(doctor);
    }

    public List<Doctor> getAllDoctors() {
        return doctorRepository.findAll();
    }

    public Optional<Doctor> getDoctorById(Long id) {
        
        return doctorRepository.findById(id);
    }

    public void deleteDoctor(Long id) {
        doctorRepository.deleteById(id);
    }
}
