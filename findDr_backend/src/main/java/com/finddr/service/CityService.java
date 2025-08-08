package com.finddr.service;

import com.finddr.dto.CitySearchDto;
import com.finddr.entity.City;
import com.finddr.repository.CityRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class CityService {
  private final CityRepository cityRepository;
  private final ModelMapper mapper;

  public List<CitySearchDto> getCities(String query) {
    List<City> cities=cityRepository.findByNameContainingIgnoreCase(query);
    return cities.stream().map(city ->{
      CitySearchDto dto=mapper.map(city, CitySearchDto.class);
      dto.setValue(dto.getName()+"_"+dto.getId());
      return dto;
    }).toList();
  }
}
