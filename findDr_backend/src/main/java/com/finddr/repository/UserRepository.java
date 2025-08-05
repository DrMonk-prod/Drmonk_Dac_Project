package com.finddr.repository;

import com.finddr.entity.User;
import com.finddr.entity.type.RoleType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

  Optional<User> findByEmail(String email);

  boolean existsByPhoneNumber(String phoneNumber);

  List<User> findByRole(RoleType role);

  User findByIdAndRole(Long id, RoleType role);
}
