<?php
// Database connection parameters
$servername = "localhost";
$username = "your_username"; // Replace with your database username
$password = "your_password"; // Replace with your database password
$dbname = "portfolio_contacts";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Create database if it doesn't exist
$sql = "CREATE DATABASE IF NOT EXISTS portfolio_contacts";
if ($conn->query($sql) === TRUE) {
    $conn->select_db($dbname);
    
    // Create table if it doesn't exist
    $sql = "CREATE TABLE IF NOT EXISTS contacts (
        id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        firstname VARCHAR(30) NOT NULL,
        lastname VARCHAR(30) NOT NULL,
        phone VARCHAR(20) NOT NULL,
        comment TEXT,
        submission_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )";
    
    if ($conn->query($sql) === TRUE) {
        // Get form data
        $firstname = $_POST['firstname'];
        $lastname = $_POST['lastname'];
        $phone = $_POST['phone'];
        $comment = $_POST['comment'];
        
        // Prepare and bind
        $stmt = $conn->prepare("INSERT INTO contacts (firstname, lastname, phone, comment) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("ssss", $firstname, $lastname, $phone, $comment);
        
        // Execute the statement
        if ($stmt->execute()) {
            echo "Thank you for your submission!";
        } else {
            echo "Error: " . $stmt->error;
        }
        
        $stmt->close();
    } else {
        echo "Error creating table: " . $conn->error;
    }
} else {
    echo "Error creating database: " . $conn->error;
}

$conn->close();
?>
