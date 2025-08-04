package com.finddr.service;

import com.finddr.dto.UserDto;

import java.util.List;

public interface PatientService {
  List<UserDto> getAllPatients();
}
