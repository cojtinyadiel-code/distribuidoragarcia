const tarjetas = document.querySelectorAll('.tarjeta-producto');

tarjetas.forEach(tarjeta => {

    let isDown = false;
    let startY;
    let scrollTop;

    // PC: Inicio del arrastre
    tarjeta.addEventListener('mousedown', (e) => {
        isDown = true;
        tarjeta.classList.add('active');
        startY = e.pageY - tarjeta.offsetTop;
        scrollTop = tarjeta.scrollTop;
    });

    // PC: Fin del arrastre
    tarjeta.addEventListener('mouseup', () => {
        isDown = false;
        tarjeta.classList.remove('active');
    });

    tarjeta.addEventListener('mouseleave', () => {
        isDown = false;
        tarjeta.classList.remove('active');
    });

    // PC: Movimiento
    tarjeta.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const y = e.pageY - tarjeta.offsetTop;
        const walk = (y - startY) * 2; // velocidad del scroll
        tarjeta.scrollTop = scrollTop - walk;
    });

    // MÓVIL: Inicio
    tarjeta.addEventListener('touchstart', (e) => {
        isDown = true;
        startY = e.touches[0].pageY - tarjeta.offsetTop;
        scrollTop = tarjeta.scrollTop;
    });

    // MÓVIL: Fin
    tarjeta.addEventListener('touchend', () => {
        isDown = false;
    });

    // MÓVIL: Movimiento
    tarjeta.addEventListener('touchmove', (e) => {
        if (!isDown) return;
        const y = e.touches[0].pageY - tarjeta.offsetTop;
        const walk = (y - startY) * 2;
        tarjeta.scrollTop = scrollTop - walk;
    });

});
