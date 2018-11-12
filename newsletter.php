<?php
$host="localhost";
$username="root";
$password="";
$databasename="testdatabase";

//Create Connection
$connection = new mysqli('localhost', $username, $password, $databasename);

//Check connection
if (!$connection) {
    die("Connection failed: " . mysqli_connect_error());
} else {
    echo "Connected Successfully";
}

$email = $_POST['email'];
$email = mysqli_real_escape_string($connection, $email);

//Insert into database
$sql = "INSERT INTO $databasename (email) VALUES ('".$email."')";

if (mysqli_query($connection, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($connection);
}
header('Location: ' . $_SERVER['HTTP_REFERER']);
mysqli_close($connection);
?>