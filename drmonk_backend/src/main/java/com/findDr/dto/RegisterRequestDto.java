package com.findDr.dto;

import com.findDr.entity.type.RoleType;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;


@Data
public class RegisterRequestDto {
  @NotBlank(message = "Full name is required")
  private String fullName;

  @NotBlank(message = "Email is required")
  @Email(message = "Invalid email format")
  private String email;

  @NotBlank(message = "Phone number is required")
  @Size(min = 10, max = 10, message = "Phone number must be exactly 10 digits")
  private String phoneNumber;

  @Size(min = 8,max=30, message = "Password must be at least 8 characters long")
  private String password;

  @NotNull
  private RoleType role;
}
