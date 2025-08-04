package com.finddr.entity;

import com.finddr.entity.type.AppointmentStatus;
import com.finddr.entity.type.RoleType;
import jakarta.persistence.*;
import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "appointments")
@EqualsAndHashCode(onlyExplicitlyIncluded = true, callSuper = false)
public class Appointment extends BaseEntity {

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "doctor_id", nullable = false)
  private Doctor doctor;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "patient_id", nullable = false)
  private User patient;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "clinic_id", nullable = false)
  private Clinic clinic;

  @NotNull(message = "Appointment time cannot be null")
  @Future(message = "Appointment must be in the future")
  @Column(name = "appointment_time", nullable = false)
  private LocalDateTime appointmentTime;

  @Enumerated(EnumType.STRING)
  @Column(nullable = false)
  private AppointmentStatus status = AppointmentStatus.SCHEDULED;

  @Size(max = 500, message = "Reason for visit should be at most 500 characters")
  @Column(name = "reason_for_visit", length = 500)
  private String reasonForVisit;

  @Enumerated(EnumType.STRING)
  @Column(name = "cancelled_by", nullable = false)
  private RoleType cancelledBy;
}
