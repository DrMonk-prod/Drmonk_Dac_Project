package com.finddr.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
public class GlobalSearchResponseDto {

  private List<SearchResultDto> doctors = new ArrayList<>();
  private List<SearchResultDto> clinics = new ArrayList<>();
  private List<SearchResultDto> specialities = new ArrayList<>();

  @Data
  @NoArgsConstructor
  public static class SearchResultDto {
    private Long id;
    private String name; // This will hold doctor name, clinic name, or speciality name
  }
}