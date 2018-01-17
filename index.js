$(document).ready(function cargarPaginasIndex() {
    // $.getScript("servicios.js");
    var scrollDone = false;
    //Carga la pagina de inicio al empezar
    $("#contenedorDeCargaPaginaPrincipal").load("inicio/inicio.html");

    //Carga las paginas de la barra de navegacion
    $("#inicio").click(function() {
      $("#contenedorDeCargaPaginaPrincipal").load("inicio/inicio.html");
    })
    $("#arriendos").click(function() {
      $("#contenedorDeCargaPaginaPrincipal").load("arriendos/arriendos.html");
    });
    $("#ventas").click(function() {
      $("#contenedorDeCargaPaginaPrincipal").load("ventas/ventas.html");
    });
    $("#proyectos").click(function() {
      $("#contenedorDeCargaPaginaPrincipal").load("proyectos/proyectos.html");
    });
    $("#servicios").click(function() {
      $("#contenedorDeCargaPaginaPrincipal").load("servicios/servicios.html");
    });
    $("#contactenos").click(function() {
      $("#contenedorDeCargaPaginaPrincipal").load("contactenos/contactenos.html");
    });

    $(window).scroll(function(){
      var anuncio = $(".anuncio");
      if($(window).scrollTop() < 300 && scrollDone == false){
           anuncio.css("opacity","0");
           anuncio.css("top","100px");
      } else {
           anuncio.animate({opacity: "1", top: "0"},1500);
           scrollDone = true;
      }
      // if(scrollDone){
      //   anuncio.css("top","0px");
      // }
    });

});
