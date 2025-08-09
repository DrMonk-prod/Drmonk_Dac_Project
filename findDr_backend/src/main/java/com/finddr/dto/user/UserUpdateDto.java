package com.finddr.dto.user;

import com.finddr.entity.type.GenderType;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserUpdateDto {
  private String fullName;

  private String email;

  private GenderType gender;

  private String phoneNumber;
  
  private String profileImg;
}
