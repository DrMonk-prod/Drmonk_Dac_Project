package com.drmonk.exception;

import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;

@Getter
@Setter
public class ApiException extends RuntimeException {
  private final ErrorCode errorCode;
  private final HttpStatus status;

  public ApiException(ErrorCode errorCode, String message, HttpStatus status) {
    super(message);
    this.errorCode = errorCode;
    this.status = status;
  }
}
