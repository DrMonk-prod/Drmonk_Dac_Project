package com.finddr.service;

import com.finddr.dto.Appointment.AppointmentDto;
import com.finddr.dto.User.UserDto;
import com.finddr.security.CustomUserDetails;

import java.util.List;

public interface PatientService {
  List<UserDto> getAllPatients();

  UserDto getPatientById(Long id);

  void deletePatient(Long id);

  List<AppointmentDto> getMyAppointments(CustomUserDetails userDetails);
}
