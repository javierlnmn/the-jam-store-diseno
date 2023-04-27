let botonVerFiltros = $('#boton-ver-filtros');
let botonCerrarFiltros = $('#boton-cerrar-filtros');
let seccionFiltros = $('.seccion-filtros');

botonVerFiltros.on('click', function () {
    seccionFiltros.show('fast');
});


botonCerrarFiltros.on('click', function () {
    seccionFiltros.hide('fast');
});

$(document).on('keydown', function (event) {
    if (event.keyCode == 27) seccionFiltros.hide('fast', function() {
        seccionFiltros.css('overflow', 'hidden')
    });
    $('body').css('overflow', 'auto');
});