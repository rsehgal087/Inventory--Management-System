package com.inventory.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.inventory.data.Product;

//Extends JpaRepository to provide CRUD operations and more
public interface ProductRepository extends JpaRepository<Product, Integer>{

}
