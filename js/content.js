$(function(){
  document.addEventListener("deviceready", onDeviceReady, false);
})




var section;
$(".menu_main_icon").hide();


    $("#search-input-suc").focus(function() {
        $("#search-input-suc").val("");
    });
    
    $("#search-input-suc").focusout(function() {
        var val = $("#search-input-suc").val();
        if (val == "")
        {
        $("#search-input-suc").val("Buscar...");
        }
    });


var latitude = -2.173278;
var longitude = -79.898786;
var zoom = 16;
var local_name;


$("#btn_suc").click(function(e) {
    show_suc();
});

$("#btn_calc").click(function(e) {
    show_calc();
});

$("#btn_suc_menu").click(function(e) {
    show_suc();
});

$("#btn_calc_menu").click(function(e) {
    show_calc();
});


$("#logo").click(function(e) {
    show_home();
});

$("#header").click(function(e) {
    show_home();
});


function show_home(){
    $(".content_section").hide();
    $("#home").show();
    $(".menu_main_icon").hide();
}

function show_calc()
{
   $(".content_section").hide();
   $(".menu_main_icon").show();
    $("#calculadora").show(); 
}

function show_suc()
{
    $(".content_section").hide();
    $(".menu_main_icon").show();
    $("#locales").show();
    load_map(latitude, longitude,zoom);
}

//GOOGLE MAPS////////////////////////////////////////////////////////

var marker;

var map_pos = new google.maps.LatLng(latitude, longitude);
var mapOptions = {
	zoom: 16,
	center: map_pos,
	zoomControl: true,
	mapTypeId: google.maps.MapTypeId.ROADMAP
};

var map = new google.maps.Map(document.getElementById('mapa'), mapOptions);
//var bounds = new google.maps.LatLngBounds();

marker = new google.maps.Marker({
	position: map_pos,
 	map: map,
  	title:"Interlab"
});


$("#suc1").show();

/*bounds.extend(map_pos);
map.fitBounds(bounds);
map.panTo(new google.maps.LatLng(latitude, longitude));
*/


$(".option_menu").click(function(e) {
	$(".option_menu").removeClass("bold");
	$(this).addClass("bold");
	local_name = $(this).attr('name');
	$(".locales_block_pos").hide();
	$("#" + local_name).show();
	latitude = $("#" + local_name).find('.locales_latitude').text();
	longitude = $("#" + local_name).find('.locales_longitude').text();
	zoom = $("#" + local_name).find('.locales_zoom').text();
	//alert(latitude+", "+longitude);
	load_map(latitude, longitude,zoom);
	
});

function load_map(la, lo, zo)
{
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';
	latitude = la;
	longitude = lo;
	zoom = Number(zo);
	/*marker.setPosition(new google.maps.LatLng(latitude, longitude));
	map.panTo(new google.maps.LatLng(latitude, longitude));
	map.setZoom(zoom);
	*/
	mapOptions = {
        zoom: zoom,
        center: new google.maps.LatLng(latitude,longitude),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

	map = new google.maps.Map(document.getElementById('mapa'), mapOptions);
	
	marker=new google.maps.Marker({
		position:new google.maps.LatLng(latitude,longitude),
		title:"Interlab"
	});
			
	marker.setMap(map);
    if (local_name === undefined )
    {
        var direccion_principal = $("#suc1_dir_principal").text();
    }
    else
    {
        var direccion_principal = $("#" + local_name + "_dir_principal").text();
    }
    var infowindow = new google.maps.InfoWindow({
      content:direccion_principal
    });

    infowindow.open(map,marker);
}



////////// COMO LLEGAR/////


	var marker1, marker2;
    var latitud;
    var longitud;
    function trazar() {
        localizame();
    }
    function localizame() {
        
        if (navigator.geolocation) {
           onDeviceReady();
        } else {
            alert('Oops! Tu navegador no soporta geolocalización. Bájate Chrome, que es gratis!');
        }
    }

    function onDeviceReady() {
        navigator.geolocation.getCurrentPosition(coordenadas, errores);     
    }

    function coordenadas(position) {
        latitud = position.coords.latitude;
        longitud = position.coords.longitude;
        initMap(latitud, longitud);
        
    }
    function errores(err) {
        /*Controlamos los posibles errores */
        if (err.code == 0) {
            alert("Oops! Algo ha salido mal");
        }
        if (err.code == 1) {
            alert("Oops! No has aceptado compartir tu posición");
        }
        if (err.code == 2) {
            alert("Oops! No se puede obtener la posición actual");
        }
        if (err.code == 3) {
            alert("Oops! Hemos superado el tiempo de espera");
        }
    }

    $("#traza_map").click(function (e) {
        localizame();
        //initMap();
    });

    function initMap(lt,ln) {
        
        var inicio = { lat: lt, lng: ln };
        var destino = { lat: Number(latitude), lng: Number(longitude) };

        var map = new google.maps.Map(document.getElementById('mapa'), {
            center: inicio,
            scrollwheel: false,
            zoom: 15
        });

        var directionsDisplay = new google.maps.DirectionsRenderer({
            map: map
        });

        // Set destination, origin and travel mode.
        var request = {
            destination: destino,
            origin: inicio,
            //travelMode: google.maps.TravelMode.WALKING
            travelMode: google.maps.TravelMode.DRIVING
            //travelMode: google.maps.TravelMode.BICYCLING
            //travelMode: google.maps.TravelMode.TRANSIT
        };

        // Pass the directions request to the directions service.
        var directionsService = new google.maps.DirectionsService();
        directionsService.route(request, function (response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                // Display the route on the map.
                directionsDisplay.setDirections(response);
            }
        });

        /****************************************************************************************/
        
        var geocoder = new google.maps.Geocoder;

        var service = new google.maps.DistanceMatrixService;
        service.getDistanceMatrix({
            origins: [inicio, 'Origen'],
            destinations: [destino, 'Destino'],
            travelMode: google.maps.TravelMode.DRIVING,
            unitSystem: google.maps.UnitSystem.METRIC,
            avoidHighways: false,
            avoidTolls: false
        }, function(response, status) {
            if (status !== google.maps.DistanceMatrixStatus.OK) {
                alert('Error was: ' + status);
            } else {
                var originList = response.originAddresses;
                var destinationList = response.destinationAddresses;
                var outputDiv = document.getElementById('output');
                outputDiv.innerHTML = '';

                var showGeocodedAddressOnMap = function(asDestination) {
                    return function(results, status) {
                    };
                };

                for (var i = 0; i < originList.length; i++) {
                    var results = response.rows[i].elements;
                    geocoder.geocode({'address': originList[i]},
                        showGeocodedAddressOnMap(false));
                    for (var j = 0; j < results.length; j++) {
                        geocoder.geocode({'address': destinationList[j]},
                            showGeocodedAddressOnMap(true));
                        /*$("#output").html(originList[i] + ' to ' + destinationList[j] +
                            ': ' + String(results[j].distance.text) + ' in ' +
                            String(results[j].duration.text) + '<br>');*/
                        outputDiv.innerHTML = originList[i] + ' hacia ' + destinationList[j] +
                            ': ' + String(results[j].distance.text) + ' en ' +
                            String(results[j].duration.text) + '<br>';
                    }
                }
            }
        });
        /*********************************************************************************************************************************************/
        
 }