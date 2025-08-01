package com.drmonk.exception;

import lombok.Data;
import org.springframework.http.HttpStatus;

import java.time.LocalDateTime;

@Data
public class ApiError {

  private String errorCode;
  private String message;
  private HttpStatus status;
  private LocalDateTime timestamp;

  public ApiError() {
    this.timestamp = LocalDateTime.now();
  }

  public ApiError(String errorCode, String message, HttpStatus status) {
    this();
    this.errorCode = errorCode;
    this.message = message;
    this.status = status;
  }
}
