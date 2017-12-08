$(document).ready(
    $('.segunda-animacion').velocity({ rotateY: '180deg', rotateX: '180deg', top: '-13px' }, { duration: '4000', easing: 'spring', loop: true, delay: 100 }),
    $('.primera-animacion').velocity({ rotateY: '-180deg' }, { duration: '3000', easing: 'spring', loop: true, delay: 100 }),
    $('.letra-l-svg').velocity({ rotateY: '-180deg', rotateX: '180deg'}, { duration: '1000', easing: 'spring', loop: true, delay: 100 }),
    $('.cls-1').velocity({ fill: '#333e48'})
);

// function cargarPagina(){
//     cambiarColor()
// };
// function cambiarColor(){

// };