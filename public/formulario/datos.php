<?php
	
	$tipo_de_mascota = $_POST["tipo de mascota"];
	$tamaño_de_mascota = $_POST["tamaño de la mascota"];
	$genero_de_mascota = $_POST["genero de la mascota"];
	$lugar = $_POST["lugar"];

	echo "<p>El tipo de mascota: " . $tipo_de_mascota . "</p>";
	echo "<p>El tamaño de la mascota es: " . $tamaño_de_la_mascota . "</p>";
	echo "<p>El genero de la mascota es: " . $genero_de_la_mascota . "</p>";
	echo "<p>El lugar es: " . $lugar . "</p>";

?>