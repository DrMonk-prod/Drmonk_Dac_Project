package com.finddr.repository;

import com.finddr.entity.DoctorLeave;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Repository
public interface DoctorLeaveRepository extends JpaRepository<DoctorLeave, Long> {

  @Query("SELECT COUNT(l)>0 FROM DoctorLeave l WHERE l.doctor.id = :doctorId AND :appointmentTime BETWEEN l.startDate AND l.endDate")
  boolean isDoctorOnLeave(Long doctorId, java.time.LocalDateTime appointmentTime);

  @Query("SELECT COUNT(l) > 0 FROM DoctorLeave l WHERE l.doctor.id = :doctorId AND :forDate BETWEEN l.startDate AND l.endDate")
  boolean isDoctorOnLeaveOnDate(Long doctorId, LocalDate forDate);

  @Query("""
  SELECT COUNT(l) > 0
  FROM DoctorLeave l
  WHERE l.doctor.id = :doctorId
    AND l.startDate <= :endOfDay
    AND l.endDate >= :startOfDay
""")
  boolean isDoctorOnLeaveOnDate(Long doctorId, LocalDateTime startOfDay, LocalDateTime endOfDay);

}
