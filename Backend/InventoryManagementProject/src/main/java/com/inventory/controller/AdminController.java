package com.inventory.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;

import com.inventory.data.Admin;
import com.inventory.repository.AdminRepository;

@RestController // Indicates that this class is a REST controller and can handle HTTP requests
@CrossOrigin(origins = "http://localhost:3000") // Allows requests from the specified origin 
public class AdminController {
	
	@Autowired
	AdminRepository admRepo; // Injects the AdminRepository bean to interact with the database

	// URL: http://localhost:8080/login
	@PostMapping("/login") // Maps POST requests to the /login URL
	public ResponseEntity<String> login(@RequestBody Admin adminObj) {
		// printing  the received admin object in console log
		System.out.println("Received data is : " + adminObj);
		
		// Finds an admin by the username provided in the request             
        Admin admin = admRepo.findByUsername(adminObj.getUsername()); 

        // Checks if an admin was found and if the provided password matches
        if (admin != null && admin.getPassword().equals(adminObj.getPassword())) {
            // If the credentials are valid, return a success response with HTTP status 200 (OK)
        	System.out.println("Login successful");
            return ResponseEntity.ok("Success");
        } else {
            // If the credentials are invalid, return an error response with HTTP status 401 (Unauthorized)
        	System.out.println("Invalid credentials");
            return ResponseEntity.status(401).body("Invalid credentials");
        }
	}	
}




