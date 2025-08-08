package com.finddr.controller;

import com.finddr.dto.CitySearchDto;
import com.finddr.dto.GlobalSearchResponseDto;
import com.finddr.service.CityService;
import com.finddr.service.SearchService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping("/api/search")
@RequiredArgsConstructor
public class SearchController {
  private final SearchService searchService;
  private final CityService cityService;


  @GetMapping("cities")
  public ResponseEntity<List<CitySearchDto>> getCitiesByQuery(@RequestParam String query) {
    return ResponseEntity.ok(cityService.getCities(query));
  }

  @GetMapping
  public ResponseEntity<List<GlobalSearchResponseDto>> globalSearch(
          @RequestParam String city,
          @RequestParam(required = false) String query) {

    List<GlobalSearchResponseDto> results = searchService.performGlobalSearch(city, query);
    return ResponseEntity.ok(results);
  }
}
