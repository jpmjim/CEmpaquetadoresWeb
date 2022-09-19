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