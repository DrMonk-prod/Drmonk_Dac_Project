package com.finddr.repository;

import com.finddr.entity.DoctorLeave;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface DoctorLeaveRepository extends JpaRepository<DoctorLeave, Long> {

  @Query("SELECT COUNT(l)>0 FROM DoctorLeave l WHERE l.doctor.id = :doctorId AND :appointmentTime BETWEEN l.startDate AND l.endDate")
  boolean isDoctorOnLeave(Long doctorId, java.time.LocalDateTime appointmentTime);

  @Query("SELECT dl FROM DoctorLeave dl WHERE dl.doctor.id = :doctorId AND dl.startDate < :startOfNextDay AND dl.endDate >= :startOfDay")
  List<DoctorLeave> findLeavesByDoctorAndDateRange(Long doctorId, LocalDateTime startOfDay, LocalDateTime startOfNextDay);

}
