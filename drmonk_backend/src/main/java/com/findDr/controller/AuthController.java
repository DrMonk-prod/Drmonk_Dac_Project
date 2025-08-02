package com.findDr.controller;

import com.findDr.dto.AuthResponseDto;
import com.findDr.dto.LoginRequestDto;
import com.findDr.dto.RegisterRequestDto;
import com.findDr.dto.RegisterResponseDto;
import com.findDr.security.AuthService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {

  private final AuthService authService;

  @Autowired
  public AuthController(AuthService authService) {
    this.authService = authService;
  }

  @PostMapping("/login")
  public ResponseEntity<AuthResponseDto> login(@Valid @RequestBody LoginRequestDto loginRequestDto) {
    return ResponseEntity.ok(authService.login(loginRequestDto));
  }

  @PostMapping("/signup")
  public ResponseEntity<RegisterResponseDto> signup(@Valid @RequestBody RegisterRequestDto registerRequestDto) {
    return ResponseEntity.ok(authService.signup(registerRequestDto));
  }
}
