// Desplegar el modal de vaciar carrito

let modalVaciarCarrito = $('#modal-vaciar-carrito');

$('#boton-vaciar-carrito').on('click', function () {
    modalVaciarCarrito.show();
    $('body').css('overflow', 'hidden');
});

$('#boton-cerrar-modal-vaciar-carrito').on('click', function () {
    modalVaciarCarrito.hide();
    $('body').css('overflow', 'auto');
});

$(document).on('keydown', function (event) {
    if (event.keyCode == 27) /* 27 == ESC */ modalVaciarCarrito.hide();
    $('body').css('overflow', 'auto');
});

// Quitar sombra del banner del precio

let pieCarrito = $('.pie-carrito');
let distanciaAnterior = pieCarrito.offset();

$(window).on('scroll', function () {
    let distancia = pieCarrito.offset().top;
    
    if (distancia === distanciaAnterior) {
        pieCarrito.addClass('pie-carrito_sin-sombra');
    } else {
        pieCarrito.removeClass('pie-carrito_sin-sombra');
    }

    distanciaAnterior = distancia;
});