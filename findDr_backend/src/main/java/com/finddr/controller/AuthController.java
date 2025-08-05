package com.finddr.controller;

import com.finddr.dto.AuthResponseDto;
import com.finddr.dto.User.LoginRequestDto;
import com.finddr.dto.User.RegisterRequestDto;
import com.finddr.dto.User.RegisterResponseDto;
import com.finddr.security.AuthService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
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
