
# 4. 

### [Historial de procesos y decisiones - Antonia Araya]

## 1. Explicación del proceso de limpieza de datos

El proceso de limpieza y construcción de esta base de datos fue un trabajo intenso donde combiné la investigación manual con el apoyo de herramientas tecnológicas. Mi objetivo principal no fue solo ordenar una lista de nombres, sino reconstruir el **capital previo** de cada candidata para entender qué herramientas y redes de contacto tenían antes de su paso por los certámenes de belleza y, posteriormente, la televisión y el mundo del espectáculo.

**Pasos realizados:**

* **Recolección y Selección:** Empecé armando la lista de las 23 candidatas. Noté de inmediato que recolectar información de las participantes más recientes, como Emilia Dides o Inna Moll, era mucho más sencillo gracias a su gran presencia en redes sociales. Sin embargo, para las candidatas de los años 70, 80 y 90 tuve que hacer un trabajo más profundo de búsqueda digital, revisando archivos históricos y sitios especializados en la historia de los concursos de belleza en Chile, como también extractos de programas de televisión antiguos.
* **Uso de IA y Verificación Humana:** Para acelerar el rastreo, utilicé a **Gemini** como asistente de búsqueda, pero este paso fue el que más tiempo de limpieza me tomó. Me di cuenta de que la IA cometía errores constantes que tuve que corregir a mano.
* **Corrección de inconsistencias de IA:** Por ejemplo, en un momento la IA me aseguró que Cecilia Bolocco ya era una modelo profesional consolidada antes del Miss Chile, pero al investigar en profundidad, descubrí que la “experiencia” a la que se refería era haber sido reina de su alianza en el colegio Santiago College, lo cual para efectos de esta base de datos no cuenta como trayectoria profesional. También mencionaba que algunas candidatas, como Nataly Chilet, no tenían experiencia previa en certámenes, cuando en 2005 había sido elegida Miss Tierra Chile para el certamen Miss Tierra. También tuve problemas con algunos años de los certámenes en los que habían participado previamente (en caso de que lo hubiesen hecho).
* **Normalización de variables:** Decidí que las columnas no fueran simples "Sí" o "No" como estaban en un principio. Para que mi base tuviera más valor, me dediqué a redactar un detalle entre paréntesis. Si ponía que alguien tenía experiencia en TV, busqué el programa específico, como *Yingo* para Camila Andrade o *Mekano* para Carla Jara. Esto ayuda a que cualquier persona que vea la base tenga una idea general de su experiencia o trayectoria en medios antes de su participación en los certámenes. En los casos donde la información era muy antigua o no encontraba la información exacta, preferí usar la etiqueta **"no disponible"**.
* **Herramientas utilizadas:** Trabajé con Google Sheets para la estructura general y Gemini para el rastreo inicial, aunque siempre contrastando con fuentes primarias como Wikipedia, redes sociales y medios digitales más antiguos.

## 2. Lista de fuentes de datos y justificación

Para que mi base fuera confiable y transparente, utilicé y crucé las siguientes fuentes:

* **Wikipedia y Portales Biográficos:** Los usé principalmente para establecer la "línea de tiempo" básica de cada mujer y sacar la información primaria.
* **Archivo de Revistas (Paula):** Estas fueron mis fuentes favoritas y más confiables. Por ejemplo, gracias a Revista Paula, pude confirmar que muchas de las participantes tenían experiencia previa en modelaje, ya que aparecían en sus ediciones.
* **Chilean Charm:** Elegí esta fuente porque es el registro más completo que existe en Chile sobre concursos de belleza. Me sirvió para desempatar datos cuando la IA o Wikipedia se contradecían sobre los años en que concursaron o lugares que ocuparon las candidatas en el extranjero, además de permitirme tener la imagen de las participantes en mente.
* **Redes Sociales actuales e Instagram:** Esto fue vital para las candidatas de la última década. Me permitió ver si tenían experiencia previa en modelaje o televisión, o si ya tenían una base de seguidores como influencers antes de concursar.

## 3. Preguntas que se pueden responder con mi base de datos limpia

Al tener la base bien estandarizada, pude realizar cruces de información que responden a mis dudas periodísticas:

1.  **¿Es el Miss Chile un trampolín para personas desconocidas o una vitrina para rostros que ya están en la tele?** Al mirar mi columna de "Experiencia TV", puedo ver que hay un patrón claro donde muchas ya venían de programas juveniles. No es que la tele las descubra, sino que ellas usan el concurso para subir de nivel en una carrera que ya empezaron.
2.  **¿Cómo ha cambiado el "capital previo" con el tiempo?** Puedo comparar si las misses de los 80 llegaban con un capital más familiar o social (como el colegio o el apellido), mientras que las de ahora llegan con un capital digital (seguidores y marca personal).
3.  **¿Existe relación entre tener experiencia previa y llegar más lejos en el concurso?** Esta pregunta es clave para ver si el jurado prefiere a mujeres que ya saben manejarse frente a una cámara de televisión. Y es que muchas que no tenían experiencia previa, lograron llegar lejos en su certamen, como finalistas o semifinalistas.
