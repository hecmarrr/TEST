$(document).ready(function () {
        /*$.ajax({
            type: "GET",
            //dataType: "html",
            url: "html/header.html",
            success: function (a) {
                $("#header").html(a);
            },
        });*//*
        $.ajax({
            type: "GET",
            url: "html/main_menu.html",
            success: function (a) {
                $("#mainmenu").append(a);
            },
        });*/
        /*
        $.ajax({
            type: "GET",
            url: "html/footer.html",
            success: function (a) {
                $("#footer").html(a);
            },
        });*/
});

function onDeviceReady() {
    if (parseFloat(window.device.version) === 7.0) {
          document.body.style.marginTop = "20px";
    }
}
  
document.addEventListener('deviceready', onDeviceReady, false);
