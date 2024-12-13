<?php
include "database.php";

// Fetch input values from the form
$name = $_POST["name"];
$password = $_POST["psw"]; // Changed from "password" to "psw"

// SQL query to select user based on input name and password
$sql = "SELECT * FROM users WHERE name='$name' AND psw='$password'"; // Adjusted column names

// Execute the SQL query
$result = $connection->query($sql);

// Check if there are any rows returned
if ($result->num_rows > 0) {
    // If login successful, redirect to index.html
    header('Location: index.html');
    exit;
} else {
    // If login unsuccessful, show alert message
    echo "<script>alert('Login is not successful')</script>";
}

// Close database connection
$connection->close();
?>
