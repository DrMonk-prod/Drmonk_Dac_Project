package com.finddr.dto.Doctor;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.finddr.dto.BaseDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@EqualsAndHashCode(onlyExplicitlyIncluded = true, callSuper = true)
@NoArgsConstructor
@AllArgsConstructor
public class DoctorDto extends BaseDto {
    private int userId;
    private int clinicId;
    private int specialtyId;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String fullName;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
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
