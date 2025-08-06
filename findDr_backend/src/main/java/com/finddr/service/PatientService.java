package com.finddr.service;

import com.finddr.dto.appointment.AppointmentDto;
import com.finddr.dto.user.UserDto;
import com.finddr.security.CustomUserDetails;

import java.util.List;

public interface PatientService {
  List<UserDto> getAllPatients();

  UserDto getPatientById(Long id);

  void deletePatient(Long id);

  List<AppointmentDto> getMyAppointments(CustomUserDetails userDetails);

}
