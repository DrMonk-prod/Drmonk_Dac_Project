package com.finddr.controller;

import com.finddr.dto.DoctorRequestDto;
import com.finddr.dto.DoctorResponseDto;
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
    public ResponseEntity<List<DoctorResponseDto>> getAllDoctor() {
        return ResponseEntity.ok(doctorService.getAllDoctors());
    }

    @PostMapping
    public ResponseEntity<DoctorResponseDto> createDoctor(@RequestBody @Valid DoctorRequestDto dto) {

        return ResponseEntity.ok(doctorService.createDoctor(dto));
    }

    @GetMapping("/{id}")
    public ResponseEntity<DoctorResponseDto> getDoctorById(@PathVariable Long id) {
        DoctorResponseDto doctor = doctorService.getDoctorById(id);
        return ResponseEntity.ok(doctor);
    }
}
