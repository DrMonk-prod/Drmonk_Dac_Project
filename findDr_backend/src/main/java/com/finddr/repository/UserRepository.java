package com.finddr.repository;

import com.finddr.entity.User;
import com.finddr.entity.type.RoleType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

  Optional<User> findByEmailAndIsActiveTrue(String email);

  boolean existsByPhoneNumber(String phoneNumber);

  List<User> findByRoleAndIsActiveTrue(RoleType role);
}
