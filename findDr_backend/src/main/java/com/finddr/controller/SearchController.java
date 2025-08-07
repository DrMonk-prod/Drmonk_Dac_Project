package com.finddr.controller;

import com.finddr.dto.GlobalSearchResponseDto;
import com.finddr.service.SearchService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/search")
@RequiredArgsConstructor
public class SearchController {
  private final SearchService searchService;

  @GetMapping
  public ResponseEntity<GlobalSearchResponseDto> globalSearch(
          @RequestParam String city,
          @RequestParam(required = false) String query) {

    GlobalSearchResponseDto results = searchService.performGlobalSearch(city, query);
    return ResponseEntity.ok(results);
  }
}
