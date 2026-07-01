// Esperamos a que la página cargue por completo
document.addEventListener("DOMContentLoaded", () => {
    const hero = document.querySelector('.hero');

    // Función para crear un brillo (Tu código original intacto)
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

    // Generar un brillo de manera constante cada 150 milisegundos
    setInterval(crearBrillo, 150);

    // =========================================================================
    // 📊 REPARACIÓN DE GRÁFICOS: CARGA DIRECTA SEGURO SIN CORTAR LA PÁGINA
    // =========================================================================
    
    // Gráfico 1: Nivel de Estudios
    if (document.getElementById('vis-estudios')) {
        const iframeEstudios = document.createElement('iframe');
        iframeEstudios.src = 'grafico_nivel_estudios_colores_nuevos.html';
        iframeEstudios.style.width = '100%';
        iframeEstudios.style.height = '480px';
        iframeEstudios.style.border = 'none';
        iframeEstudios.style.background = 'transparent';
        iframeEstudios.setAttribute('scrolling', 'no');
        document.getElementById('vis-estudios').appendChild(iframeEstudios);
    }

    // Gráfico 2: El Trampolín Mediático
    if (document.getElementById('vis-destino')) {
        const iframeDestino = document.createElement('iframe');
        iframeDestino.src = 'grafico_destino_postcertamen_colores_nuevos.html';
        iframeDestino.style.width = '100%';
        iframeDestino.style.height = '420px';
        iframeDestino.style.border = 'none';
        iframeDestino.style.background = 'transparent';
        iframeDestino.setAttribute('scrolling', 'no');
        document.getElementById('vis-destino').appendChild(iframeDestino);
    }
});
