# 3. Ficha Técnica y Diccionario de Datos

### Metodología de construcción
Para armar esta base de datos, hicimos una investigación de cada candidata para ver qué hacían antes de ser famosas por el concurso. Primero, seleccionamos a 23 participantes que fueran conocidas o que después del certamen hayan hecho una carrera en los medios. Luego, buscamos información en prensa, archivos de revistas y sitios especializados para reconstruir su capital previo y ver si ya tenían experiencia en el mundo del espectáculo antes de concursar.

### Alcance de los datos
La base tiene 23 registros de candidatas que pasaron por el Miss Universo, Miss Mundo o Miss Chile. El periodo que cubrimos va desde 1975 (con el caso de Raquel Argandoña) hasta 2025, para tener una visión histórica de cómo ha cambiado el perfil de las participantes y su entrada a la televisión.

### Características de los datos
Es una base de datos cualitativa. Lo que buscamos fue categorizar la experiencia previa de cada una. Para que fuera más útil, usamos un formato **mixto (booleano y texto)**: ponemos si tuvieron o no experiencia en algo (Sí/No) y, entre paréntesis, detallamos exactamente qué hacían para que la información sea más completa.

### Diccionario de datos

* **Nombre:** Nombre completo de la candidata. (Tipo: Texto).
* **Participación previa en certámenes:** Indica si la candidata ya había concursado en otros eventos de belleza antes del actual.
    * *Valores:* Sí (+ detalle del concurso) / No.
* **Experiencia en modelaje:** Trabajó como modelo en pasarelas, catálogos o publicidad antes de ser Miss.
    * *Valores:* Sí (+ dónde trabajó o qué hizo) / No.
* **Experiencia en TV, actuación, etc.:** Si tuvo roles en programas de televisión, series, obras o escenarios antes de entrar al concurso.
    * *Valores:* Sí (+ programa o rol específico) / No.
* **Presencia previa en prensa o medios:** Registro de si ya era conocida en los medios de comunicación o revistas antes del certamen.
    * *Valores:* Sí (+ en qué medio o por qué era conocida) / No disponible.
* **Vínculos con agencias, academias o pasarelas:** Si tenía formación profesional previa o pertenecía a alguna agencia que la representara.
    * *Valores:* Sí (+ nombre de la agencia o academia) / No.

