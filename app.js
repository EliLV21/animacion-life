$(document).ready(
    $('.segunda-animacion').velocity({ rotateY: '180deg', rotateX: '180deg', top: '-13px' }, { duration: '1000', easing: 'spring', loop: true, delay: 100 }),
    $('.primera-animacion').velocity({ rotateY: '-180deg' }, { duration: '1000', easing: 'spring', loop: true, delay: 100 })
);