package com.finddr.controller;

import com.finddr.dto.DoctorVerificationDto;
import com.finddr.dto.UpdateVerificationStatusDto;
import com.finddr.service.DoctorVerificationService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin/verifications")
@RequiredArgsConstructor
public class AdminController {

    private final DoctorVerificationService service;

    @GetMapping
    public ResponseEntity<List<DoctorVerificationDto>> getAll() {
        return ResponseEntity.ok(service.getAllVerifications());
    }

    @GetMapping("/{id}")
    public ResponseEntity<DoctorVerificationDto> getById(@PathVariable Long id) {
        return ResponseEntity.ok(service.getVerificationById(id));
    }

    @GetMapping("/pending")
    public ResponseEntity<List<DoctorVerificationDto>> getPending() {
        return ResponseEntity.ok(service.getPendingVerifications());
    }

    @GetMapping("/verified")
    public ResponseEntity<List<DoctorVerificationDto>> getVerified() {
        return ResponseEntity.ok(service.getVerifiedVerifications());
    }

    @GetMapping("/rejected")
    public ResponseEntity<List<DoctorVerificationDto>> getRejected() {
        return ResponseEntity.ok(service.getRejectedVerifications());
    }

    @PutMapping("/{id}")
    public ResponseEntity<DoctorVerificationDto> updateStatus(
            @PathVariable Long id,
            @RequestBody @Valid UpdateVerificationStatusDto dto
    ) {
        DoctorVerificationDto updated = service.updateVerificationStatus(id, dto);
        return ResponseEntity.ok(updated);
    }
}
