<?php
	
	require_once 'conexion.php';
	
	$database = mysqli_connect($base_ip, $base_user, $base_pass,$base_host);
	
	$base_table = "cupones";
	
	$nombre = $_POST['cupon'];
	
	
	$consulta = "SELECT descuento FROM $base_table where codigo ='" . $nombre . "'";
	
	$result = mysqli_query($database,$consulta);
		
		while($cupon = mysqli_fetch_array($result)) 
		{
			$descuento = utf8_encode($cupon['descuento']);
			echo $descuento;
			
		}
?>