package com.finddr.dto.doctor;


import com.finddr.entity.type.VerificationStatus;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class DoctorVerificationDto {
    private Long id;
    private Long userId;
    private String fullName;
    private String degree;
    private String registrationNumber;
    private String registrationCouncil;
    private VerificationStatus verificationStatus;
    private LocalDateTime verifiedAt;
    private String notes;
}
