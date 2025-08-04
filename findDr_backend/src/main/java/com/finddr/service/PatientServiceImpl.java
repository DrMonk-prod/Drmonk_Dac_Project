package com.finddr.service;

import com.finddr.dto.UserDto;
import com.finddr.entity.User;
import com.finddr.entity.type.RoleType;
import com.finddr.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PatientServiceImpl implements PatientService {
  private final UserRepository userRepository;
  private final ModelMapper mapper;

  @Override
  public List<UserDto> getAllPatients() {
    List<User> patients = userRepository.findByRoleAndIsActiveTrue(RoleType.PATIENT);
    List<UserDto> patientDtos = patients.stream().map(patient -> mapper.map(patient, UserDto.class)).toList();
    return patientDtos;
  }
}
