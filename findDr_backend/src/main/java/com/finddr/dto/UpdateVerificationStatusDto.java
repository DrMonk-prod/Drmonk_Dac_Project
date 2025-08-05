package com.finddr.dto;

import com.finddr.entity.type.VerificationStatus;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class UpdateVerificationStatusDto {

    @NotNull(message = "Verification status is required")
    private VerificationStatus verificationStatus;

    private String notes; // optional reason if rejected
}
