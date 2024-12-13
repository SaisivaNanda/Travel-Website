<?php
 include "database.php";   
 if(isset($_POST["name"]) && isset($_POST["email"]) && isset($_POST["psw"]) && !empty($_POST["name"]) && !empty($_POST["email"]) && !empty($_POST["psw"])) {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $password = $_POST["psw"];
    // Prepare and bind statement
    $stmt = $connection->prepare("INSERT INTO users (name, email, psw) VALUES (?, ?, ?)");
    $stmt->bind_param("sss",$name, $email, $password);

    // Execute statement
    if ($stmt->execute()) {
        $stmt->close();
        $connection->close();
        header('Location: login.html');
        exit;
    } else {
        echo "<script>alert('SignUp is not successful')</script>";
        $stmt->close();
        $connection->close();
    }
} else {
    echo "<script>alert('Name, Email and password are required')</script>";
}
?>