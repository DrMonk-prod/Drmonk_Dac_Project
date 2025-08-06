package com.finddr.dto.appointment;

import jakarta.validation.constraints.FutureOrPresent;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalTime;

@Getter
@Setter
public class BookAppointmentDto {
  @NotNull(message = "Doctor ID is required.")
  private Long doctorId;

  @NotNull(message = "Appointment date is required.")
  @FutureOrPresent(message = "Appointment date must be in the present or future.")
  private LocalDate date;

  @NotNull(message = "Appointment time is required.")
  private LocalTime time;

  @NotBlank(message = "Reason for appointment is required.")
  private String reason;
}
