<?php
	include( "conexion.php" );

	$obj = new Conexion;

	$nombre = $_POST["nombre"];
	$correo = $_POST["correo"];
	$asunto = $_POST["asunto"];
	$mensaje = $_POST["mensaje"];

	
	$consulta = "INSERT INTO contacto(nombre, correo, asunto, mensaje)
						VALUES ('" . $nombre . "',
								'" . $correo . "',
								'" . $asunto . "',
								'" . $mensaje . "')";

	$res = $obj->registrarComentario( $consulta );
	
	if( $res == 1 ){
		echo '<span> Comentario registrado con exito </span>';
	}
	else{
		echo '<span> Ocurrio un error </span>';
	}
?>