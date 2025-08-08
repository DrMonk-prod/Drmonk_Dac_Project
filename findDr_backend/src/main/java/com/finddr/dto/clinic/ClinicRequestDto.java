package com.finddr.dto.clinic;

import com.finddr.entity.ClinicImage;
import com.finddr.entity.Service;
import jakarta.validation.constraints.*;
import lombok.Data;

import java.util.Set;

@Data
public class ClinicRequestDto {

    @NotBlank(message = "Clinic name required")
    private String name;

    @NotBlank(message = "Address is required")
    @Size(max = 200,message = "Address must be 600 characters or less")
    private String address;

    @Pattern(regexp = "^[1-9]/d{5}$", message = "Invalid Indian postal code")
    private String pincode;

    @Email(message = "Invalid email format")
    private String email;

    @Pattern(regexp = "^(\\+91)?[6-9]\\d{9}$", message = "Invalid Indian mobile number format")
    private String phoneNumber;

    @Size(max = 600,message = "About must be 600 characters or less")
    private String about;

    @NotNull(message = "Latitude is required")
    private Double latitude;

    @NotNull(message = "Longitude is required")
    private Double longitude;

    private int cityId;

    private Set<ClinicImage> clinicImages;

    private Set<Service> services;
}
