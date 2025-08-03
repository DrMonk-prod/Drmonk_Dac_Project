package com.finddr.entity;

//import jakarta.persistence.*;
//import jakarta.validation.constraints.*;
//
//import java.time.LocalDateTime;
//
//@Entity
//@Table(name = "reviews")
//public class Review {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    @OneToOne(optional = false)
//    @JoinColumn(name = "appointment_id", nullable = false)
//    private Appointment appointment;
//
//    @ManyToOne(optional = false)
//    @JoinColumn(name = "patient_id", nullable = false)
//    private User patient;
//
//    @ManyToOne(optional = false)
//    @JoinColumn(name = "doctor_id", nullable = false)
//    private Doctor doctor;
//
//    @Min(value = 1, message = "Rating must be at least 1")
//    @Max(value = 5, message = "Rating must be at most 5")
//    private int rating;
//
//    @Size(max = 1000, message = "Comment cannot exceed 1000 characters")
//    private String comment;
//
//    private LocalDateTime createdAt;
//
//    @PrePersist
//    protected void onCreate() {
//        this.createdAt = LocalDateTime.now();
//    }
//}
//

public class Review {
}