package com.finddr.controller;

import com.finddr.dto.ApiResponse;
import com.finddr.dto.Appointment.BookAppointmentDto;
import com.finddr.security.CustomUserDetails;
import com.finddr.service.AppointmentService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/appointments")
@RequiredArgsConstructor
public class AppointmentController {

  private final AppointmentService appointmentService;

  @PostMapping("/book")
  //  @PreAuthorize("hasRole('PATIENT')")
  public ResponseEntity<ApiResponse<String>> bookAppointment(@AuthenticationPrincipal CustomUserDetails userDetails,@Valid @RequestBody BookAppointmentDto bookAppointmentDto) {
    return ResponseEntity.ok(appointmentService.bookAppointment(userDetails, bookAppointmentDto));
  }
}
