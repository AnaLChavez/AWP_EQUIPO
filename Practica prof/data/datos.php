<?php
	header('Content-Type: application/json');
	
	include( "conexion.php" );

	$obj = new Conexion;

	$nombre = $_POST["nombre"];
	$correo = $_POST["correo"];
	$asunto = $_POST["asunto"];
	$mensaje = $_POST["mensaje"];

	
	$consulta = "INSERT INTO comentario(nombre, correo, asunto, mensaje)
						VALUES ('" . $nombre . "',
								'" . $correo . "',
								'" . $asunto . "',
								'" . $mensaje . "')";

	$res = $obj->registrarComentario( $consulta );


	if( $res == 1 ){
		$datos = array('estado' => 'ok',
						'texto' => '<span> Comentario registrado con exito </span>');		
	}
	else{
		$datos = array('estado' => 'no',
						'texto' => '<span> Ocurrio un error </span>');
	}

	//Devolvemos el array pasado a JSON como objeto
	echo json_encode($datos, JSON_FORCE_OBJECT);
?>