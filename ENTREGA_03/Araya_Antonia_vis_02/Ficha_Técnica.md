# Ficha Técnica: Base de Datos Miss Universo Chile (Procesada)

## Características de los Datos
Esta base de datos contiene la información histórica procesada de las ganadoras del certamen. Se seleccionó para analizar la evolución del perfil profesional previo de las concursantes.

- **Nombre del archivo:** experienciamiss_final.csv
- **Formato:** CSV (Delimitado por comas)
- **Total de registros:** 35 filas (correspondientes a los años analizados).

## Variables Incorporadas (Columnas del CSV)
A continuación se describen las variables tal cual aparecen en el archivo final tras el procesamiento en Python:

* **Nombre** | Nombre completo de la ganadora.
* **Anio** | Año en que obtuvo la corona (Variable numérica).
* **Certamen** | Nombre del concurso (Miss Universo Chile).
* **Categoria** | Nivel de experiencia previa (Profesional, Amateur, Sin experiencia).
* **Detalle_M** | Descripción de la trayectoria en el mundo del modelaje.
* **Cat_TV** | Clasificación de su experiencia previa en televisión.
* **Detalle_TV** | Descripción de su paso por programas o canales de TV.
* **Vinculos** | Información sobre nexos con la industria o agencias.
* **Decada** | Variable calculada (1990s, 2000s, 2010s, 2020s) utilizada para la visualización de tendencias.

## Observaciones sobre la base de datos
Para esta entrega, se realizó una limpieza de las cabeceras originales que contenían caracteres especiales. La variable **Decada** fue creada artificialmente mediante código para permitir la agrupación en el gráfico de barras apiladas, facilitando la identificación de la tesis de profesionalización del certamen.
