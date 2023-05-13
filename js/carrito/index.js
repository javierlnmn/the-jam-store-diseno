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