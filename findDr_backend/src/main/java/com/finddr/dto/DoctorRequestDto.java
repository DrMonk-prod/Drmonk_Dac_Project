package com.finddr.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class DoctorRequestDto {
    @NotNull(message = "User ID is required")
    private Long userId;
    @NotNull(message = "Clinic Id is required")
    private Long clinicId; // Optional (some doctors may not belong to a clinic)

    @NotNull(message = "Specialty ID is required")
    private Long specialtyId;

    @Min(value = 0, message = "Experience cannot be negative")
    private int experience;

    @Min(value = 0, message = "Fees must be zero or positive")
    private int fees;

    @Size(max = 500, message = "Description must be 500 characters or less")
    private String description;
}
