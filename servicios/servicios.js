$(document).ready(function() {

// select the target node
var target = document.querySelector('#contenedorDeCargaPaginaPrincipal');

// create an observer instance
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if(mutation.type == "childList"){
      var node = document.querySelector("#contenedorDeCargaServicios");
      for (var i = 0; i < mutation.addedNodes.length; i++) {
        if(node != null & mutation.addedNodes[i].id == "contenedorServicios"){
          cargarPaginasServicios();
        }
      }
    }
  });
});

// configuration of the observer:
var config = { attributes: true, childList: true, characterData: true };

// pass in the target node, as well as the observer options
observer.observe(target, config);
})

function cargarPaginasServicios() {
  //Carga la pagina de servicios de inmuebles al empezar
  $("#contenedorDeCargaServicios").load("servicios/serviciosInmuebles.html");

  //Carga las paginas de los servicios
  $("#serviciosInmuebles").click(function () {
    $("#contenedorDeCargaServicios").load("servicios/serviciosInmuebles.html");
  });
  $("#serviciosObras").click(function () {
    $("#contenedorDeCargaServicios").load("servicios/serviciosObras.html");
  });
  $("#serviciosVehiculosMarinos").click(function () {
    $("#contenedorDeCargaServicios").load("servicios/serviciosVehiculosMarinos.html");
  });
  $("#serviciosVehiculosTerrestres").click(function () {
    $("#contenedorDeCargaServicios").load("servicios/serviciosVehiculosTerrestres.html");
  });
}
