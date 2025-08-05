package com.finddr.service;

import com.finddr.dto.Doctor.DoctorScheduleDto;
import com.finddr.entity.DoctorSchedule;
import com.finddr.exception.ApiException;
import com.finddr.exception.ErrorCode;
import com.finddr.repository.ScheduleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.time.DayOfWeek;

@Service
@RequiredArgsConstructor
public class DoctorScheduleService {
    private final ScheduleRepository scheduleRepository;

    public DoctorScheduleDto getScheduleByDoctorandDay(Long id, String day) {

      DayOfWeek dayOfWeek;
      try {
        dayOfWeek = DayOfWeek.valueOf(day.toUpperCase());
      } catch (IllegalArgumentException e) {
        throw new ApiException(
                ErrorCode.INVALID_INPUT,
                "Invalid day of week: " + day + ". Please use a valid day (e.g., 'MONDAY').",
                HttpStatus.BAD_REQUEST
        );
      }

        DoctorSchedule schedule = scheduleRepository.findByDoctorIdAndDayOfWeek(id, dayOfWeek)
                .orElseThrow(() -> new ApiException(
                        ErrorCode.SCHEDULE_NOT_FOUND,
                        "Doctor schedule not found with id: " + id,
                        HttpStatus.NOT_FOUND
                ));

        return mapToDto(schedule);
    }

    private DoctorScheduleDto mapToDto(DoctorSchedule schedule) {
        DoctorScheduleDto dto = new DoctorScheduleDto();
        dto.setId(schedule.getId());
        dto.setDoctorId(schedule.getDoctor().getId());
        dto.setDayOfWeek(schedule.getDayOfWeek());
        dto.setStartTime(schedule.getStartTime());
        dto.setEndTime(schedule.getEndTime());
        dto.setSlotDurationMinutes(schedule.getSlotDurationMinutes());
        return dto;
    }
}
