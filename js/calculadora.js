
    var precio = 0.00;
    var precio_sel;
    var exam_id = "";
    var htmlString;
    var letras = [];
    var lon;
    var flag = 0;
    var datos = [];
    var precio_final;

    $("#search-input").focus(function() {
        $("#search-input").val("");
    });
    
    $("#search-input").focusout(function() {
        var val = $("#search-input").val();
        if (val == "")
        {
        $("#search-input").val("Búsqueda por nombre...");
        }
    });
    
    $(window).scroll(function () {
        if ($( document ).width() < 520)
        {
            if ($(this).scrollTop() > 0) {
                $("#search-bar").addClass("f-nav"); 
                 $( ".icon-calc" ).css( "margin-top", "0" );
            }
            else
            {
                $("#search-bar").removeClass("f-nav"); 
                 $( ".icon-calc" ).css( "margin-top", "15px" );
            } 
        
        }
        
    });
    
    
    $(".alfabet").click(function() {
    
        var letra = this.id;    
        $(".title-exam").html(letra);
        $(".alf_exam").hide();
        
        lon = letras.length;
        
        for ( var x = 0; x < lon; x = x + 1 )
        {
            if (letras[x] == letra )
            {
                flag=1; 
                x = lon;
            }
            else
            {
                flag = 0;
                                        
            }
        }
                
        if(flag==0)
        {
            letras.push(letra);
            info = "letra=" + letra;
            $('.loading-gif').show(); 
            $.ajax({
                type: "POST",
                url: "http://integradora.edusite.me/php/examenes_alfabeto.php",
                data: info,
                success: function(a) {
                    $(".content-list").append("<div class='alf_exam' id='letra_" + letra +"'>" + a + "<div>");
                },
                complete: function(){
                    $('.loading-gif').hide();
                }
            });     
        }else
        {
            
            $("#letra_" + letra).show();
        }
        
        
    });
    
    $("#search-btn").click(function() {
        var examen = $("#search-input").val();
        
        
        if (examen != "Buscar...")
        {
            $(".title-exam").html(examen);
            $(".alf_exam").hide();
            $('.loading-gif').show(); 
            info = "examen=" + examen; 
            $.ajax({
                    type: "POST",
                    url: "http://integradora.edusite.me/php/examenes_busqueda.php",
                    data: info,
                    success: function(a) {
                          $(".content-list").append("<div class='alf_exam'>" + a + "</div>");
                            },
                    complete: function(){
                        $('.loading-gif').hide();
                    }
                    }); 
        }
        
        
        
    });
    
    $('.loading-gif').bind('ajaxStart', function(){
    $(this).show();
    }).bind('ajaxStop', function(){
        $(this).hide();
    });
    
    $(this).change(function(evt) {
            
                
                exam_id = evt.target.id;
            
                
                
                if ($( "#" +exam_id ).hasClass( "check-item" ))
                {
                    
                    precio_sel = parseFloat(evt.target.value);

                    exam_id = evt.target.id;
                    
                    if (evt.target.checked){
                        precio = precio + precio_sel;
                        /*var total = precio.toFixed(2);*/
                        var total = precio;
                        precio_final = precio;
                    
                        //alert(precio);
                         htmlString = $( "#exam_" + exam_id ).html();
                         nombre_examen = htmlString;
                         nombre_examen = nombre_examen.replace('<span class="price">','');
                         nombre_examen = nombre_examen.replace('</span>','');
                         datos.push(nombre_examen);
        

                        $( ".menu-content" ).append( "<div id='examen_fila_" +  exam_id +"'><div class='item-list-menu'> " + htmlString  + " </div><input type='checkbox' class='check-item_exm' id='examen_id_" + exam_id + "' value='exam_add_" +  exam_id +"' checked /></div>" );
                        $( ".calc-mini" ).append( "<div id='examen_fila_mini_" +  exam_id +"'><div class='item-list-menu-mini'> " + htmlString  + " </div><input type='checkbox' class='check-item_exm-mini' id='examen_id_mini_" + exam_id + "' value='exam_add_mini" +  exam_id +"' checked /></div>" );
                        $("#precio-result").html(total.toFixed(2));
                        $("#total-result").html(total.toFixed(2));
                        
                    
                    } else
                    {
                        precio = precio - precio_sel;
                        var total = precio;
                        precio_final = precio;
                        htmlString = $( "#exam_" + exam_id ).html();
                         nombre_examen = htmlString;
                         nombre_examen = nombre_examen.replace('<span class="price">','');
                         nombre_examen = nombre_examen.replace('</span>','');
                        var i;
                        $.each(datos, function(index, value){
                            
                           if(value ==  nombre_examen ){
                              
                            datos.splice(index, 1);
                              return false; // retrun false to stop the loops
                           }
                        });
                        $("#precio-result").html(total.toFixed(2));
                        $("#total-result").html(total.toFixed(2));
                        $( "#examen_fila_" + exam_id  ).remove();
                        $( "#examen_fila_mini_" + exam_id  ).remove();
                    }
                }

                 if ($( "#" +exam_id ).hasClass( "check-item_exm" ))
                {
                    
                    if (evt.target.checked){
                        
                    }
                    else
                    {
                        

                        
                        
                        var res = exam_id.split("_");
                        var id_exam_ck = res[2];
                        $('#' + id_exam_ck).removeProp('checked');
                        var precio_ck = $('#' + id_exam_ck).val();
                        precio = precio - precio_ck;
                        precio_final = precio;
                        var total = precio;
                        $("#precio-result").html(total.toFixed(2));
                        $("#total-result").html(total.toFixed(2));
                        $( "#examen_fila_" + id_exam_ck  ).remove();
                        $( "#examen_fila_mini_" + id_exam_ck  ).remove();
                        
                        
                    }
                    
                }       
                
                 if ($( "#" +exam_id ).hasClass( "check-item_exm-mini" ))
                {
                    
                    if (evt.target.checked){
                        
                    }
                    else
                    {
                            
                        var res = exam_id.split("_");
                        var id_exam_ck = res[3];
                        var precio_ck = $('#' + id_exam_ck).val();
                        precio = precio - precio_ck;
                        precio_final = precio;
                        var total = precio;
                    
                        $('#' + id_exam_ck).removeProp('checked');
                        $("#precio-result").html(total.toFixed(2));
                        $("#total-result").html(total.toFixed(2));
                        $( "#examen_fila_" + id_exam_ck  ).remove();
                        $( "#examen_fila_mini_" + id_exam_ck  ).remove();
                        
                        
                    }
                    
                }           
        });
        


