package com.finddr.repository;

import com.finddr.entity.DoctorVerification;
import com.finddr.entity.type.VerificationStatus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DoctorVerificationRepository extends JpaRepository<DoctorVerification, Long> {

    List<DoctorVerification> findAllByVerificationStatus(VerificationStatus status);

}
