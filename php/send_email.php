<?php
	
	require_once '../conexion.php';
	
	$database = mysqli_connect($base_ip, $base_user, $base_pass,$base_host);
	
	$base_table = "cotizaciones";
	require('fpdf.php');




/*	$data = json_decode(stripslashes($_POST['data']));*/
	$data = $_POST['data'];
	
	$nombre = $data[0];
	$correo = $data[1];
	$doctor = $data[2];
	$telefono = $data[3];

	$data[0] = "Nombre: " . $nombre;
	$data[1] = "Correo: " . $correo;
	$data[2] = "Doctor: " . $doctor;
	$data[3] = "Telf. de Contacto: " . $telefono;

	$sql_insert = "INSERT INTO $base_table (nombre, correo, doctor, telefono) VALUES ('$nombre','$correo', '$doctor','$telefono')";
	$result = mysqli_query($database,$sql_insert);
	$id = mysqli_insert_id($database);
	echo $id;
	$cotizacion_sec = "cotizacion_" . $id . ".pdf";
	class PDF extends FPDF
	{
	// Cabecera de página
		function Header()
		{
			// Logo
			$this->Image('logo.png',10,8,33);
			// Arial bold 15
			$this->SetFont('Arial','B',15);
			// Movernos a la derecha
			$this->Cell(80);
			// Título
			$this->Cell(30,10,utf8_decode('Cotización de Laboratorio Clínico'),0,0,'C');
			// Salto de línea
			$this->Ln(40);
		}

		// Pie de página
		function Footer()
		{
			// Posición: a 1,5 cm del final
			$this->SetY(-15);
			// Arial italic 8
			$this->SetFont('Arial','I',8);
			// Número de página
			$this->Cell(0,10,'Page '.$this->PageNo().'/{nb}',0,0,'C');
		}
	}

// Creación del objeto de la clase heredada
$pdf = new PDF();
$pdf->AliasNbPages();
$pdf->AddPage();
$pdf->SetFont('Arial','',12);
//$pdf->Cell(0,10,$nombre,0,1);

 foreach($data as $d){

    $pdf->Cell(0,10,utf8_decode($d),0,1);
  }


//for($i=1;$i<=40;$i++)
	
//	$pdf->Cell(0,10,'Imprimiendo línea número '.$i,0,1);
$pdf->Output($cotizacion_sec,"F");

$header  = 'MIME-Version: 1.0' . "\r\n";
$header .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$header .= 'From: CliniCal APP <info@clinicalapp.com>' . "\r\n";
								
$to  = $correo;
$subject = utf8_decode('Cotizacion en Linea - ClniCal APP');
$body = '<html>
			<head>
				<title>Informacion de Contacto</title>
				<style type="text/css">
				</style>
			</head>
			<body>
				<div id="contenido">
					<table>
						<tr>
							<td>
							Estimado, '. $nombre . ', muchas gracias por usar nuestra aplicación!

							</td>
						</tr>
						<tr>
							<td>
							<a href="http://integradora.edusite.me/php/fpdf/'. $cotizacion_sec .'">
							<b>Pulse aquí para descargar la cotizacion</b>
							</a>
							</td>
							
						</tr>
										
					</table>
				</div>
			</body>
		</html>';
								
								if(mail($to, $subject, $body, $header))
								{
									echo "sucess";
								}
								else
								{
									echo "no se envio";	
								}
?>