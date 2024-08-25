package com.inventory;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

// The main entry point for the Spring Boot application
// Marks this class as the primary configuration class and bootstrap class for the application
@SpringBootApplication
public class InventoryManagementProjectApplication {

    // The main method which serves as the entry point for the application
    // It triggers the launch of the Spring Boot application
    public static void main(String[] args) {
        // Runs the Spring Boot application
        // It initializes the Spring context, performs component scanning, 
        // and starts the embedded server (e.g., Tomcat) to handle incoming requests
        SpringApplication.run(InventoryManagementProjectApplication.class, args);
    }

}

