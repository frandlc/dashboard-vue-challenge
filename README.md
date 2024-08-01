# dashboard-vue

## Project Info

Hola buen día a quien sea que esté leyendo esto
Mi nombre es Francisco Agustín De La Colina, este es el proyecto de Dashboard que desarrolle para aplicar al puesto de Vue Developer ajustandose a los requisitos del challenge que me fue enviado, me encantaría tener la oportunidad de charlar con ustedes.

El proyecto está usando tailwind para los estilos solo para mostrar que puedo trabajar con frameworks CSS, también los gráficos son de una biblioteca que incluye charts.js para Vue 2. La compilación está hecha con Vite que después de la versión Vue 2.7 es el estándar. . Utilicé Vuex en lugar de Pinia para la gestión estatal porque en la solicitud para el trabajo se nombró y quiero demostrar que puedo trabajar con esa herramienta también.

Hi, I hope you are having a great day
I'm Francisco Agustín De La Colina, this is the dashboard project that i made to apply to the Vue developer job. If anyone has a question about this please contact me in LinkedIn that i would love to give you answers and a little chat.

The project is using tailwind for the styles just to show that i can work with css frameworks, also the graphs are of a library that wraps charts.js for Vue 2. The build is made with Vite that after the Vue 2.7 version is the standard. I used Vuex instead of Pinia for the state management because in the application for the job it was named and i want to show that i can work with that tool too.

## Some notes

Creo que el proyecto esta incompleto en detalles, podría estar mejor, si es necesario puedo mejorarlo bastante en distintos sentidos. Si bien los requisitos están cumplidos creo que pueden ser logrados de mejor manera e incluso podría tener todo funcionando. En cuestiones como las request HTTP traté de concentrarme en como manejaría la data el front y no tanto en el manejo de errores de esto, que claramente en un ambiente de desarrollo real tendría mucho para hacer.

I think the project is incomplete in some ways like the mock of the http request and the error handling for it. If you need to see more i can gadly improve this codebase and i will love to talk about it.

## Project Setup

Este projecto necesita la --force flag porque hay diferencias de versiones en el paquete, como usa chartjs actualizado para vue3 pero en este projecto usamos un modulo legacy que ellos proveen la dependencia queda en offside

This needs the --force flag because the installer of the graph library has some dependencies errors with the legacy mode for Vue 2

```sh
npm install --force
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
