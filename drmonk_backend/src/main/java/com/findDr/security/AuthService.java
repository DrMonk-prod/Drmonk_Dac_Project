package com.findDr.security;

import com.findDr.dto.AuthResponseDto;
import com.findDr.dto.LoginRequestDto;
import com.findDr.dto.RegisterRequestDto;
import com.findDr.dto.RegisterResponseDto;
import com.findDr.entity.User;
import com.findDr.exception.ApiException;
import com.findDr.exception.ErrorCode;
import com.findDr.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {
  private final AuthenticationManager authenticationManager;
  private final AuthUtil authUtil;
  private final UserRepository userDao;
  private final ModelMapper mapper;
  private final PasswordEncoder passwordEncoder;

  public AuthResponseDto login(LoginRequestDto loginRequestDto) {
    Authentication authentication=authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(loginRequestDto.getEmail(), loginRequestDto.getPassword())
    );

    User user=((CustomUserDetails)authentication.getPrincipal()).getUser();

    String token=authUtil.generateToken(user);
    return new AuthResponseDto(token,user.getId(),user.getRole().name(),"Login successful");
  }

  public RegisterResponseDto signup(RegisterRequestDto registerRequestDto) {
    String email = registerRequestDto.getEmail().trim().toLowerCase();

    if (userDao.findByEmailAndIsActiveTrue(email).isPresent()) {
      throw new ApiException(
              ErrorCode.USER_ALREADY_EXIST,
              "Email already taken. Please try another email.",
              HttpStatus.UNPROCESSABLE_ENTITY
      );
    }

    if (userDao.existsByPhoneNumber(registerRequestDto.getPhoneNumber())) {
      throw new ApiException(ErrorCode.USER_ALREADY_EXIST, "Phone number already registered", HttpStatus.UNPROCESSABLE_ENTITY);
    }

    User newUser=mapper.map(registerRequestDto,User.class);
    newUser.setPasswordHash(passwordEncoder.encode(registerRequestDto.getPassword()));
    userDao.save(newUser);
    return mapper.map(newUser,RegisterResponseDto.class);
  }
}
