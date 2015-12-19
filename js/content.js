﻿//GOOGLE MAPS////////////////////////////////////////////////////////
window.onload = function () {
    $(".fancybox").fancybox();


    var menu_ul = $('#menu > li > ul'),
        menu_a = $('#menu > li > a');

    menu_ul.hide();

    menu_a.click(function (e) {
        e.preventDefault();
        if (!$(this).hasClass('active')) {
            menu_a.removeClass('active');
            menu_ul.filter(':visible').slideUp('normal');
            $(this).addClass('active').next().stop(true, true).slideDown('normal');
        } else {
            $(this).removeClass('active');
            $(this).next().stop(true, true).slideUp('normal');
        }
    });

    var marker;

    var latitude = -2.173278;
    var longitude = -79.898786;


    var zoom;
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
        title: "Interlab"
    });


    $("#1").show();

    /*bounds.extend(map_pos);
    map.fitBounds(bounds);
    map.panTo(new google.maps.LatLng(latitude, longitude));
    */


    $(".menu").click(function (e) {
        var local_name = $(this).attr('name');
        $(".locales_block_pos").hide();
        $("#" + local_name).show();
        latitude = $("#" + local_name).find('.locales_latitude').text();
        longitude = $("#" + local_name).find('.locales_longitude').text();
        zoom = $("#" + local_name).find('.locales_zoom').text();
        //alert(latitude+", "+longitude);
        load_map(latitude, longitude, zoom);

    });

    function load_map(la, lo, zo) {
        latitude = la;
        longitude = lo;
        zoom = Number(zo);
        /*marker.setPosition(new google.maps.LatLng(latitude, longitude));
        map.panTo(new google.maps.LatLng(latitude, longitude));
        map.setZoom(zoom);
        */
        mapOptions = {
            zoom: zoom,
            center: new google.maps.LatLng(latitude, longitude),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        map = new google.maps.Map(document.getElementById('mapa'), mapOptions);

        marker = new google.maps.Marker({
            position: new google.maps.LatLng(latitude, longitude),
            title: "Interlab"
        });

        marker.setMap(map);
    }
    //////////////////////////////////////////////
    var marker1, marker2;
    var latitud;
    var longitud;
    function trazar() {
        localizame();
    }
    function localizame() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(coordenadas, errores);
        } else {
            alert('Oops! Tu navegador no soporta geolocalización. Bájate Chrome, que es gratis!');
        }
    }

    function coordenadas(Position) {

        latitud = Position.coords.latitude;
        longitud = Position.coords.longitude;
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
        var destino = { lat: latitude, lng: longitude };

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
            travelMode: google.maps.TravelMode.WALKING
            //travelMode: google.maps.TravelMode.DRIVING
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

        //<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        /*marker1 = new google.maps.Marker({
            map: map,
            draggable: true,
            position: destino
        });*/
    //google.maps.event.addListener(marker1, 'position_changed', update);
    }



}

////////////////////////////////////////////////////////////////////