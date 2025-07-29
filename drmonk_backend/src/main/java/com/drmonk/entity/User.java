package com.drmonk.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "users")
@Getter
@Setter
@ToString(callSuper = true)
@NoArgsConstructor
@AllArgsConstructor
public class User extends BaseEntity{
  @Column(name = "full_name", nullable = false)
  private String fullName;

  @Column(name = "email", unique = true, nullable = false)
  private String email;

  @Column(name = "phone_number", unique = true, length = 10)
  private String phoneNumber;

  @Column(name = "password_hash", nullable = false)
  private String passwordHash;

  @Enumerated(EnumType.STRING)
  @Column(name = "role", nullable = false)
  private Role role;
}
