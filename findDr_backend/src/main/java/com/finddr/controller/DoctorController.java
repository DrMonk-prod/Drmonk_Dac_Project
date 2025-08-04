package com.finddr.controller;

import com.finddr.entity.Doctor;
import com.finddr.service.DoctorService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/doctor")
public class DoctorController {
  DoctorService doctorService;

  @GetMapping("/")
  public ResponseEntity<List<Doctor>> getAllDoctor() {
    return ResponseEntity.ok(doctorService.getAllDoctors());
  }
}
