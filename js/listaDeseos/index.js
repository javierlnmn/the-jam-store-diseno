let botonVerFiltros = $('#boton-ver-filtros');
let botonCerrarFiltros = $('#boton-cerrar-filtros');
let seccionFiltros = $('.seccion-filtros');

botonVerFiltros.on('click', function () {
    seccionFiltros.show('fast', function() {
        seccionFiltros.css('display', 'block');
    });
});

botonCerrarFiltros.on('click', function () {
    seccionFiltros.hide('fast');
});