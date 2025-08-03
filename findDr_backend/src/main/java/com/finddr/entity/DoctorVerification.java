package com.finddr.entity;

import com.finddr.entity.type.VerificationStatus;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PastOrPresent;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "doctor_verification")
@Getter
@Setter
@ToString(callSuper = true)
@NoArgsConstructor
@AllArgsConstructor
public class DoctorVerification extends BaseEntity {

    @OneToOne(optional = false)
    @JoinColumn(name = "doctor_id", nullable = false)
    @NotNull(message = "Doctor must not be null")
    private Doctor doctor;

    @Column(name = "degree", length = 100)
    @NotBlank(message = "Degree must not be blank")
    @Size(max = 100, message = "Degree must be at most 100 characters")
    private String degree;

    @Column(name = "registration_number", length = 100)
    @NotBlank(message = "Registration number must not be blank")
    @Size(max = 100, message = "Registration number must be at most 100 characters")
    private String registrationNumber;

    @Column(name = "registration_council", length = 100)
    @NotBlank(message = "Registration Council must not be blank")
    @Size(max = 100, message = "Registration Council must be at most 100 characters")
    private String registrationCouncil;

    @Enumerated(EnumType.STRING)
    @Column(name = "verification_status")
    private VerificationStatus verificationStatus = VerificationStatus.PENDING;

    @Column(name = "verified_at")
    @PastOrPresent(message = "Verification time must be in the past or present")
    private LocalDateTime verifiedAt;

    @Column(name = "notes", length = 100)
    @Size(max = 100, message = "Notes must be at most 100 characters")
    private String notes;
}
