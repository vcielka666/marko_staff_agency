<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);



// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $nastup = $_POST["nastup"];
    $position = $_POST["position"];

    // Your database connection information
    $servername = "localhost";
    $username = "marko_staff";
    $password = "macbook";
    $dbname = "klienti";

    // Create a connection to the database
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check for connection errors
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // SQL query to insert data into the "klienti" table
    $sql = "INSERT INTO klienti (name, email, phone, nastup, position)
            VALUES ('$name', '$email', '$phone', '$nastup', '$position')";

    if ($conn->query($sql) === true) {
        echo "Form submitted successfully!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    // Close the database connection
    $conn->close();
}
?>
