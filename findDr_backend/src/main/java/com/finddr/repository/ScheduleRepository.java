package com.finddr.repository;


import com.finddr.entity.DoctorSchedule;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.DayOfWeek;
import java.util.List;
import java.util.Optional;

public interface ScheduleRepository extends JpaRepository<DoctorSchedule, Long> {
    List<DoctorSchedule> findByDoctorId(Long doctorId);

    Optional<DoctorSchedule> findByDoctorIdAndDayOfWeek(Long doctorId, DayOfWeek dayOfWeek);
}