package com.inventory.data;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity   // Marks this class as a JPA entity, which means it will be mapped to a database table
@Table (name ="Product") // Specifies the name of the table in the database that this entity maps to
public class Product {
	@Id // Indicates that this field is the primary key of the entity
     int productId;
     String name;
     String description;
     double cost;
     int avlQty;
     int minQty;
     
     Product() {}// Default constructor required by JPA
     // Parameterized constructor to initialize an Product object with productId, name, description, cost, avlQty, minQty
	public Product(int productId, String name, String description, double cost, int avlQty, int minQty) {
		super();
		this.productId = productId;
		this.name = name;
		this.description = description;
		this.cost = cost;
		this.avlQty = avlQty;
		this.minQty = minQty;
	}
	//Getter and Setter method
	public int getProductId() {
		return productId;
	}
	public void setProductId(int productId) {
		this.productId = productId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public double getCost() {
		return cost;
	}
	public void setCost(double cost) {
		this.cost = cost;
	}
	public int getAvlQty() {
		return avlQty;
	}
	public void setAvlQty(int avlQty) {
		this.avlQty = avlQty;
	}
	public int getMinQty() {
		return minQty;
	}
	public void setMinQty(int minQty) {
		this.minQty = minQty;
	}
	@Override  // Override toString method to provide a string representation of the Person object
	public String toString() {
		return "Product [productId=" + productId + ", name=" + name + ", description=" + description + ", cost=" + cost
				+ ", avlQty=" + avlQty + ", minQty=" + minQty + "]";
	}

	
}