package com.findDr.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class BaseDto {
  @JsonProperty(access = JsonProperty.Access.READ_ONLY)
  private Long id;

  @JsonProperty(access = JsonProperty.Access.READ_ONLY)
  private LocalDateTime createdAt;

  @JsonProperty(access = JsonProperty.Access.READ_ONLY)
  private LocalDateTime updatedAt;
}
