<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>SUCURSALES</title>
<link href="css/estilos.css" rel="stylesheet" type="text/css">

<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCM9wQl43njPJConO9DEhd3TMh7zFpEQXw&sensor=false"></script>

</head>
<script type="text/javascript" src="js/jquery-1.9.1.min.js"></script>
<body>

	<div id="header"></div>
	<div id="header-text">El laboratorio clínico de su confianza</div>
	<div id="line-divider"></div>
    <div id="container">
        <div id="div_menu">
            <ul id="menu">
                <li><a href="#">GYE - SECTOR NORTE</a>
                    <ul>
                        <li><a class="menu" name="1" href="#" >Laboratorio Principal</a></li>  
                        <li><a class="menu" name="2" href="#" >Sucursal Kennedy Vieja</a></li> 
                        <li><a class="menu" name="3" href="#" >Sucursal Kennedy Norte</a></li> 
                        <li><a class="menu" name="4" href="#" >Sucursal Alborada</a></li> 
                        <li><a class="menu" name="5" href="#" >Sucursal Miraflores</a></li> 
                        <li><a class="menu" name="6" href="#" >Sucursal Adace</a></li> 
                        <li><a class="menu" name="19" href="#" >Sucursal OmniHospital</a></li> 
                    </ul>
                </li>
                <li><a href="#">GYE - SECTOR CENTRO</a>
                    <ul>
                        <li><a class="menu" href="#" name="7" >Sucursarl PP Gómez</a></li>
                        <li><a class="menu" href="#" name="8" >Sucursal Mendiburo</a></li>               
                    </ul>
                </li>
                <li><a href="#">GYE - SECTOR SUR</a>
                    <ul>
                        <li><a href="#" name="9" >Sucursal Noguchi</a></li>              
                    </ul>
                </li>
                <li><a href="#">ENTRERÍOS</a>
                    <ul>
                        <li><a href="#" name="10" >Sucursal Entreríos</a></li>              
                    </ul>
                </li>
                <li><a href="#">LA JOYA</a>
                    <ul>
                        <li><a href="#" name="11" >Sucursal La Joya</a></li>              
                    </ul>
                </li>
                <li><a href="#">DURÁN</a>
                    <ul>
                        <li><a href="#" name="12" >Sucursal Centro Durán</a></li>              
                    </ul>
                </li>
                <li><a href="#">MILAGRO</a>
                    <ul>
                        <li><a href="#" name="13" >Laboratorio Interlab Milagro</a></li>              
                    </ul>
                </li>
                <li><a href="#">PORTOVIEJO</a>
                    <ul>
                        <li><a href="#" name="14" >Laboratorio Interlab Portoviejo</a></li>
                        <li><a href="#" name="15" >Sucursal Medical Plaza</a></li>
                        <li><a href="#" name="20" >Sucursal Jorge Washington</a></li>                         
                    </ul>
                </li>
                <li><a href="#">MANTA</a>
                    <ul>
                        <li><a href="#" name="16" >Laboratorio Interlab Manta</a></li>
                        <li><a href="#" name="21" >Sucursal Jocay</a></li>              
                    </ul>
                </li>
                <li><a href="#">MACHALA</a>
                    <ul>
                        <li><a href="#" name="17">Laboratorio Interlab Machala</a></li>              
                    </ul>
                </li>
                <li><a href="#">QUEVEDO</a>
                    <ul>
                        <li><a href="#" name="18">Laboratorio Interlab Quevedo</a></li>              
                    </ul>
                </li>
            </ul>
            
        </div>
    <div id="mapas">
        <div id="mapa"></div>
        <?php include 'php/busqueda_sucursales.php' ?>
        <!--<div id="direccion" class="detalles"></div>
        <div id="telefono" class="detalles"></div>
        <div id="horario" class="horarios"></div>
        <div id="horario1" class="horarios"></div>
        <div id="horario2" class="horarios"></div>-->
    </div>
    </div>
    <div id="foot">
    CONTÁCTANOS AL PBX 2594010 - SERVICIO A DOMICILIO 1800 INTERLAB
    </div>
<script type="text/javascript">
$(function() {

    var menu_ul = $('#menu > li > ul'),
        menu_a  = $('#menu > li > a');
    
    menu_ul.hide();

    menu_a.click(function(e) {
        e.preventDefault();
        if(!$(this).hasClass('active')) {
            menu_a.removeClass('active');
            menu_ul.filter(':visible').slideUp('normal');
            $(this).addClass('active').next().stop(true,true).slideDown('normal');
        } else {
            $(this).removeClass('active');
            $(this).next().stop(true,true).slideUp('normal');
        }
    });
});
</script>
<script src="js/content.js"></script>
</body>
</html>