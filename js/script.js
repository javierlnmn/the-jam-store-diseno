// Cambio de color de la cabecera al hacer scroll

let anchoPagina = window.innerWidth;

$(window).resize(function () {
    anchoPagina = window.innerWidth;
    if (anchoPagina <= 480 && $('#cabecera').hasClass('cabecera-onScroll')) {
        $('#cabecera').removeClass('cabecera-onScroll');
    } else if (anchoPagina > 480 && window.scrollY > 0) {
        $('#cabecera').addClass('cabecera-onScroll');
    }
});

$(window).scroll(function (event) {
    if (anchoPagina <= 480) return
    let separacion = $(this).scrollTop();
    if (separacion > 0) {
        $('#cabecera').addClass('cabecera-onScroll');
    } else {
        $('#cabecera').removeClass('cabecera-onScroll');
    }
});


// Animacion del logo al hacer un hover

let letterWrapClass = 'logo-animado';
let letterWrapElements = document.getElementsByClassName(letterWrapClass);

[...letterWrapElements].forEach(el => {
    letterWrap(el, letterWrapClass);
    letterAnimation(el, letterWrapClass);
});



function letterWrap(el, cls) {
    let words = el.textContent.split(' ');
    let letters = [];

    cls = cls || 'logo-animado'

    words.forEach(word => {
        let html = '';
        for (var letter in word) {
            html += `
                <span class="${cls}__caracter">
                <span class="${cls}__caracter-interior" letra="${word[letter]}">
                    ${word[letter]}
                </span>
                </span>
            `;
        };

        let wrappedWords = `<span class="${cls}__palabra">${html}</span>`;
        letters.push(wrappedWords);
    });

    return el.innerHTML = letters.join(' ');
}

function letterAnimation(el, cls) {
    let tl = new TimelineMax({ paused: true });
    let characters = el.querySelectorAll(`.${cls}__caracter-interior`);
    let duration = el.hasAttribute('data-duration') ? el.dataset.duration : 0.3;
    let stagger = el.hasAttribute('data-stagger') ? el.dataset.stagger : 0.03;

    el.animation = tl.staggerTo(characters, duration, {
        y: '-100%',
        ease: Power4.easeOut
    }, stagger);

    el.addEventListener('mouseenter', (event) => {

        event.currentTarget.animation.play();

    }
    );
    el.addEventListener('mouseout', (event) => el.animation.reverse());
}


// Desplegar el modal de busqueda

let modal = $('#modal-busqueda');

$('#boton-busqueda').on('click', function () {
    modal.show();
    $('body').css('overflow', 'hidden');
});

$('#boton-cerrar-modal').on('click', function () {
    modal.hide();
    $('body').css('overflow', 'auto');
});

$(document).on('keydown', function (event) {
    if (event.keyCode == 27) /* 27 == ESC */ modal.hide();
    $('body').css('overflow', 'auto');
});
