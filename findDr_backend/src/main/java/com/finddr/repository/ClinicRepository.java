package com.finddr.repository;

import com.finddr.entity.Clinic;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ClinicRepository extends JpaRepository<Clinic, Long> {

  @Query("SELECT c FROM Clinic c WHERE c.city.name = :city AND LOWER(c.name) LIKE LOWER(CONCAT('%', :query, '%'))")
  List<Clinic> searchByCityAndName(@Param("city") String city, @Param("query") String query);

}
