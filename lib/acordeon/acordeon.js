//$(document).ready(function() {
window.onload = function() {
    //Initialising Accordion
    
    $(".acordeon").tabs(".panel", {
        tabs: '> .acordeon_item_titulo',
        effect: 'slide',
        initialIndex: null
    });

    //The click to hide function
    $(".acordeon > .acordeon_item_titulo").click(function() {
        if ($(this).hasClass("current") && $(this).next().queue().length === 0) {
            $(this).next().slideUp();
            $(this).removeClass("current");
        } else if (!$(this).hasClass("current") && $(this).next().queue().length === 0) {
            $(this).next().slideDown();
            $(this).addClass("current");
        }
    });

    
	
	//Initialising Accordion
    $(".acordeon_suc").tabs(".panel_suc", {
        tabs: '> .acordeon_item_titulo_suc',
        effect: 'slide',
        initialIndex: null
    });

    //The click to hide function
    $(".acordeon_suc > .acordeon_item_titulo_suc").click(function() {
        if ($(this).hasClass("current") && $(this).next().queue().length === 0) {
            $(this).next().slideUp();
            $(this).removeClass("current");
        } else if (!$(this).hasClass("current") && $(this).next().queue().length === 0) {
            $(this).next().slideDown();
            $(this).addClass("current");
        }
    });
	
//});
}
