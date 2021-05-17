<?php
  $servidor = "localhost";
  $usuari = "root";
  $contrasenya = "";
  $basedades = "myDB";

  // Create connection
  $conn = new mysqli($servidor, $usuari, $contrasenya, $basedades);

  // Check connection
  if ($conn->connect_error) {
    die("Connexio fallida: " . $conn->connect_error);
  }
  ?>
