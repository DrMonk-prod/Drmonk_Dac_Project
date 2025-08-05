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
public class ApiResponse<T> {

  private Instant timestamp;
  private int status;
  private String message;
  private T data;

  public static <T> ApiResponse<T> send(String message) {
    return ApiResponse.<T>builder()
            .timestamp(Instant.now())
            .status(200)
            .message(message)
            .data(null)
            .build();
  }

  public static <T> ApiResponse<T> of(String message, T data) {
    return ApiResponse.<T>builder()
            .timestamp(Instant.now())
            .status(200)
            .message(message)
            .data(data)
            .build();
  }

  public static <T> ApiResponse<T> ok(T data) {
    return of("Request successful", data);
  }
}
