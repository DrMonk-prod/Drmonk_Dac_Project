package com.finddr.repository;

import com.finddr.entity.Speciality;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SpecialityRepository extends JpaRepository<Speciality, Long> {

  @Query("SELECT s FROM Speciality s WHERE LOWER(s.name) LIKE LOWER(CONCAT('%', :query, '%'))")
  List<Speciality> searchByName(@Param("query") String query);
}
