# CEmpaquetadoresWeb
Curso de Introducción a Empaquetadores Web

## 🏛️ Historia
- 1995: Nacimiento JavaScripten la guerra entre Microsoft y NetScape por el mercado de internet
- 2009: Nacimiento Node.jsun tiempo de ejecución de JavaScript en el lado del servidor
- 2009: Lanzamiento de npmun empaquetador para Node y JavaScript
- 2011: Browserifyla herramienta para empaquetar llega al entorno JavaScript
- 2013: Gulpmostrar una nueva forma de trabajar con nuestras aplicaciones de JavaScript
- 2014: Babelun compilador de JavaScript

## ¿Qué es un empaquetador de módulos de JavaScript?

Es una pieza de software que permite tener todos los elementos (código, imágenes, fuentes, etc.) en un solo archivo, esto es útil para reducir el tamaño del código. 

  ### **¿Qué es un módulo?**
  Es solo un archivo con código que podemos llamar desde los otros archivos de la misma manera que podemos importar otros módulos a nuestro archivo. Tener el código muy bien organizado.

  - ¿Qué es IIFE?

    Es una forma en JavaScript para invocar una función inmediatamente y representa Expresión de función invocada inmediatamente **Ejemplo**:
    ```javascript
    (function () {
      console.log('Hi from IIFE')
    })()
    ```
  - ¿Qué es CommonJS (CJS)?

    Es una alternativa para crear módulos en JavaScript que nació con Node.js en 2009

  - ¿Qué es AMD (definición de módulo asíncrono)?

    Es una propuesta para solucionar algunas limitaciones que tiene CJS para cargar módulos en el lado del cliente.
  
  - ¿Qué son los módulos ES (ESM)?

    Está implementada la forma nativa con Ecmascript6+ que le permite usar <code>export</code> y <code>import</code> para poder  trabaja con módulos de una manera fácil.

## Empaquetadores de módulos más populares
  Cada una de estas herramientas serviran para sacar ventaja según la necesidad que requiere el proyecto. Cada una tiene una propuesta.

  ### [Webpack](https://webpack.js.org/)
  - Gestión de dependencias
  - Ejecución de tareas
  - Conversión de formatos
  - Servidor de desarrollo
  - Mas popular

  ### [Parcel](https://parceljs.org/)
  - Gestión de dependencias
  - Ejecución de tareas
  - Servidor de desarrollo
  - Diagnóstico de implementación
  - Tree shaking separar el código que no utilizamos de no ser agregadas al proyecto.

  ### [ESBuild](https://esbuild.github.io/)
  - Velocidad extrema
  - Ejecución de tareas
  - Tree shaking
  - ES6 y CommonJS modules

  ### [Rollup]()
  - Fácil ejecución de dependencias
  - Ejecución de tareas
  - Tree shaking
  - ES6 y CommonJS modules
  - Contiene plugins
  - https://rollupjs.org/guide/en/

  ### [Vite](https://vitejs.dev/)
  - La cual nos permite trabajar un proyecto con todo ya mencionado.
  - Incluye todas estas ventajas.
  - Gran versatilidad con typescript.

## ¿Por qué necesitamos un empaquetador de módulos?
  Un empaquetador te permite gestionar tu código, ver que se utiliza y que no, poner restricciones y reglar, ver que tipo de recursos admitir también como referenciar estos recursos al momento de hacer un deploy a producción para gestionar mejor el tema de optimización y seguridad.

  Optimizan todo nuestro código y recursos para llevarlo a producción

## Primeros pasos en Webpack
  Webpack es un empaquetador de modulos que nacio a finales del 2012.

  En esencia, webpack es un módulos estáticos para aplicaciones JavaScript modernas. Cuando webpack procesa su aplicación, crea internamente un gráfico de dependencia a partir de uno o más puntos de entrada y luego combina todos los módulos que necesita su proyecto en uno o más paquetes , que son activos estáticos desde los que servir su contenido.

  Creamos nuestro proyecto:
  ```bash
  mkdir webpack
  cd webpack
  ó take webpack
  #iniciamos el proyecto
  npm init -y
  # instalamos elementos base
  npm i webpack webpack-cli -D
  ```

## Configuración de webpack
  Instalación de nuevos paquetes:
  ```bash
  npm i html-webpack-plugin copy-webpack-plugin @babel/core babel-loader -D
  ```

