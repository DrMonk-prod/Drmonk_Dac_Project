package com.finddr.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class SpecialityDto {
    private Long id;

    @NotBlank(message = "Speciality name required")
    private String name;

    @Size(min = 50, max = 300, message = "Description should be at least 50 characters and no more than 300")
    private String description;
}