$("#btn_email").click(function(e) {
    $("#pop_up").show();
    $("#c-menu--slide-right").removeClass("is-active");    
});

$(".close-icon-popup").click(function(e) {
    $("#pop_up").hide();
    $("#c-mask").removeClass("is-active");    
});


$(".menu-pay-btn").click(function(e) {
   $("#pop_up_pay").show();
   var total = precio;
    $("#total_pagar").html(total.toFixed(2));
    $("#precio_final").html("$" + total.toFixed(2));
    $("#c-menu--slide-right").removeClass("is-active");    
});

$(".close-icon-popup-pay").click(function(e) {
   $("#pop_up_pay").hide();
    $("#c-mask").removeClass("is-active");    
});

$("#add_cupon").click(function(e) {
   var cupon = $("#cupon").val();

   if(cupon == "")
   {
       $("#descuento").html("Ingrese un cupón");
   }
   else
   {
        cupon = "cupon="  + cupon;
        $.ajax({
            type: "POST",
            url: "http://integradora.edusite.me/php/cupones_busqueda.php",
            data: cupon,
            success: function(a) {
                descuento = a;
                calcular_descuento();
            }
        });
    } 

});


function calcular_descuento()
{
    if (descuento > 0 )
    {
        descuento = precio * descuento;
        $("#descuento").html(" -$" + descuento.toFixed(2));
        precio_final = precio - descuento;
        $("#precio_final").html("$" + precio_final);
    }
    else
    {
        $("#descuento").html("Cupon Invalido");
        precio_final = precio;
    }
}