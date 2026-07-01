document.addEventListener("DOMContentLoaded", () => {
    const hero = document.querySelector('.hero');

    function crearBrillo() {
        const brillo = document.createElement('div');
        brillo.classList.add('brillo');
        brillo.style.left = Math.random() * 100 + 'vw';
        const tamano = Math.random() * 5 + 3;
        brillo.style.width = tamano + 'px';
        brillo.style.height = tamano + 'px';
        const duracion = Math.random() * 3 + 2;
        brillo.style.animationDuration = duracion + 's';
        brillo.style.opacity = Math.random();

        if (hero) hero.appendChild(brillo);

        setTimeout(() => {
            brillo.remove();
        }, duracion * 1000);
    }

    setInterval(crearBrillo, 150);
});
