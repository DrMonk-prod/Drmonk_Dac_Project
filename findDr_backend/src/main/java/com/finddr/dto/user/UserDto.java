package com.finddr.dto.user;

import com.finddr.dto.BaseDto;
import com.finddr.entity.type.GenderType;
import com.finddr.entity.type.RoleType;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@EqualsAndHashCode(onlyExplicitlyIncluded = true,callSuper = true)
public class UserDto extends BaseDto {
  private String fullName;

  private String email;

  private GenderType gender;

  private String phoneNumber;

  private RoleType role;

  private String profileImg;
}
