package com.finddr.dto;


import lombok.Data;

@Data
public class DoctorResponseDto {
    private Long id;
    private String fullName;
    private String email;
    private String phoneNumber;

    private SpecialitySummaryDto speciality;
    private ClinicSummaryDto clinic;

    private int experience;
    private int fees;
    private double rating;
    private boolean isPrime;
    private String description;
}
