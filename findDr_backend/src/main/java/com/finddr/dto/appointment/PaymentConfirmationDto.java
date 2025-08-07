package com.finddr.dto.appointment;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PaymentConfirmationDto {
  private String paymentId;
  private String orderId;
  private String reason;
}
