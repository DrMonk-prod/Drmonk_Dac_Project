package com.finddr.service;

import com.finddr.exception.ApiException;
import com.finddr.exception.ErrorCode;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import software.amazon.awssdk.core.sync.RequestBody;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.DeleteObjectRequest;
import software.amazon.awssdk.services.s3.model.PutObjectRequest;
import software.amazon.awssdk.services.s3.model.S3Exception;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AwsS3Service {

  private final S3Client s3Client;

  @Value("${aws.s3.bucket.name}")
  private String bucketName;

  @Value("${aws.s3.base-url}") // e.g., https://s3.ap-south-1.amazonaws.com
  private String s3BaseUrl;

  public String uploadProfileImage(Long userId, MultipartFile file) throws IOException {
    return uploadImage(file, "profile", userId);
  }

  public List<String> uploadClinicImages(Long clinicId, List<MultipartFile> files) throws IOException {
    if (files == null || files.isEmpty()) {
      throw new IllegalArgumentException("At least one file must be provided for clinic upload.");
    }

    List<String> uploadedUrls = new ArrayList<>();
    for (MultipartFile file : files) {
      if (file != null && !file.isEmpty()) {
        String url = uploadImage(file, "clinic", clinicId);
        uploadedUrls.add(url);
      }
    }
    return uploadedUrls;
  }

  private String uploadImage(MultipartFile file, String folderPrefix, Long ownerId) throws IOException {
    String extension = getFileExtension(file.getOriginalFilename());
//    String uniqueFileName = UUID.randomUUID() + extension;
    String uniqueFileName = "profile_"+ownerId + extension;
    String s3Key = String.format("%s/%d/%s", folderPrefix, ownerId, uniqueFileName);

    try {
      PutObjectRequest request = PutObjectRequest.builder()
              .bucket(bucketName)
              .key(s3Key)
              .contentType(file.getContentType())
              .contentLength(file.getSize())
//              .acl(ObjectCannedACL.PUBLIC_READ)
              .build();

      s3Client.putObject(request, RequestBody.fromInputStream(file.getInputStream(), file.getSize()));

      return String.format("%s/%s", s3BaseUrl, s3Key);

    } catch (S3Exception e) {
      throw new IOException("Failed to upload file to S3: " + e.awsErrorDetails().errorMessage(), e);
    }
  }

  public void deleteImage(String s3Key) {
    try {
      s3Client.deleteObject(DeleteObjectRequest.builder()
              .bucket(bucketName)
              .key(s3Key)
              .build());
    } catch (S3Exception e) {
      throw new ApiException(
              ErrorCode.S3_DELETE_FAILED,
              "Failed to delete image from S3: " + e.awsErrorDetails().errorMessage(),
              HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }


  private String getFileExtension(String filename) {
    if (filename != null && filename.contains(".")) {
      return filename.substring(filename.lastIndexOf("."));
    }
    return "";
  }
}

