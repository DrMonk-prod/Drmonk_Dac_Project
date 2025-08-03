package com.finddr.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.*;
import org.hibernate.validator.constraints.URL;

@Data
@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "clinic_images")
public class ClinicImage extends BaseEntity {

  @NotBlank(message = "Image URL is required")
  @URL(message = "Invalid URL format")
  @Column(name = "image_url", nullable = false)
  private String imageUrl;

  @Column(name = "caption")
  private String caption;

  @ToString.Exclude
  @EqualsAndHashCode.Exclude
  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "clinic_id", nullable = false)
  private Clinic clinic;
}
