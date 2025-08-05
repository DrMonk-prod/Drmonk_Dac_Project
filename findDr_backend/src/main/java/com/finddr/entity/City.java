package com.finddr.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
@Entity
@Table(name = "cities", uniqueConstraints = {
        @UniqueConstraint(columnNames = {"name", "state"})
})
public class City {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @NotBlank(message = "City name is required")
  @Column(nullable = false)
  private String name;

  @NotBlank(message = "State is required")
  @Column(nullable = false)
  private String state;

  @NotNull(message = "Latitude is required")
  @Column(nullable = false)
  private Double latitude;

  @NotNull(message = "Longitude is required")
  @Column(nullable = false)
  private Double longitude;
}
