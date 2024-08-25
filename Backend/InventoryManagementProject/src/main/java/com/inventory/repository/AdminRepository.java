package com.inventory.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.inventory.data.Admin;
      
//Extends JpaRepository to provide CRUD operations and more
public interface AdminRepository extends JpaRepository<Admin,
String>{
	// Custom method to find an Admin by its username
	 // The method name follows Spring Data JPA's query method naming convention
	Admin findByUsername(String username);

}

