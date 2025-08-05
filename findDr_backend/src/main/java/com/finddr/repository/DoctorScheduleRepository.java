package com.finddr.repository;

import com.finddr.entity.Doctor;
import com.finddr.entity.DoctorSchedule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface DoctorScheduleRepository extends JpaRepository<DoctorSchedule, Long> {

  Optional<DoctorSchedule> findByDoctorAndDayOfWeek(Doctor doctor, java.time.DayOfWeek dayOfWeek);

}
