package com.finddr.dto;

import com.finddr.entity.type.AppointmentStatus;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class AppointmentDto extends BaseDto {

  private LocalDateTime appointmentTime;
  private AppointmentStatus status;
  private String reasonForVisit;
  private String cancellationReason;


  // Fields for Nested Objects
  private DoctorInfo doctor;
  private ClinicInfo clinic;


  @Data
  public static class DoctorInfo {
    private Long id;
    private String doctorName;
    private String speciality;
    private String profileImageUrl;
  }


  @Data
  public static class ClinicInfo {
    private Long id;
    private String clinicName;
    private String address;
    private Double latitude;
    private Double longitude;
  }
}
