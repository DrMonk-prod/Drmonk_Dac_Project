package com.finddr.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
@Entity
@Table(name = "specialities")
public class Speciality {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @NotBlank(message = "Speciality name required")
  @Column(unique = true, nullable = false)
  private String name;

  @Size(min = 50, max = 300, message = "Description should be at least 50 characters and no more than 300")
  @Column(length = 300, nullable = false)
  private String description;
}
