<?php
	
	require_once 'conexion.php';
	
	$database = mysqli_connect($base_ip, $base_user, $base_pass,$base_host);
	
	$base_table = "sucursales";
	
	
	$consulta_sector = "SELECT * FROM $base_table group by sector order by id";
	
	
	
	$result = mysqli_query($database,$consulta_sector);
	$result_resp = mysqli_query($database,$consulta_sector);
		
		while($sectores = mysqli_fetch_array($result)) 
		{
			$sector = utf8_encode($sectores['sector']);
			$consulta_sucursal = "SELECT * FROM $base_table where sector = '$sector'";
			 
			echo '<div class="acordeon_item_titulo_suc">' . strtoupper($sector) .  '</div>';
			echo '<div class="panel_suc">';
			
			$result_sector = mysqli_query($database,$consulta_sucursal);
			
				while($sucursales = mysqli_fetch_array($result_sector)) 
				{
					$id = utf8_decode($sucursales['id']);
					$nombre = utf8_encode($sucursales['nombre']);
					echo '<p class="acordeon_item_titulo_suc option_menu" name="' . $id . '">';
					echo $nombre .  '</p>';
					
					
				}
			echo '</div>';
			
		}
		
	
		/*
		while($sectores = mysqli_fetch_array($result_resp)) 
		{
			$sector = utf8_encode($sectores['sector']);
			$consulta_sucursal = "SELECT * FROM $base_table where sector = '$sector'";
			echo '<span class="city-mobile-block">' . strtoupper($sector) .  ': </span>';
			echo '<select>';
			
			$result_sector = mysqli_query($database,$consulta_sucursal);
			
				while($sucursales = mysqli_fetch_array($result_sector)) 
				{
					$id = utf8_decode($sucursales['id']);
					$nombre = utf8_encode($sucursales['nombre']);
					echo '<option value="' . $id . '">';
					echo $nombre . '</option>';
				}
			echo '</select><br>';
			
		}*/
?>

