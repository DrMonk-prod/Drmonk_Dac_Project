package com.finddr.controller;

import com.finddr.dto.Appointment.AppointmentDto;
import com.finddr.dto.ApiResponse;
import com.finddr.dto.User.UserDto;
import com.finddr.security.CustomUserDetails;
import com.finddr.service.PatientService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/patients")
@RequiredArgsConstructor
public class PatientController {
  private final PatientService patientService;

  // ------------------- PATIENT ROLE -------------------
  @GetMapping("/appointments")
  @PreAuthorize("hasRole('PATIENT')")
  public ResponseEntity<List<AppointmentDto>> getMyAppointments(@AuthenticationPrincipal CustomUserDetails userDetails) {
    return ResponseEntity.ok(patientService.getMyAppointments(userDetails));
  }

//  @DeleteMapping("/me/appointments/{id}")
//  @PreAuthorize("hasRole('PATIENT')")
//  public ResponseEntity<?> cancelAppointment(@PathVariable Long id) {
//    patientService.cancelAppointment(id);
//    return ResponseEntity.ok().build();
//  }


  // ------------------- ADMIN/DOCTOR ROLE -------------------

  @GetMapping
//  @PreAuthorize("hasAnyRole('ADMIN', 'DOCTOR')")
  public ResponseEntity<List<UserDto>> getAllPatients() {
    return ResponseEntity.ok(patientService.getAllPatients());
  }

  @GetMapping("/{id}")
//  @PreAuthorize("hasAnyRole('ADMIN', 'DOCTOR')")
  public ResponseEntity<UserDto> getPatientById(@PathVariable Long id) {
    return ResponseEntity.ok(patientService.getPatientById(id));
  }

  @DeleteMapping("/{id}")
//  @PreAuthorize("hasRole('ADMIN')")
  public ResponseEntity<ApiResponse<Void>> deletePatient(@PathVariable Long id) {
    patientService.deletePatient(id);
    return ResponseEntity.ok(ApiResponse.send("Patient deleted successfully with id: " + id));
  }

}
