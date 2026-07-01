// Esperamos a que la página cargue por completo
document.addEventListener("DOMContentLoaded", () => {
    const hero = document.querySelector('.hero');

    // Función para crear un brillo (Tu animación original de portada)
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
    // 📊 INYECCIÓN NATIVA DE VISUALIZACIONES (Clase de la Profesora)
    // =========================================================================
    
    // Gráfico 1: Evolución Nivel de Estudios (Colores Nuevos)
    if (document.getElementById('vis-estudios')) {
        vegaEmbed('#vis-estudios', 'grafico_nivel_estudios_colores_nuevos.html', {
            actions: false,
            mode: 'vega-lite'
        }).then(function(result) {
            // Fuerza a que se adapte al ancho de la pantalla sin comerse las leyendas
            result.view.width(Math.min(600, window.innerWidth - 80)).run();
        }).catch(console.error);
    }

    // Gráfico 2: El Trampolín Mediático (Destino)
    if (document.getElementById('vis-destino')) {
        vegaEmbed('#vis-destino', 'grafico_destino_postcertamen_colores_nuevos.html', {
            actions: false,
            mode: 'vega-lite'
        }).then(function(result) {
            // Evita cortes a la derecha en la leyenda del Sí/No
            result.view.width(Math.min(720, window.innerWidth - 80)).run();
        }).catch(console.error);
    }
});
