package com.finddr.service;

import com.finddr.dto.User.UserDto;
import com.finddr.entity.User;
import com.finddr.exception.ApiException;
import com.finddr.exception.ErrorCode;
import com.finddr.repository.UserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
@Transactional
@RequiredArgsConstructor
public class ProfileService {
  private final UserRepository userRepository;
  private final ModelMapper mapper;
  private final AwsS3Service awsS3Service;

  public UserDto getProfile(Long id) {
    User patient = userRepository.findById(id).orElseThrow(() -> new ApiException(
            ErrorCode.USER_NOT_FOUND,
            "Patient not found with id: " + id,
            HttpStatus.NOT_FOUND
    ));
    return mapper.map(patient, UserDto.class);
  }

  public String uploadProfileImage(Long id, MultipartFile image) {
    String imageUrl = null;
    try {
      if (image.isEmpty()) {
        throw new IllegalArgumentException("Cannot upload an empty file.");
      }

      User user = userRepository.findById(id).orElseThrow(() -> new ApiException(
              ErrorCode.USER_NOT_FOUND,
              "User not found with id: " + id,
              HttpStatus.NOT_FOUND
      ));

      imageUrl = awsS3Service.uploadProfileImage(id, image);

      user.setProfileImg(imageUrl);
      userRepository.save(user);
    } catch (IOException e) {
      throw new ApiException(
              ErrorCode.FILE_UPLOAD_ERROR,
              "Failed to upload profile image: " + e.getMessage(),
              HttpStatus.INTERNAL_SERVER_ERROR
      );
    }

    return imageUrl;
  }


}
