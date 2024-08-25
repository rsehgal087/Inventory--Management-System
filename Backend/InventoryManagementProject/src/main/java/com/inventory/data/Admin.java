package com.inventory.data;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity // Marks this class as a JPA entity, which means it will be mapped to a database table
@Table(name = "Admin") // Specifies the name of the table in the database that this entity maps to
public class Admin {

    @Id // Indicates that this field is the primary key of the entity
    private String username; // Represents the unique identifier for an Admin, used as the primary key in the database
    
    private String password; // Represents the password associated with the Admin

    // Default constructor required by JPA
    public Admin() {}

    // Parameterized constructor to initialize an Admin object with a username and password
    public Admin(String username, String password) {
        super();
        this.username = username;
        this.password = password;
    }

    // Getter and Setter methods
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    // Override toString method to provide a string representation of the Admin object
    @Override
    public String toString() {
        return "Admin [username=" + username + ", password=" + password + "]";
    }
}

