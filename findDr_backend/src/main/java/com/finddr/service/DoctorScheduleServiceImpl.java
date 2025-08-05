package com.finddr.service;

import com.finddr.dto.DoctorScheduleDto;
import com.finddr.entity.DoctorSchedule;
import com.finddr.entity.type.DayOfWeek;
import com.finddr.exception.ApiException;
import com.finddr.exception.ErrorCode;
import com.finddr.repository.ScheduleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class DoctorScheduleServiceImpl {
    private final ScheduleRepository scheduleRepository;

    public DoctorScheduleDto getScheduleByDoctorandDay(Long id, String day) {
        DoctorSchedule schedule = scheduleRepository.findByDoctorIdAndDayOfWeek(id, Enum.valueOf(DayOfWeek.class, day.toUpperCase()))
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
