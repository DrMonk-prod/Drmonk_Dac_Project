package com.finddr.dto;

import com.finddr.entity.type.RoleType;
import jakarta.persistence.Column;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.validation.constraints.NotNull;

public class PatientDto {
  @NotNull(message = "Full name is required")
  private String fullName;

  @Column(unique = true, nullable = false, length = 50)
  private String email;

  @Column(name = "phone_number", unique = true, length = 10)
  private String phoneNumber;

  @Column(name = "password_hash", nullable = false)
  private String passwordHash;

  @Enumerated(EnumType.STRING)
  @Column(nullable = false)
  private RoleType role;

  @Column(name = "profile_img", length = 512)
  private String profileImg;

  @Column(name = "is_active")
  private boolean isActive = true;
}
