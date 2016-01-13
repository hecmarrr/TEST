<?php
	
	require_once 'conexion.php';
	
	$database = mysqli_connect($base_ip, $base_user, $base_pass,$base_host);
	
	$base_table = "sucursales";
	$base_table2 = "galeria";
	
	//$id = $_POST['id'];
	$id = 21;
	
	$ruta = "http://integradora.edusite.me/img/gallery/";
	
	$consulta = "SELECT * FROM $base_table";

	

	$result = mysqli_query($database,$consulta);
	$html_cont="";	
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
			


			$html_cont=$html_cont . "<div class='locales_block_pos' id='suc". $id ."'>";
			$html_cont=$html_cont . "<div class='locales_latitude'>" . $latitude .  "</div>";
			$html_cont=$html_cont . "<div class='locales_longitude'>" . $longitude. "</div>";
			$html_cont=$html_cont . "<div class='locales_zoom'>" . $zoom. "</div>";
			$html_cont=$html_cont . '<div class="contact_block"><div class="contact_block_info">';
			$html_cont=$html_cont . '<img src="img/contact_icon.png"><div class="contact_info">';
			$html_cont=$html_cont . '<p><center><b>CONTACTO</b></center></p>';
			$html_cont=$html_cont . '<p id="suc' . $id . '_dir_principal"> ' . $direccion  . '</p>';
			
			if($telefono != "")
			{
				$html_cont=$html_cont . '<p>' . $telefono  . '</p>';
			}
			
			$html_cont=$html_cont . '<p><center><b>HORARIOS DE ATENCION</b></center></p>';	

			if($horario1 != "")
			{
				$html_cont=$html_cont . '<p> ' . $horario1  . '</p>';
			}
			
			if($horario2 != "")
			{
				$html_cont=$html_cont . '<p> ' . $horario2  . '</p>';
			}
			
			if($horario3 != "")
			{
				$html_cont=$html_cont . '<p> ' . $horario3  . '</p>';
			}
			
			$html_cont=$html_cont . "</div></div></div>";
			$html_cont=$html_cont . "<div id='gallery-img'>";


			$consulta2 = "SELECT * FROM $base_table2 where id_sucursal ='" . $id .  "'";
			$result2 = mysqli_query($database,$consulta2);
			while($prueba2 = mysqli_fetch_array($result2)) 
				{
					$img_name = utf8_encode($prueba2['nombre_imagen']);
					$html_cont=$html_cont . "
					<a class='fancybox' href='" . $ruta . "suc" . $id ."_" . $img_name .".jpg' rel='". $img_name ."'>
	                 <img src='" . $ruta . "suc" . $id ."_" . $img_name .".jpg' /></a>";
				}
			$html_cont=$html_cont . "</div></div>";			
		}
		echo utf8_decode($html_cont);
?>