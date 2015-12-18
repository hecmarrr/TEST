$(document).ready(function() {
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
});