$(document).ready(function () {
 //   window.onload = function() {
//$("#listadosucursales").load('http://integradora.byethost15.com/php/listado_sucursales.php');
alert(this.URL);
    $.ajax({
        url: "http://integradora.byethost15.com/php/listado_sucursales.php",
        type: "GET",
        dataType: "html",
        success: function(html)
        {
            alert("ddd");
            alert(html);
            $('#listadosucursales').html(html);
        }
    });	


 

/*$.get( "http://integradora.byethost15.com/php/listado_sucursales.php",dataType:'jsonp', function( data ) {
  alert( "Data Loaded: " + data );
});*/

        /*$.ajax({
            type: "GET",
            url: "http://integradora.byethost15.com/php/listado_sucursales.php",
            success: function (a) {
                $("#listadosucursales").html(a);
            },
        });*/
        /*$.ajax({
            type: "GET",
            //dataType: "html",
            url: "http://integradora.byethost15.com/php/busqueda_sucursales.php",
            success: function (a) {
                console.log(a);
                $("#busquedasucursales").html(a);
            },
        });
        $.ajax({
            type: "GET",
            url: "html/footer.html",
            success: function (a) {
                $("#footerw").html(a);
            },
        });*/
//}
});