package com.findDr.repository;

import com.findDr.entity.User;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {

  Optional<User> findByEmailAndIsActiveTrue(String email);

  boolean existsByPhoneNumber(String phoneNumber);
}
