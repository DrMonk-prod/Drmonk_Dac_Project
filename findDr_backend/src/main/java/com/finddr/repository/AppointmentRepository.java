package com.finddr.repository;

import com.finddr.entity.Appointment;
import com.finddr.entity.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {

  boolean existsByDoctorAndAppointmentTime(Doctor doctor, LocalDateTime appointmentTime);

  List<Appointment> findByPatientId(Long patientId);
}
