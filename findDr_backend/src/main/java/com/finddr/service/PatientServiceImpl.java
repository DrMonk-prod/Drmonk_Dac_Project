package com.finddr.service;

import com.finddr.dto.AppointmentDto;
import com.finddr.dto.UserDto;
import com.finddr.entity.Appointment;
import com.finddr.entity.User;
import com.finddr.exception.ApiException;
import com.finddr.exception.ErrorCode;
import com.finddr.repository.AppointmentRepository;
import com.finddr.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;

import static com.finddr.entity.type.RoleType.PATIENT;

@Service
@RequiredArgsConstructor
public class PatientServiceImpl implements PatientService {
  private final UserRepository userRepository;
  private final AppointmentRepository appointmentRepository;
  private final ModelMapper mapper;

  @Override
  public List<UserDto> getAllPatients() {
    List<User> patients = userRepository.findByRole(PATIENT);
    return patients.stream().map(patient -> mapper.map(patient, UserDto.class)).toList();
  }


  @Override
  public UserDto getPatientById(Long id) {
    User patient = userRepository.findByIdAndRole(id, PATIENT);

    if (patient == null) throw new ApiException(
            ErrorCode.USER_NOT_FOUND,
            "Patient not found with id: " + id,
            HttpStatus.NOT_FOUND
    );

    return mapper.map(patient, UserDto.class);
  }

  @Override
  public void deletePatient(Long id) {
    User patient = userRepository.findByIdAndRole(id, PATIENT);
    if (patient == null) throw new ApiException(
            ErrorCode.USER_NOT_FOUND,
            "Patient not found with id: " + id,
            HttpStatus.NOT_FOUND
    );
    userRepository.delete(patient);
  }

  @Override
  public List<AppointmentDto> getMyAppointments() {
    List<Appointment> appointments = appointmentRepository.findAll();
    List<AppointmentDto> appointmentDtos = appointments.stream().map(appointment -> {
      AppointmentDto appointmentDto = mapper.map(appointment, AppointmentDto.class);
      return appointmentDto;
    }).toList();
    return List.of();
  }
}
