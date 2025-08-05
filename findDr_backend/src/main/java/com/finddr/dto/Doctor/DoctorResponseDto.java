package com.finddr.dto.Doctor;


import com.finddr.dto.Clinic.ClinicInfo;
import com.finddr.dto.SpecialityDto;
import lombok.Data;

@Data
public class DoctorResponseDto {
    private Long id;
    private String fullName;
    private String email;
    private String phoneNumber;

    private SpecialityDto speciality;
    private ClinicInfo clinic;

    private int experience;
    private int fees;
    private double rating;
    private boolean isPrime;
    private String description;

}


