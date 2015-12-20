<?php
	
	require_once 'conexion.php';
	
	$database = mysqli_connect($base_ip, $base_user, $base_pass,$base_host);
	
	$base_table = "sucursales";
	
	//$id = $_POST['id'];
	$id = 21;
	
	
	$consulta = "SELECT * FROM $base_table";
	
	$result = mysqli_query($database,$consulta);
		
		while($prueba = mysqli_fetch_array($result)) 
		{
			$id = utf8_encode($prueba['id']);
			$direccion = utf8_encode($prueba['direccion']);
			$latitude = utf8_encode($prueba['latitude']);
			$longitude = utf8_encode($prueba['longitude']);
			$zoom = utf8_encode($prueba['zoom']);
			$telefono = utf8_encode($prueba['telefono']);
			$horario1 = utf8_encode($prueba['horario1']);
			$horario2 = utf8_encode($prueba['horario2']);
			$horario3 = utf8_encode($prueba['horario3']);
			

			echo "<div class='locales_block_pos' id='". $id ."'>";
			echo "<div class='locales_latitude'>" . $latitude .  "</div>";
			echo "<div class='locales_longitude'>" . $longitude. "</div>";
			echo "<div class='locales_zoom'>" . $zoom. "</div>";
			echo '<div class="contact_block"><div class="contact_block_info">';
			echo '<img src="img/contact_icon.png"><div class="contact_info">';
			echo '<p><center><b>CONTACTO</b></center></p>';
			echo '<p> ' . $direccion  . '</p>';
			
			if($telefono != "")
			{
				echo '<p>' . $telefono  . '</p>';
			}
			
			echo '<p><center><b>HORARIOS DE ATENCION</b></center></p>';	

			if($horario1 != "")
			{
				echo '<p> ' . $horario1  . '</p>';
			}
			
			if($horario2 != "")
			{
				echo '<p> ' . $horario2  . '</p>';
			}
			
			if($horario3 != "")
			{
				echo '<p> ' . $horario3  . '</p>';
			}
			
			echo "</div></div></div></div>";
			
		}
?>