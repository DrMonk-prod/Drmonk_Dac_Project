package com.finddr.service;

import com.finddr.dto.GlobalSearchResponseDto;
import com.finddr.entity.Clinic;
import com.finddr.entity.Doctor;
import com.finddr.entity.Speciality;
import com.finddr.entity.type.SearchType;
import com.finddr.repository.ClinicRepository;
import com.finddr.repository.DoctorRepository;
import com.finddr.repository.SpecialityRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class SearchService {

  private final DoctorRepository doctorRepository;
  private final ClinicRepository clinicRepository;
  private final SpecialityRepository specialityRepository;

  public List<GlobalSearchResponseDto> performGlobalSearch(String city, String query) {
    List<GlobalSearchResponseDto> response = new ArrayList<>();

    // If there's a query term, perform the searches
    if (query != null && !query.trim().isEmpty()) {
      // Search for doctors in the given city
      List<Doctor> doctors = doctorRepository.searchByCityAndName(city, query);
      // Search for clinics in the given city
      List<Clinic> clinics = clinicRepository.searchByCityAndName(city, query);
      // Search for specialities (not filtered by city)
      List<Speciality> specialities = specialityRepository.searchByName(query);

      response.addAll(mapDoctorsToSearchResult(doctors));
      response.addAll(mapClinicsToSearchResult(clinics));
      response.addAll(mapSpecialitiesToSearchResult(specialities));
    }

    return response;
  }

  private List<GlobalSearchResponseDto> mapDoctorsToSearchResult(List<Doctor> doctors) {
    return doctors.stream().map(doctor -> {
      GlobalSearchResponseDto dto = new GlobalSearchResponseDto();
      dto.setId(doctor.getId());
      dto.setLabel(doctor.getUser().getFullName());
      dto.setValue( doctor.getUser().getFullName()+"_"+doctor.getId());
      dto.setType(SearchType.DOCTOR);
      if ( doctor.getUser().getProfileImg() != null)
        dto.setImgUrl(doctor.getUser().getProfileImg());
      return dto;
    }).toList();
  }

  private List<GlobalSearchResponseDto> mapClinicsToSearchResult(List<Clinic> clinics) {
    return clinics.stream().map(clinic -> {
      GlobalSearchResponseDto dto = new GlobalSearchResponseDto();
      dto.setId(clinic.getId());
      dto.setLabel(clinic.getName());
      dto.setValue(clinic.getName()+"_"+clinic.getId());
      dto.setType(SearchType.CLINIC);
      return dto;
    }).toList();
  }

  private List<GlobalSearchResponseDto> mapSpecialitiesToSearchResult(List<Speciality> specialities) {
    return specialities.stream().map(speciality -> {
      GlobalSearchResponseDto dto = new GlobalSearchResponseDto();
      dto.setId(speciality.getId());
      dto.setLabel(speciality.getName());
      dto.setValue(speciality.getName()+"_"+speciality.getId());
      dto.setType(SearchType.SPECIALITY);
      return dto;
    }).toList();
  }
}
