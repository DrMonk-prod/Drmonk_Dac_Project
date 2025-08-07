package com.finddr.entity;

import com.finddr.entity.type.PaymentStatus;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@Entity
@Table(name = "payments")
@EqualsAndHashCode(onlyExplicitlyIncluded = true, callSuper = true)
public class Payment extends BaseEntity {

  @Column(name = "txn_id", unique = true)
  private String txnId;

  @NotNull(message = "Payment amount is required")
  @Column(name = "amount", nullable = false)
  private int amount;

  @Enumerated(EnumType.STRING)
  @Column(name = "payment_status", nullable = false)
  private PaymentStatus paymentStatus;

  @OneToOne(mappedBy = "payment")
  private Appointment appointment;
}
