package com.finddr.controller;

import com.finddr.dto.Doctor.DoctorScheduleDto;
import com.finddr.service.DoctorScheduleService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/schedules")
@RequiredArgsConstructor
public class SlotController {
    private final DoctorScheduleService scheduleService;

    // GET schedules for a doctor on a specific day
    @GetMapping("/doctor/{doctorId}/day/{day}")
    public ResponseEntity<DoctorScheduleDto> getSchedulesByDoctorAndDay(@PathVariable Long doctorId, @PathVariable String day) {
        return ResponseEntity.ok(scheduleService.getScheduleByDoctorandDay(doctorId, day));
    }
}
