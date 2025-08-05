package com.finddr.service;

import com.finddr.dto.Appointment.AppointmentDto;
import com.finddr.dto.Clinic.ClinicInfo;
import com.finddr.dto.User.UserDto;
import com.finddr.entity.Appointment;
import com.finddr.entity.Clinic;
import com.finddr.entity.Doctor;
import com.finddr.entity.User;
import com.finddr.exception.ApiException;
import com.finddr.exception.ErrorCode;
import com.finddr.repository.AppointmentRepository;
import com.finddr.repository.UserRepository;
import com.finddr.security.CustomUserDetails;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;

import static com.finddr.entity.type.RoleType.PATIENT;

@Service
@Transactional
@RequiredArgsConstructor
public class PatientServiceImpl implements PatientService {
  private final UserRepository userRepository;
  private final AppointmentRepository appointmentRepository;
  private final ModelMapper mapper;

  @Override
  public List<UserDto> getAllPatients() {
    List<User> patients = userRepository.findByRole(PATIENT);
    return patients.stream().map(patient -> mapper.map(patient, UserDto.class)).toList();
  }


  @Override
  public UserDto getPatientById(Long id) {
    User patient = userRepository.findByIdAndRole(id, PATIENT);

    if (patient == null) throw new ApiException(
            ErrorCode.USER_NOT_FOUND,
            "Patient not found with id: " + id,
            HttpStatus.NOT_FOUND
    );

    return mapper.map(patient, UserDto.class);
  }

  @Override
  public void deletePatient(Long id) {
    User patient = userRepository.findByIdAndRole(id, PATIENT);
    if (patient == null) throw new ApiException(
            ErrorCode.USER_NOT_FOUND,
            "Patient not found with id: " + id,
            HttpStatus.NOT_FOUND
    );
    userRepository.delete(patient);
  }

  @Override
  public List<AppointmentDto> getMyAppointments(CustomUserDetails userDetails) {
    if(userDetails.getUser()==null) {
      throw new ApiException(
              ErrorCode.USER_NOT_FOUND,
              "User not found",
              HttpStatus.UNAUTHORIZED
      );
    }

    List<Appointment> appointments = appointmentRepository.findAll();
    return appointments.stream().map(appointment -> mapper.map(appointment,AppointmentDto.class)).toList();
  }


  public AppointmentDto toAppointmentDto(Appointment appointment) {

    AppointmentDto appointmentDto = mapper.map(appointment, AppointmentDto.class);
    Doctor doctor=appointment.getDoctor();
    Clinic clinic=appointment.getClinic();

    AppointmentDto.DoctorInfo doctorInfo = new AppointmentDto.DoctorInfo();
    ClinicInfo clinicInfo = new ClinicInfo();

//    doctorInfo.setId(doctor.getId());
//    doctorInfo.setName(doctor.getUser().getFullName());
//    doctorInfo.setSpeciality(doctor.getSpeciality().getName());
//    doctorInfo.setProfileImageUrl(doctor.getUser().getProfileImg());

    appointmentDto.setDoctor(doctorInfo);
    return appointmentDto;
  }
}
