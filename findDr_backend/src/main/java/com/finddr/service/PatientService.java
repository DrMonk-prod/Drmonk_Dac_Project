package com.finddr.service;

import com.finddr.dto.AppointmentDto;
import com.finddr.dto.UserDto;

import java.util.List;

public interface PatientService {
  List<UserDto> getAllPatients();

  UserDto getPatientById(Long id);

  void deletePatient(Long id);

  List<AppointmentDto> getMyAppointments();
}
