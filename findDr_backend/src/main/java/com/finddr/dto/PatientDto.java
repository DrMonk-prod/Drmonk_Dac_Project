package com.finddr.dto;

import com.finddr.entity.type.RoleType;
import lombok.Data;

@Data
public class PatientDto {
  private String fullName;

  private String email;

  private String phoneNumber;

  private String passwordHash;

  private RoleType role;

  private String profileImg;

  private boolean isActive = true;
}
