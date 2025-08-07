package com.finddr.service;

import com.finddr.dto.GlobalSearchResponseDto;
import com.finddr.entity.Clinic;
import com.finddr.entity.Doctor;
import com.finddr.entity.Speciality;
import com.finddr.repository.ClinicRepository;
import com.finddr.repository.DoctorRepository;
import com.finddr.repository.SpecialityRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
public class SearchService {

  private final DoctorRepository doctorRepository;
  private final ClinicRepository clinicRepository;
  private final SpecialityRepository specialityRepository;

  public GlobalSearchResponseDto performGlobalSearch(String city, String query) {
    GlobalSearchResponseDto response = new GlobalSearchResponseDto();

    // If there's a query term, perform the searches
    if (query != null && !query.trim().isEmpty()) {
      // Search for doctors in the given city
      List<Doctor> doctors = doctorRepository.searchByCityAndName(city, query);
      response.setDoctors(mapDoctorsToSearchResult(doctors));

      // Search for clinics in the given city
      List<Clinic> clinics = clinicRepository.searchByCityAndName(city, query);
      response.setClinics(mapClinicsToSearchResult(clinics));

      // Search for specialities (not filtered by city)
      List<Speciality> specialities = specialityRepository.searchByName(query);
      response.setSpecialities(mapSpecialitiesToSearchResult(specialities));
    }

    return response;
  }

  private List<GlobalSearchResponseDto.SearchResultDto> mapDoctorsToSearchResult(List<Doctor> doctors) {
    return doctors.stream().map(doctor -> {
      GlobalSearchResponseDto.SearchResultDto dto = new GlobalSearchResponseDto.SearchResultDto();
      dto.setId(doctor.getId());
      dto.setName(doctor.getUser().getFullName());
      return dto;
    }).toList();
  }

  private List<GlobalSearchResponseDto.SearchResultDto> mapClinicsToSearchResult(List<Clinic> clinics) {
    return clinics.stream().map(clinic -> {
      GlobalSearchResponseDto.SearchResultDto dto = new GlobalSearchResponseDto.SearchResultDto();
      dto.setId(clinic.getId());
      dto.setName(clinic.getName());
      return dto;
    }).toList();
  }

  private List<GlobalSearchResponseDto.SearchResultDto> mapSpecialitiesToSearchResult(List<Speciality> specialities) {
    return specialities.stream().map(speciality -> {
      GlobalSearchResponseDto.SearchResultDto dto = new GlobalSearchResponseDto.SearchResultDto();
      dto.setId(speciality.getId());
      dto.setName(speciality.getName());
      return dto;
    }).collect(Collectors.toList());
  }
}
