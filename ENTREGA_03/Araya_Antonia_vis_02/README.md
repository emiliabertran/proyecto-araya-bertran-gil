# Documentación de Visualización Individual: Miss Universo Chile

## Proceso de Visualización
Para realizar este reporte, se utilizó la librería **Altair** en Python. El proceso consistió en:
1. **Carga y Limpieza:** Se estandarizaron los nombres de las columnas para evitar errores de lectura.
2. **Enriquecimiento de Datos:** Se creó una nueva variable llamada `Decada` calculada a partir del año, para permitir una visión de tendencia a largo plazo.
3. **Agrupación:** Se decidió utilizar un gráfico de barras apiladas. Esta decisión técnica se tomó porque permite observar la composición interna (experiencia previa) de cada grupo generacional de reinas.

## Selección y Procesamiento de la Base de Datos
Se seleccionó la base `experienciamiss.csv` debido a que permite cruzar el éxito en el certamen con la trayectoria profesional previa. 
- **Procesamiento:** Se eliminaron espacios en blanco en las categorías y se transformaron los años en décadas para que la visualización fuera comunicativamente efectiva, pasando de una lista de nombres a una tendencia estadística.

## Preguntas que responde esta visualización
1. ¿Cómo ha cambiado el perfil de las ganadoras desde los años 90 hasta hoy?
2. ¿Existe una correlación entre el paso del tiempo y la necesidad de tener experiencia profesional en modelaje?
3. ¿En qué década comenzó a desaparecer el perfil de candidata "Sin experiencia"?
