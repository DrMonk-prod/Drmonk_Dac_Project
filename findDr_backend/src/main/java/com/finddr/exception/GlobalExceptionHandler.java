package com.finddr.exception;

import io.jsonwebtoken.JwtException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.nio.file.AccessDeniedException;
import java.util.stream.Collectors;

@RestControllerAdvice
public class GlobalExceptionHandler {

  @ExceptionHandler(ApiException.class)
  public ResponseEntity<ApiError> handleApiException(ApiException ex) {
    ApiError apiError = new ApiError(
            ex.getErrorCode().name(),
            ex.getMessage(),
            ex.getStatus()
    );
    return new ResponseEntity<>(apiError, ex.getStatus());
  }

  @ExceptionHandler(UsernameNotFoundException.class)
  public ResponseEntity<ApiError> handleUsernameNotFoundException(UsernameNotFoundException ex) {
    ApiError apiError = new ApiError(
            ErrorCode.USER_NOT_FOUND.name(),
            "Username not found: " + ex.getMessage(),
            HttpStatus.NOT_FOUND
    );
    return new ResponseEntity<>(apiError, HttpStatus.NOT_FOUND);
  }

  @ExceptionHandler(AuthenticationException.class)
  public ResponseEntity<ApiError> handleAuthenticationException(AuthenticationException ex) {
    ApiError apiError = new ApiError(
            ErrorCode.INVALID_CREDENTIALS.name(),
            "Authentication failed: " + ex.getMessage(),
            HttpStatus.UNAUTHORIZED
    );
    return new ResponseEntity<>(apiError, HttpStatus.UNAUTHORIZED);
  }

  @ExceptionHandler(JwtException.class)
  public ResponseEntity<ApiError> handleJwtException(JwtException ex) {
    ApiError apiError = new ApiError(
            ErrorCode.UNAUTHORIZED_ACCESS.name(),
            "Invalid JWT token: " + ex.getMessage(),
            HttpStatus.UNAUTHORIZED
    );
    return new ResponseEntity<>(apiError, HttpStatus.UNAUTHORIZED);
  }

  @ExceptionHandler(AccessDeniedException.class)
  public ResponseEntity<ApiError> handleAccessDeniedException(AccessDeniedException ex) {
    ApiError apiError = new ApiError(
            ErrorCode.FORBIDDEN_ACTION.name(),
            "Access denied: Insufficient permissions",
            HttpStatus.FORBIDDEN
    );
    return new ResponseEntity<>(apiError, HttpStatus.FORBIDDEN);
  }

  @ExceptionHandler(MethodArgumentNotValidException.class)
  public ResponseEntity<ApiError> handleValidationException(MethodArgumentNotValidException ex) {
    String errorMessage = ex.getBindingResult().getFieldErrors().stream()
            .map(err -> err.getField() + ": " + err.getDefaultMessage())
            .collect(Collectors.joining(", "));

    ApiError apiError = new ApiError(
            ErrorCode.VALIDATION_ERROR.name(),
            errorMessage,
            HttpStatus.BAD_REQUEST
    );
    return new ResponseEntity<>(apiError, HttpStatus.BAD_REQUEST);
  }

  @ExceptionHandler(Exception.class)
  public ResponseEntity<ApiError> handleGenericException(Exception ex) {
    ex.printStackTrace();

    ApiError apiError = new ApiError(
            ErrorCode.INTERNAL_ERROR.name(),
            "An unexpected error occurred: " + ex.getMessage(),
            HttpStatus.INTERNAL_SERVER_ERROR
    );
    return new ResponseEntity<>(apiError, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
