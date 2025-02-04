CREATE DATABASE SignupFormDB;

USE SignupFormDB;

CREATE TABLE Users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    nid VARCHAR(25) NOT NULL UNIQUE,
    dob VARCHAR(25) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    gender VARCHAR(6) NOT NULL,
    mobile VARCHAR(15) NOT NULL UNIQUE,
    address TEXT NOT NULL,
    blood_type VARCHAR(10) NOT NULL,
    height FLOAT NOT NULL,
    weight FLOAT NOT NULL,
    donated VARCHAR(10) NOT NULL,
    allergy_details VARCHAR(300),
    serious_disease_history VARCHAR(300),
    anemia VARCHAR(10) NOT NULL,
    cardiac VARCHAR(10) NOT NULL,
    medication VARCHAR(10) NOT NULL,
    password_hash VARCHAR(255) NOT NULL
);
