package com.finddr.dto;

import com.finddr.entity.type.GenderType;
import com.finddr.entity.type.RoleType;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserDto extends BaseDto {
  private String fullName;

  private String email;

  private GenderType gender;

  private String phoneNumber;

  private RoleType role;

  private String profileImg;
}
