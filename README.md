# RECICLAJE

### Autora: Patty Zurita

Para este proyecto se ha generado un juego con React con temática de reciclaje. El modelo se basa en el juego del ahorcado, en el cual se debe completar la respuesta, sobre la pista existente, letra por letra previo a que culminen los intentos, o en este caso previo a que la basura se apodere del mundo. 

Para el juego se tiene una pantalla de inicio, la cual cumple con la función de informar las instrucciones a su usuario y dar inicio al juego. En el juego existe la posibilidad de fallar en los intentos lo cual nos llevará a pantalla de perdida; mientras que en caso de encontrar la respuesta correcta será redirigido a pantalla de correcto.

## Configuraciones y desarrollo técnico
Para empezar se generó proyecto de aplicativo react en blanco mediante linea de comandos haciendo uso de "npx create-react-app nombre". Con esta estructura se procedió a incluir componente, contexto y assets que permitirían el desarrollo del mismo. 

Por otro lado, para este proyecto se requirió instalar react router, lo cual se realizó en línea de comandos "npm -i react-router-dom"

PAra el proyecto se consideraron 4 escenarios que resultarían esenciales para un buen desempeño. Estos son la introducción, el juego, el escenario de ganar y el escenario de perder. Todo esto se vio traducido a las diferentes clases JS que se crearon a modo de componentes. Ante esto se realizaron las respectivas asociaciones y configuraciones, tanto a nivel front-end como back-end. Para otorgar los estilos se utilizó la clase de index.css

Cabe resaltar que uno de los factores fundamentales para el juego es que las preguntas se puedna desplegar de manera aleatoria por lo que se cuenta con un repositorio de preguntas previamente establecidas, de las que el algoritmo podrá sortear. 

Otro aspecto esencial es el uso de botones y la retencion de información que estos proveen. Para esto se usaron varias funciones en la clase juego para generar cada letra e identificarla como input al momento de reconocer letras de la palabra a adivinar. De igual manera, es importante el manejo de efecto visual sobre letras faltantes que se ha contemplado de igual manera dentro de la mencionada clase. 

Cabe mencionar que para que se pudieran relacionar los diferentes escenarios en la palicación (App.js) se tiene contemplada herencia de hijos en base a contexto y componentes.

## Enlace de referencia
Para desarrollo de la palicación se tomó para aprendizaje el siguiente video https://www.youtube.com/watch?v=5pWKsNz3E3A

## Repositorio GIT
https://github.com/pattymicaelazurita/recicla

## Proyecto deployado
https://recicla.herokuapp.com/