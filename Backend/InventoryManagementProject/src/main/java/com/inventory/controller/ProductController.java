package com.inventory.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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


import com.inventory.data.Product;

import com.inventory.repository.ProductRepository;

@RestController // Indicates that this class is a REST controller and can handle HTTP requests
@CrossOrigin(origins = "http://localhost:3000") // Allows cross-origin requests from the specified origin
public class ProductController {

	@Autowired
    ProductRepository prodRepo; // Injects the ProductRepository bean to interact with the database

          // Endpoint to retrieve all products
          // URL: http://localhost:8080/product
    @GetMapping("/product") // Maps GET requests to the /product URL
    public List<Product> getAllProducts() {
        // Fetches all products from the database
        // Equivalent SQL: SELECT * FROM PRODUCT;
        List<Product> productList = prodRepo.findAll();
        
        // Returns the list of products
        return productList;    
    }

    // Endpoint to insert a new product
    // URL: http://localhost:8080/product
    @PostMapping("/product") // Maps POST requests to the /product URL
    public String insertData(@RequestBody Product productObj) {
    	System.out.println("Received data is : " + productObj);
        prodRepo.save(productObj);   // Saves the new product to the database
        return "Given data is inserted in the database successfully....."; // Returns a success message
    }
    
    // Endpoint to update an existing product
    // URL: http://localhost:8080/product/{productId}
    @PutMapping("/product/{productId}") // Maps PUT requests to the /product/{productId} URL
    public String updateData(@RequestBody Product productObj) {
       
        System.out.println("Received data is : " + productObj);
        
        // Saves the updated product to the database (will insert if the product doesn't exist)
        prodRepo.save(productObj);
        
        return "Given data is updated in the database successfully.....";   // Returns a success message
    }

    // Endpoint to delete a product
    // URL: http://localhost:8080/product/{productId}
    @DeleteMapping("/product/{productId}") // Maps DELETE requests to the /product/{productId} URL
    public String deleteData(@PathVariable int productId) {
     
        System.out.println("Given ID to delete is : " + productId);
        
        // Deletes the product with the given ID from the database
        prodRepo.deleteById(productId);
  
        return "Given data is deleted in the database successfully.....";  // Returns a success message
    }
}

