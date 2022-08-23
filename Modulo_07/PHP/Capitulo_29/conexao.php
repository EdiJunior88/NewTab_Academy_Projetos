<?php

$host = "46.0.0.4";
$nomeDoBanco = "newtab_master";
$username = "root";
$password = "newtab";

try {
  $conn = new PDO("mysql:host=" . $host . ";dbname=" . $nomeDoBanco, $username, $password);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  
  $sql = "SELECT * from user";
  
  $users = $conn -> query($sql);
  
  foreach ($users as $user) {
    print_r($user["name"] . "\n");
  }

  echo "Sucesso ";
}


catch(PDOException $e) {
  echo "ERROR: " . $e -> getMessage();
}