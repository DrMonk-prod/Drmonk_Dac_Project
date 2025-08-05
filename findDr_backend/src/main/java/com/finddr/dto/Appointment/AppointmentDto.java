package com.finddr.dto.Appointment;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.finddr.dto.BaseDto;
import com.finddr.dto.Clinic.ClinicInfo;
import com.finddr.entity.type.AppointmentStatus;
import com.finddr.entity.type.RoleType;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@EqualsAndHashCode(onlyExplicitlyIncluded = true,callSuper = true)
public class AppointmentDto extends BaseDto {

  private LocalDateTime appointmentTime;
  private AppointmentStatus status;
  private String reasonForVisit;
  private String cancellationReason;
  private RoleType cancelledBy;

  private DoctorInfo doctor;
  private ClinicInfo clinic;

  @Data
  public static class DoctorInfo {
    private Long id;
    @JsonProperty("name")
    private String userName;
    @JsonProperty("profileImage")
    private String userProfileImg;
    @JsonProperty("speciality")
    private String specialityName;
  }

}


