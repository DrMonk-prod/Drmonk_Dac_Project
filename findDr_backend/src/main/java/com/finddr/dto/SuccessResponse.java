package com.finddr.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SuccessResponse<T> {

  private Instant timestamp;
  private int status;
  private String message;
  private T data;

  public static <T> SuccessResponse<T> of(String message, T data) {
    return SuccessResponse.<T>builder()
            .timestamp(Instant.now())
            .status(200)
            .message(message)
            .data(data)
            .build();
  }

  public static <T> SuccessResponse<T> deleted(String message) {
    return SuccessResponse.<T>builder()
            .timestamp(Instant.now())
            .status(200)
            .message(message)
            .data(null)
            .build();
  }

  public static <T> SuccessResponse<T> ok(T data) {
    return of("Request successful", data);
  }
}
