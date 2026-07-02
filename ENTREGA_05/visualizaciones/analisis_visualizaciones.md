
###  1. Análisis de Visualizaciones 

#### Visualización 1: Mapa Coroplético de Ganadoras por Comuna
* **Dimensiones comunicadas:** Dimensión geográfica y densidad territorial.
* **Mensaje clave:** Evidenciar visualmente la densa centralización de las candidatas en la Región Metropolitana (y específicamente en comunas de Santiago), versus una dispersión baja pero constante de al menos una ganadora por región en el resto del país.
* **Imagen referencial:** `![Mapa Referencial](./imagenes/mapa.png)`

#### Visualización 2: Origen Socioeconómico e IDH de las Reinas por Década
* **Dimensiones comunicadas:** Dimensión socioeconómica (Índice de Desarrollo Humano Comunal) cruzada con una dimensión temporal (décadas de historia).
* **Mensaje clave:** Demostrar el sesgo estructural del circuito. El gráfico de barras apiladas revela de forma contundente que las comunas vulnerables o de IDH bajo tienen una representación prácticamente nula (cercana a cero) a lo largo de las décadas, concentrándose el éxito en sectores con IDH "Muy Alto".
* **Imagen referencial:** `![Gráfico IDH Referencial](./imagenes/idh.png)`

#### Visualización 3: Nivel de Estudios y Capital Cultural al Competir
* **Dimensiones comunicadas:** Dimensión educativa, nivel de formación y evolución cronológica.
* **Mensaje clave:** Mostrar la profesionalización y el cambio de perfil de las candidatas a lo largo del tiempo. El gráfico ilustra cómo en las primeras décadas del certamen predominaba la educación media terminada, transitando fuertemente en los últimos años hacia reinas con estudios universitarios en curso o títulos profesionales completos al momento de competir.
* **Imagen referencial:** `![Gráfico Estudios Referencial](./imagenes/estudios.png)`

#### Visualización 4: El Trampolín Mediático (Evolución de Destinos Post-Certamen)
* **Dimensiones comunicadas:** Dimensión profesional, tipos de certamen (Big Four) y permanencia en el ecosistema medial chileno.
* **Mensaje clave:** Comunicar el rol del concurso como una institución de producción de élites y visibilidad. Muestra cuantitativamente cómo el paso por Miss Universo o Miss Mundo abre las puertas de manera sistemática a carreras de larga duración en la televisión abierta, el espectáculo o el entorno digital de influencers.
* **Imagen referencial:** `![Gráfico Destino Referencial](./imagenes/destino.png)`


###  2. Ficha Técnica de la Base de Datos

* **Nombre del archivo de respaldo:** `base_datos/base_misses_chile_156.csv` *(o el nombre exacto de tu archivo .csv)*
* **Volumen de la muestra:** 156 registros limpios y validados, abarcando cronológicamente desde el inicio del circuito nacional en 1952 hasta el año 2025.
* **Variables utilizadas en el análisis:**
  * `Año / Década:` Temporal (Ordinal) - Permite segmentar cronológicamente la evolución de los perfiles de las candidatas.
  * `Comuna de Origen:` Geográfica (Nominal) - Cruce territorial fundamental para la georreferenciación y construcción del mapa.
  * `IDH Comunal:` Socioeconómica (Ordinal/Cuantitativa) - Clasificación según el Índice de Desarrollo Humano de la comuna de origen para medir brechas de vulnerabilidad.
  * `Nivel Educacional / Estudios:` Formación (Nominal) - Clasificación de los estudios declarados al competir (Educación Media, Universitaria en curso, Profesional Titulada).
  * `Destino Profesional / Ingreso a Medios:` Trayectoria (Nominal/Booleana) - Registro de si la candidata consolidó una carrera pública permanente en medios de comunicación (Sí / No).