## Proyecto a empaquetar: Tu propio árbol de links
  - Referencia del proyecto en esta dirección [link](https://gndx.io/)
  - Modificaremos los datos dentro de nuestro index.html que se encuentra en la carpeta public, con nuestros datos el cual esta haciendo uso de [Tailwind](https://tailwindui.com/).
  - Para trabajar de forma dinamica la pagina tomaremos toda la data de cada uno de los elementos como (las redes sociales, datos, links) que se encuentran dentro de nuestro index.js, [referencia](https://gist.github.com/gndx/304bb80d7d4cc10e1d9faddd6eeb2fac)

## Lógica del árbol de links tipo linktree
  Dentro de nuestro index.js crearemos una constante de nombre **main**, el cual relizara la estructura y el llamado de cada uno de los datos que se encuentran dentro de **data**. Por ejemplo del **name** y los **links** que se añadiran dinamicamente.

## Empaquetando un proyecto con webpack
  Instalamos un nuevo paquete:
  ```bash
  npm install webpack-dev-server -D
  ```

  Creamos dos nuevos scripts dentro de nuestro **package.json**
  ```json
  "scripts": {
    "build": "webpack --mode production",
    "start": "webpack-dev-server --mode development"
  }
  ```

  Y desde la terminal realizamos el primer compilado, el cual optimizara cada uno de los archivos donde se alojaran en la carpeta de dist antes configurada:
  ```bash
  #para modo de production
  npm run build
  # para modo desarrollo
  npm run start
  ```

  Archivo de ejemplo como quedaria con todos los cambios.
  [Empaquetador de Webpack](https://gist.github.com/jpmjim/54fabec4670ed6f3bc0d7726ca3fe918)

## Deploy en github
  Instalamos el paquete **gh-pages** que tiene github para poder tener despliegue de paginas estaticas.
  ```bash
  npm i gh-pages -D
  ```

  Dentro de nuestros scripts creamos uno para el deploy.
  ```bash
  "deploy": "gh-pages -d dist"
  ```

  Ejecutamos en la terminal:
  ```bash
  npm run deploy
  ```
  **-------------------------------------------------------------------------------------------------**

## Primeros pasos en Parcel
  Parcel combina una excelente experiencia de desarrollo lista para usar con una arquitectura escalable que puede llevar su proyecto desde el inicio hasta una aplicación de producción masiva.

  Cada empaquetador tiene diferente estructura de carpetas, comandos, o escritps tambien la forma compilación. Al final tiene el mismo objetivo.

  Comandos para el proyecto:
  ```bash
  #creamos la carpeta
  mkdir parcel
  #inicializamos git y npm
  git init
  npm init -y
  ```

  Instlación de parcel
  ```bash
  npm i parcel -D
  ```

## Proyecto a empaquetar: single page con Vanilla JavaScript
  El proyecto estara basado en un API que es la siguiente:
  
  - [Platzi Fake Store API](https://fakeapi.platzi.com/) donde mostraremos los productos que contiene la imagen, el titulo y su precio agregarlo a un sitio web.

  - [Recurso de los estilos](https://gist.github.com/gndx/f116ce87b54152cfbfc12fd30dd6b428) que usaremos dentro de nuestro archivo de **styles.css**.

## Lógica del proyecto single page
  De crear la logica utilizando elemtos html, css, js como parte fundamental del proceso, donde parcel optimizan todo para no realizar muchas configuraciones enfocandonos sobre el proyecto.

## Empaquetado un proyecto con parcel
  Una de las caracteristicas de parcel es no tener mucha configuracion, a diferencia de webpack. Parcel es muy inteligente para detectar los archivos, el punto de entrada, los estilos, los scripts, sin tener que crear el archivo de la carpeta de public.

  Corremos el proyecto:
  ```bash
  #compilado
  npm run build
  # al correr el build instala un nuevo paquete y la carpeta dist con sus archivos
  posthtml-include
  #ejecutamos
  npm run start
  ```
## Deploy de Parcel
  Instalamos el paquete de github:
  ```bash
  npm install gh-pages -D
  #añadimos nuestro script en package.json
  "deploy": "gh-pages -d dist"
  ```

  Ejecutamos el script:
  ```bash
  npm run deploy
  ```

## Primeros pasos en ESBuild
  Trabajaremos un proyecto usando react con esbuild. Lo unico que cambia el configuracion base de cada uno de los empaquetadores que estamos utilizando.

  Inicializamos nuestro proyecto:
  ```bash
  #creamos nuestra carpeta
  mkdir nombre_carpeta
  #inicilizamos el repositorio local
  git init
  #inicializamos npm para configuracion base
  npm init -y
  ```

  Instalación de los paquetes:
  ```bash
  npm i esbuild -D
  npm i react react-dom @types/react @types/react-dom typescript
  #inicializamos typescript para para el archivo de configuración
  npx tsc --init --rootDir src --jsx react
  ```

## Proyecto a empaquetar: contador de React
  Trabajaremos la estructura del proyecto compuesto por react y typescript.
  Realizando un contador cuantas veces es pulsado mediante un boton.

## Empaquetado nuestro proyecto con ESbuild
  Dentro de ESbuild existen dos metodos para el empaquetamiento mediante script o un archivo de configuración.

  **Scripts**
  ```json
  #archivo package.json
  "build": "esbuild src/index.tsx --minify --sourcemap --outfile=public/bundle.js"
  ```

  Terminal:
  ```bash
  #compilado es casi inmediato
  npm run build
  ```

  Instalamos la dependencia que nos genera entorno de desarrollo local:
  ```bash
  #terminal
  npm i esbuild-serve -D
  ```
  
  Crearemos el archivo de configuración en la raiz que es **esbuild.dev.js**. Creamos un nuevo script para ejecutar este archivo:
  ```bash
  "build:dev": "node esbuild.dev.js"
  "start": "node esbuild.dev.js -w",
  "open": "open public/index.html"
  ```

  Ejecutamos los comandos en la terminal:
  ```bash
  npm run build:dev
  npm run start
  npm run open
  ```

## Configuración de ESBuild serve
  Añadiremos un nuevo archivo de configuración que nos permitira usar el concepto de servidor de entorno local para trabajar en el aplicativo.

  Nuevo archivo en la raiz donde importaremos esbuild-serve:
  ```bash
  touch esbuild.config.js
  ```

  Dentro de nuestro script de start:
  ```json
  "start": "node esbuild.confi.js -w"
  ```
## Deploy de ESBuild
  Instalamos el paquete de github:
  ```bash
  npm install gh-pages -D
  #añadimos nuestro script en package.json
  "deploy": "gh-pages -d dist"
  ```
  
  Ejecutamos el script:
  ```bash
  npm run deploy
  ```
  
## Primeros pasos en Rollup
  Trabajaremos el proyecto usando un templatede html que vamos autogenerar, trabajando con plugin,donde tendremos mas elementos dentro del proyecto.

  Añadimos nuestra carpeta y inicilizamos el proyecto:
  ```bash
  mkdir rollup
  cd rollup
  git init
  npm init -y
  ```

  Instalación de rollup y las dependencias que usaremos:
  ```bash
  npm install rollup -D
  #nos ayudara a generar un archivo html
  npm i @rollup/plugin-html -D
  #para las imagenes
  npm i @rollup/plugin-image -D
  npm install rollup-plugin-copy rollup-plugin-css-only -D
  ```

## Configurando plugins de Rollup
  Integraremos los plugins a nuestro archivo de configuración de rollup. Cada plugin tiene una configuracion por defecto o tambien pasarle objetos de configuracion segun sea la necesidad.

## Proyecto a empaquetar: Fake API
  - Utilizaremos la [API de Platzi](https://fakeapi.platzi.com/).
  - Los [estilos](https://gist.github.com/gndx/a7dc22ce7d5364d7f57c5fefeafa67cc) para el proyecto en el archivo **styles.css**.

## Empaquetando nuestro proyecto con Rollup
  Rollup no cuenta con un entorno desarrollo local nativa, añadiremos un paquete que nos ayudara:
  ```bash
  #dev-server
  npm i @web/dev-server -D
  ```

  Scripts que usaremos:
  ```bash
  #para el entorno de desarrollo local
  "start": "web-dev-server --config web-dev-server.config.js",
  #para genere la preparacion del proyecto
  "build": "rollup -c"
  ```

  Corremos los scripts en la terminal:
  ```bash
  #primero nuestro build para generar la carpeta dist
  npm run build
  #de forma local
  npm run start
  ```

## Deploy de Rollup
  Instalamos el paquete de github:
  ```bash
  npm install gh-pages -D
  #añadimos nuestro script en package.json
  "deploy": "gh-pages -d dist"
  ```
  
  Ejecutamos el script:
  ```bash
  npm run deploy
  ```

## Empquetando un proyecto con Vite
  Es una de las herramientas mas poderosas en el entorno de empaquetadores, por que combina diferentes tecnologias y una serie de recursos automatizados.
  Podemos usar vanilla, vue, react, lite element y svelte con javascript o typescipt. 

  Para iniciar un proyecto con vite desde la terminal ingresamos el siguiente comando:
  ```bash
  npm create vite@latest
  ```
  Donde asiganremos un nombre a un nuestro proyecto:
  ```bash
  #poder elegir en que entorno queremos trabajar
  * vanilla
  * vue
  * react
  * preact
  * lit
  * svelte
  ```

  Ingresamos a la carpeta del proyecto:
  ```bash
  cd name_proyect
  #instalamos dependencias
  npm install
  #corremos el proyecto
  npm run dev
  ```
