package com.finddr.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DoctorDto extends BaseDto {
  private String fullName;
  private String speciality;
  private int experience;
  private int fees;
  private double rating;
  private boolean isPrime;
  private String description;
  private String clinicName;
  private String clinicAddress;
  private String cityName;
  private Double latitude;
  private Double longitude;
}
