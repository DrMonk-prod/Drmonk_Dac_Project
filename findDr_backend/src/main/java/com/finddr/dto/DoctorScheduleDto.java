package com.finddr.dto;

import com.finddr.entity.type.DayOfWeek;
import lombok.Data;

import java.time.LocalTime;

@Data
public class DoctorScheduleDto {
    private Long id;
    private Long doctorId;
    private DayOfWeek dayOfWeek;
    private LocalTime startTime;
    private LocalTime endTime;
    private Integer slotDurationMinutes;
}