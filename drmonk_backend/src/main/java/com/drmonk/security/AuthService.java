package com.drmonk.security;

import com.drmonk.dto.AuthResponseDto;
import com.drmonk.dto.LoginRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {
  private final AuthenticationManager authenticationManager;

  public AuthResponseDto login(LoginRequestDto loginRequestDto) {


    Authentication authentication;

  }
}
