package com.finddr.controller;

import com.finddr.dto.DoctorRequestDto;
import com.finddr.entity.Doctor;
import com.finddr.service.DoctorServiceImpl;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/doctor")
public class DoctorController {
    DoctorServiceImpl doctorService;

    @GetMapping("/")
    public ResponseEntity<List<Doctor>> getAllDoctor() {
        return ResponseEntity.ok(doctorService.getAllDoctors());
    }

    @PostMapping
    public ResponseEntity<Doctor> createDoctor(@RequestBody @Valid DoctorRequestDto dto) {
        Doctor doctor = doctorService.createDoctor(dto);
        return ResponseEntity.ok(doctor);
    }
}
