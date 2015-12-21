//$(document).ready(function () {
   //window.onload = function() {


    $.ajax({
        url: "http://integradora.edusite.me/php/listado_sucursales.php",
        type: "GET",
        async:false,
        cache: false,
        dataType: "html",
        success: function(html)
        {
            $('#listadosucursales').html(html);
        },
        error : function(error){     
            //alert("error");
        }
    });	


 

        $.ajax({
            type: "GET",
            dataType: "html",
            async:false,
            cache: false,
            url: "http://integradora.edusite.me/php/busqueda_sucursales.php",
            success: function (html) {
                //alert(html);
                $("#busquedasucursales").html(html);
            },
            error : function(error){     
                //alert("error");
            }
        });

//}
//});