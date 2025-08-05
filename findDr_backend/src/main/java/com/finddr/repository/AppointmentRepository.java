package com.finddr.repository;

import com.finddr.entity.Appointment;
import com.finddr.entity.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {

  boolean existsByAppointmentTime(LocalDateTime appointmentTime);

  boolean existsByDoctorAndAppointmentTime(Doctor doctor, LocalDateTime appointmentTime);
}
