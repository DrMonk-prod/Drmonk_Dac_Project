package com.finddr.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.DecimalMax;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Size;
import lombok.*;

@Entity
@Table(name = "doctors")
@Getter
@Setter
@ToString(callSuper = true)
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true, callSuper = false)
public class Doctor extends BaseEntity {

    @OneToOne(optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "clinic_id")
    private Clinic clinic;

    @Min(0)
    @Column(name = "experience", nullable = false)
    private int experience = 0;

    @ManyToOne
    @JoinColumn(name = "speciality_id")
    private Speciality speciality;

    @Min(0)
    @Column(name = "consultation_fees", nullable = false)
    private int fees;

    @DecimalMin(value = "0.0", inclusive = true)
    @DecimalMax(value = "5.0", inclusive = true)
    @Column(name = "rating", nullable = false)
    private double rating = 0.0;

    @Column(name = "is_prime", nullable = false)
    private boolean isPrime = false;

    @Size(max = 500)
    @Column(name = "description", length = 500)
    private String description;
}
