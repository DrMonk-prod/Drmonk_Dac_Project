package com.finddr.controller;

import com.finddr.dto.ApiResponse;
import com.finddr.dto.user.UserDto;
import com.finddr.dto.user.UserUpdateDto;
import com.finddr.security.CustomUserDetails;
import com.finddr.service.ProfileService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


@RestController
@RequestMapping("/api/me")
@RequiredArgsConstructor
public class UserController {
  private final ProfileService profileService;

  /**
   * Fetches the profile of the currently authenticated patient.
   *
   * @param userDetails Injected by Spring Security, contains logged-in user's info.
   * @return A DTO with the patient's details.
   */
  @GetMapping("/profile")
  public ResponseEntity<UserDto> getMyProfile(@AuthenticationPrincipal CustomUserDetails userDetails) {
    UserDto userDto = profileService.getProfile(userDetails.getUser().getId());
    return ResponseEntity.ok(userDto);
  }

  /**
   * PUT /api/patients/me/profile
   * Updates the profile information of the currently authenticated patient.
   *
   * @param userUpdateDto A DTO containing the fields to be updated.
   * @return The updated patient profile DTO.
   */
  @PutMapping("/profile")
  public ResponseEntity<ApiResponse<UserDto>> updateMyProfile(@AuthenticationPrincipal CustomUserDetails userDetails,@Valid @RequestBody UserUpdateDto userUpdateDto) {
    return ResponseEntity.ok(profileService.updateProfile(userDetails,userUpdateDto));
  }

  @PostMapping("/profile-image")
  public ResponseEntity<String> uploadProfileImage(@AuthenticationPrincipal CustomUserDetails userDetails, @RequestParam MultipartFile image) {
    return ResponseEntity.ok(profileService.uploadProfileImage(userDetails.getUser().getId(), image));
  }

}
