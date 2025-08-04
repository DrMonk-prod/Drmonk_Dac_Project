package com.finddr.controller;

import com.finddr.dto.UserDto;
import com.finddr.service.PatientService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/patient")
@RequiredArgsConstructor
public class PatientController {
  private final PatientService patientService;

  @GetMapping("/")
  public ResponseEntity<List<UserDto>> getAllPatients() {
    return ResponseEntity.ok(patientService.getAllPatients());
  }

}
