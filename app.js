$(document).ready(
    cargarPagina()
);

function cargarPagina(){
    cambiarColor()
};
function cambiarColor(){
    const letraL = $('#letra-l');
    const letraI = $('#letra-i');
    const letraF = $('#letra-f');
    const letraE = $('#letra-e');

    const letraLreves = $('#letra-l-reves');
    const letraIreves = $('#letra-l-reves');
    const letraFreves = $('#letra-l-reves');
    const letraEreves = $('#letra-l-reves');

    $('#letra-l-reves').velocity({ rotateY: '180deg', rotateX: '180deg', top: '-13px' }, { duration: '4000', easing: 'spring', loop: true, delay: 100 }),
    $('#letra-i-reves').velocity({ rotateY: '180deg', rotateX: '180deg', top: '-13px' }, { duration: '5000', easing: 'spring', loop: true, delay: 100 }),
    $('#letra-f-reves').velocity({ rotateY: '180deg', rotateX: '180deg', top: '-13px' }, { duration: '6000', easing: 'spring', loop: true, delay: 100 }),
    $('#letra-e-reves').velocity({ rotateY: '180deg', rotateX: '180deg', top: '-13px' }, { duration: '7000', easing: 'spring', loop: true, delay: 100 }),
    $('#letra-l').velocity({ rotateY: '-180deg' }, { duration: '4000', easing: 'spring', loop: true, delay: 100 }),
    $('#letra-i').velocity({ rotateY: '-180deg' }, { duration: '5000', easing: 'spring', loop: true, delay: 100 }),
    $('#letra-f').velocity({ rotateY: '-180deg' }, { duration: '6000', easing: 'spring', loop: true, delay: 100 }),
    $('#letra-e').velocity({ rotateY: '-180deg' }, { duration: '7000', easing: 'spring', loop: true, delay: 100 })

    console.log(letraL)

};