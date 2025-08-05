package com.finddr.dto.Clinic;

import lombok.Data;

@Data
public class  ClinicInfo {
  private Long id;
  private String name;
  private String address;
  private Double latitude;
  private Double longitude;
  private String pincode;
  private String cityName;
}
