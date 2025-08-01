package com.drmonk.controller;

import com.drmonk.dto.AuthResponseDto;
import com.drmonk.dto.LoginRequestDto;
import com.drmonk.security.AuthService;
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
  public ResponseEntity<AuthResponseDto> login(@RequestBody LoginRequestDto loginRequestDto) {
    return authService.login(loginRequestDto);
  }
}
