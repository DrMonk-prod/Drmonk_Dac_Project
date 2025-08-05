package com.finddr.entity;

import com.finddr.entity.type.GenderType;
import com.finddr.entity.type.RoleType;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.SQLRestriction;

@Entity
@Table(name = "users")
@Getter
@Setter
@ToString(callSuper = true)
@SQLRestriction("is_active = true")
@SQLDelete(sql = "UPDATE user SET is_active = false WHERE id = ?")
public class User extends BaseEntity {
  @Column(name = "full_name", nullable = false, length = 50)
  private String fullName;

  @Column(unique = true, nullable = false, length = 50)
  private String email;

  @Enumerated(EnumType.STRING)
  private GenderType gender;

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
