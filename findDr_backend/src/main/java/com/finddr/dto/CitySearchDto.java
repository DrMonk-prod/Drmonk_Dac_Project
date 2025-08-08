package com.finddr.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CitySearchDto {
  private Long id;

  private String value;

  @JsonProperty("label")
  private String name;

  private String state;
  private Double latitude;
  private Double longitude;
}
