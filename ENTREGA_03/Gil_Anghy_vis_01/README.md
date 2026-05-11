# Visualización: Trayectoria posterior de participantes de Miss Universo Chile

## Descripción del trabajo

Esta visualización analiza las trayectorias posteriores de distintas participantes de Miss Universo Chile, buscando identificar cuáles fueron las áreas profesionales o mediáticas en las que continuaron desarrollándose tras su paso por el certamen.

La hipótesis de esta investigación plantea que el certamen funciona como una plataforma de visibilidad pública que impulsa principalmente carreras relacionadas con el modelaje y la televisión, mientras que una menor cantidad de participantes opta por caminos más privados o alejados de los medios.

## Proceso de trabajo

Para desarrollar esta visualización se trabajó inicialmente con una base de datos más amplia que contenía diversas variables relacionadas con las participantes. Posteriormente, se realizó un proceso de selección y reducción de datos del csv para conservar únicamente las variables relevantes para esta visualización:

- Nombre
- Año
- Trayectoria posterior
- Permanencia en medios
- Presencia digital en Redes

La base limpia fue exportada en formato CSV y posteriormente trabajada en Google Colab utilizando Python y la librería Altair.

En el notebook se realizó:
- carga del archivo CSV,
- revisión básica de la estructura de datos,
- verificación de valores nulos,
- creación de la visualización,
- exportación en formato HTML y JPG.

## Preguntas que responde la visualización

- ¿Cuáles son las trayectorias más comunes después de participar en Miss Universo Chile?
- ¿Qué tan presentes siguen las participantes dentro de los medios de comunicación?
- ¿El certamen funciona como plataforma hacia el modelaje y la televisión?
- ¿Cuántas participantes optan por una vida más privada tras el concurso?

## Decisiones tomadas

Se decidió utilizar un gráfico de barras debido a que permite comparar fácilmente la frecuencia de cada trayectoria profesional y facilita la comprensión visual de los datos.

Además, se optó por una visualización simple y limpia para favorecer su lectura dentro de una historia web.
