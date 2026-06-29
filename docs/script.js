// Esperamos a que la página cargue por completo
document.addEventListener("DOMContentLoaded", () => {
    const hero = document.querySelector('.hero');

    // Función para crear un brillo
    function crearBrillo() {
        const brillo = document.createElement('div');
        brillo.classList.add('brillo');

        // Posición horizontal aleatoria (0% a 100% del ancho de la pantalla)
        brillo.style.left = Math.random() * 100 + 'vw';

        // Tamaño aleatorio para que se vea más natural (entre 3px y 8px)
        const tamano = Math.random() * 5 + 3;
        brillo.style.width = tamano + 'px';
        brillo.style.height = tamano + 'px';

        // Velocidad de caída aleatoria (entre 2 y 5 segundos)
        const duracion = Math.random() * 3 + 2;
        brillo.style.animationDuration = duracion + 's';

        // Opacidad aleatoria inicial
        brillo.style.opacity = Math.random();

        // Agregamos el brillo a la portada
        hero.appendChild(brillo);

        // Eliminamos el brillo después de que termine su animación para no colapsar la memoria
        setTimeout(() => {
            brillo.remove();
        }, duracion * 1000);
    }

    // Generar un brillo de manera constante cada 150 milisegundos
    setInterval(crearBrillo, 150);
});