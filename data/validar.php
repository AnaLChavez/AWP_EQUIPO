<?php
	include( "conexion.php" );

	$obj = new Conexion;

	$usuario = $_POST["usuario"];
	$contrasena = $_POST["contrasena"];

	$res = $obj->buscarUsuario( $usuario, $contrasena );

	if( $res == 1 ){
		header("Location:../index.html");
	}
	else{
		header("Location:../login.html");	
	}
?>