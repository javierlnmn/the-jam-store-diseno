let botonVerAjustesBusqueda = $('#boton-ver-ajustes-busqueda');
let botonCerrarAjustesBusqueda = $('#boton-cerrar-ajustes-busqueda');
let seccionAjustesBusqueda = $('.seccion-ajustes-busqueda');

botonVerAjustesBusqueda.on('click', function () {
    seccionAjustesBusqueda.show('fast', function() {
        seccionAjustesBusqueda.css('display', 'block');
    });
});

botonCerrarAjustesBusqueda.on('click', function () {
    seccionAjustesBusqueda.hide('fast');
});