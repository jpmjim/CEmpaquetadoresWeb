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