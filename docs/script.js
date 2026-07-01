// ==========================================
// 📊 GRÁFICO 1: EVOLUCIÓN NIVEL DE ESTUDIOS
// ==========================================
(function(vegaEmbed) {
  fetch('grafico_nivel_estudios_colores_nuevos.html')
    .then(response => response.text())
    .then(htmlText => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlText, 'text/html');
      const scriptContent = doc.querySelector('script').textContent;
      const specMatch = scriptContent.match(/var spec = (\{.*?\});/s);
      if (specMatch) {
        const spec = JSON.parse(specMatch[1]);
        vegaEmbed("#vis-estudios", spec, {"mode": "vega-lite"}).catch(console.error);
      }
    }).catch(err => console.error("Error cargando estudios:", err));
})(vegaEmbed);

// ==========================================
// 📺 GRÁFICO 2: EL TRAMPOLÍN MEDIÁTICO
// ==========================================
(function(vegaEmbed) {
  fetch('grafico_destino_postcertamen_colores_nuevos.html')
    .then(response => response.text())
    .then(htmlText => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlText, 'text/html');
      const scriptContent = doc.querySelector('script').textContent;
      const specMatch = scriptContent.match(/var spec = (\{.*?\});/s);
      if (specMatch) {
        const spec = JSON.parse(specMatch[1]);
        vegaEmbed("#vis-destino", spec, {"mode": "vega-lite"}).catch(console.error);
      }
    }).catch(err => console.error("Error cargando destino:", err));
})(vegaEmbed);
