package com.finddr.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.util.Set;

@Data
@Entity
@Table(name = "clinics")
@EqualsAndHashCode(onlyExplicitlyIncluded = true, callSuper = true)
@AllArgsConstructor
@NoArgsConstructor
public class Clinic extends BaseEntity {

  @NotBlank(message = "Clinic name required")
  @Column(length = 50, nullable = false)
  private String name;

  @NotBlank(message = "Address is required")
  @Column(columnDefinition = "TEXT", nullable = false)
  private String address;

  @Pattern(regexp = "^[1-9]/d{5}$", message = "Invalid Indian postal code")
  @Column(name = "pincode", length = 10)
  private String pincode;

  @Email(message = "Invalid email format")
  @Column(name = "email", unique = true)
  private String email;

  @Pattern(regexp = "^(\\+91)?[6-9]\\d{9}$", message = "Invalid Indian mobile number format")
  @Column(name = "phone_number", unique = true)
  private String phoneNumber;

  @Column(name = "clinic_description",length = 600)
  private String clinicDescription;

  @NotNull(message = "Latitude is required")
  @Column(nullable = false)
  private Double latitude;

  @NotNull(message = "Longitude is required")
  @Column(nullable = false)
  private Double longitude;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "city_id", nullable = false)
  private City city;

  @Column(name = "image")
  private String image;

  @OneToMany(mappedBy = "clinic", cascade = CascadeType.ALL, orphanRemoval = true)
  private Set<ClinicImage> clinicImages;

  @ManyToMany(fetch = FetchType.LAZY)
  @JoinTable(
          name = "clinic_services",
          joinColumns = @JoinColumn(name = "clinic_id"),
          inverseJoinColumns = @JoinColumn(name = "service_id")
  )
  private Set<Service> services;
}
