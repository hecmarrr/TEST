
$( document ).ready(function() {


	 $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        });
  
        $('.scrollup').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });
  
    });


	var index = 0;

	$(".tips_block").hide();
	//$(".tips_block:eq("+index+")").show();

	$(".tip_btn").click(function(event){
		index = $(this).index();
		$(".tips_block").hide();
		$(".tips_block:eq("+index+")").show();
	});

	$(".servicios_en_tiendas .main_block1").hide();

	$(".servicios_en_tiendas .products_subcategory div").click(function(event){
		index = $(this).index();
		$(".servicios_en_tiendas .main_block1").hide();
		$(".servicios_en_tiendas .main_block1:eq("+index+")").show();
	});

	$('#search_bar input').focus(function() {
	    $(this).val("");
	});

	$('#subscribe_txt').focus(function() {
	    $(this).val("");
	});

	$('.slider').bxSlider({
		slideMargin: 0,
		controls: true,
		responsive: true,
		pager: false,
		mode: 'fade',
		auto: true,
		pause: 4000,
	});

	$('.mini_slider').bxSlider({
		slideMargin: 0,
		controls: false,
		responsive: true,
		pager: false,
		mode: 'fade',
		auto: true,
		pause: 4000,
	});

	$('.slider_novedades').bxSlider({
		slideMargin: 0,
		controls: true,
		responsive: true,
		pager: false,
		mode: 'horizontal',
		auto: false,
		pause: 10000,
		speed: 1000
	});

	$('.slider_vendidos').bxSlider({
		slideMargin: 0,
		controls: true,
		responsive: true,
		pager: false,
		mode: 'horizontal',
		auto: false,
		pause: 11000,
		speed: 1000
	});

	$('.slider_promo').bxSlider({
		slideMargin: 0,
		controls: true,
		responsive: true,
		pager: false,
		mode: 'horizontal',
		auto: true,
		pause: 7000,
	});

	$('.slider_locales').bxSlider({
		slideMargin: 0,
		controls: false,
		responsive: true,
		pager: false,
		mode: 'fade',
		auto: true,
		pause: 7000
	});

	$('.slider_marca').bxSlider({
		slideMargin: 10,
		slideWidth: 1024,
    	minSlides: 5,
    	maxSlides: 5,
		controls: false,
		responsive: true,
		pager: false,
		mode: 'horizontal',
		auto: true,
		pause: 0,
		speed: 10000,
		easing: 'linear'
	});

	//SUBSCRIBER//////////////////////////////////////////////////////////
	//*******************************************************************

	var subscribe_flag;

	$('#subscribe_btn').click(function(e){
		subscribe_flag = true;
		
		if($('#subscribe_txt').val().search('@') == -1 || $('#subscribe_txt').val().indexOf('.') == -1)
		{
			subscribe_flag = false;
			$('#subscribe_txt').css('border-color', '#00AEEB');
		}
		else
		{
			$('#subscribe_txt').css('border-color', '#dddddd');
		}
		
		if(subscribe_flag)
		{

			$('#subscribe_fail_btn').click(function(){
				document.getElementById('subscribe_form').style.display = 'block';
				document.getElementById('subscribe_success_message').style.display = 'none';
				document.getElementById('subscribe_fail_message').style.display = 'none';
		   });

			$.post('php/subscribe.php',  $('#subscribe_form').serializeArray(), function(data){
				if(parseInt(data))
				{
					$('form').get(0).reset();
					document.getElementById('subscribe_form').style.display = 'none';
					document.getElementById('subscribe_success_message').style.display = 'block';
					document.getElementById('subscribe_fail_message').style.display = 'none';
				}
				else
				{
					document.getElementById('subscribe_form').style.display = 'none';
					document.getElementById('subscribe_success_message').style.display = 'none';
					document.getElementById('subscribe_fail_message').style.display = 'block';
				}
			});
		}
			
		return false;
	});

	//*******************************************************************
	//*******************************************************************

	//GOOGLE MAPS////////////////////////////////////////////////////////

	var marker;

	var latitude = -1.485476;
	var longitude = -78.554368;

	var map_pos = new google.maps.LatLng(latitude, longitude);
	var mapOptions = {
		zoom: 4,
		center: map_pos,
		disableDefaultUI: true,
		zoomControl: true,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
	var bounds = new google.maps.LatLngBounds();

	marker = new google.maps.Marker({
		position: map_pos,
	 	map: map,
	  	icon: 'img/generic_marker.png'
	});

	bounds.extend(map_pos);
	map.fitBounds(bounds);
	map.panTo(new google.maps.LatLng(latitude, longitude));

	$(".locales_accordeon div").click(function(e) {
		var local_name = $(this).attr('name');
		$(".locales_block_pos").hide();
		$("#" + local_name).show();
		latitude = $("#" + local_name).find('.locales_latitude').text();
		longitude = $("#" + local_name).find('.locales_longitude').text();
		//alert(latitude+", "+longitude);
		load_map(latitude, longitude);
		
	});

	function load_map(la, lo)
	{
		latitude = la;
		longitude = lo;
		marker.setPosition(new google.maps.LatLng(latitude, longitude));
    	map.panTo(new google.maps.LatLng(latitude, longitude));
		map.setZoom(16);
	}

	////////////////////////////////////////////////////////////////////
});