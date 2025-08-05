package com.finddr.dto;

import lombok.Data;

@Data
public class ClinicSummaryDto {
    private Long id;
    private String name;
    private String address;
    private String pincode;
    private String cityName;
}
