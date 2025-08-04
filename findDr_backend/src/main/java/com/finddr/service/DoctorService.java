package com.finddr.service;

import com.finddr.entity.Doctor;
import com.finddr.repository.DoctorRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DoctorService {
  DoctorRepository doctorRepository;

  public List<Doctor> getAllDoctors() {
    List<Doctor> doctors = doctorRepository.findAll();
    return
  }
}
