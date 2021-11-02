<?php
	
	header('Content-Type: application/json');

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

	if( $res == 1 ){
		$validar = array('estado' => 'ok',
						'texto' => '<span> Usuario registrado </span>');		
	}
	else{
		$validar = array('estado' => 'no',
						'texto' => '<span> Usuario no registrado </span>');
	}

	echo json_encode($validar, JSON_FORCE_OBJECT);

?>