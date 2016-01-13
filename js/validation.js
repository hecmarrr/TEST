
	// Place ID's of all required fields here.
	required = ["nombres", "correo","doctor","telefono"];
	required_pay = ["cod_seguridad", "n_tarjeta","apellido_pago","nombre_pago"];

	// If using an ID other than #email or #error then replace it here
	email = $("#correo");

	errornotice = $("#error");
	// The text to show up within a field when it is incorrect
	emptyerror = "Por favor llene este campo";
	emailerror = "Ingrese un e-mail válido";

	

	$(".btn-popup").click(function(){	
		//Validate required fields
		for (i=0;i<required.length;i++) {
			var input = $('#'+required[i]);
			if ((input.val() == "") || (input.val() == emptyerror)) {
				input.addClass("requerido");
				input.val(emptyerror);
				errornotice.fadeIn(750);
			} else {
				input.removeClass("requerido");
			}
		}

		// Validate the e-mail.
		if (!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email.val())) {
			email.addClass("requerido");
			email.val(emailerror);
		}


		//if any inputs on the page have the class 'requerido' the form will not submit
		if ($(":input").hasClass("requerido")) {
			return false;
		} else {
			errornotice.hide();
			send_email();
			return true;
		}
	});
	// Clears any fields in the form when the user clicks on them
	$(":input").focus(function(){		
	   if ($(this).hasClass("requerido") ) {
			$(this).val("");
			$(this).removeClass("requerido");
	   }
	});

	$(":input").focus(function(){		
	   if ($(this).hasClass("requerido_pay") ) {
			$(this).val("");
			$(this).removeClass("requerido_pay");
	   }
	});
	


	function send_email(){

		nombre = $("#nombres").val();
		correo = $("#correo").val();
		telefono = $("#telefono").val();
		doctor = $("#doctor").val();
		datos.unshift("DETALLE DE EXAMENES");
		datos.unshift(telefono);
		datos.unshift(doctor);
		datos.unshift(correo);
		datos.unshift(nombre);
		
		var total = "Total: $" + precio;
		datos.push(total);
		/*datos.unshift(telefono);
		datos.unshift(doctor);
		*/
		/*var jsonString = JSON.stringify(datos);*/

		$.ajax({
                    type: "POST",
                    url: "http://integradora.edusite.me/php/fpdf/send_email.php",
                    data: {data : datos},
                    success: function(a) {
                          	swal("Listo!", "Cotización enviada correctamente", "success")
                          	datos = [];
                          	datos.length = 0;
                          	$("#pop_up").hide();
    						$("#c-mask").removeClass("is-active");  
    						$("#nombres").val("");
							$("#correo").val("");
							$("#telefono").val("");
							$("#doctor").val("");
							$('.check-item').prop('checked', false);  
							$('.check-item_exm').prop('checked', false);  
							precio = 0;
                        	precio_final = precio;
                        	var total = precio;
                        	$("#precio-result").html(total);
                        	
                        	$(".item-list-menu").remove();
                        	$(".check-item_exm").remove();
                        	
                            }
                    
                    }); 
	}

	
	

    
    
	$("#btn_pay_popup").click(function(){	
		//Validate required fields
		for (i=0;i<required_pay.length;i++) {
			var input = $('#'+required_pay[i]);
			if ((input.val() == "") || (input.val() == emptyerror)) {
				input.addClass("requerido_pay");
				input.val(emptyerror);
				errornotice.fadeIn(750);
			} else {
				input.removeClass("requerido_pay");
			}
		}


		//if any inputs on the page have the class 'requerido' the form will not submit
		if ($(":input").hasClass("requerido_pay")) {
			return false;
		} else {
			errornotice.hide();
			swal({   
				title: "¿Desea confirmar su pago?",   
				text: "Se realizará el pago por $" + precio_final,   
				type: "warning",   
				showCancelButton: true,   
				confirmButtonColor: "#1bc0c9",   
				confirmButtonText: "Si, desea realizar el pago",   
				cancelButtonText: "No, cancelar transacción",   
				closeOnConfirm: false,   
				closeOnCancel: false }, 

				function(isConfirm){   
					if (isConfirm) {     
						swal("Pago Realizado", "Se realizó el pago correctamente", "success");   
					} else 
					{     
						swal("Cancelado", "No se procedió con el pago", "error");   
					} 
				});
			return true;
		}
	});
		 
