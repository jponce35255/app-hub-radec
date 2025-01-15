# Hub

Esta aplicación está desarrollada en Angular 19 diseñada para ser un punto centralizado de acceso a otras aplicaciones. Esta app actúa como un hub, proporcionando enlaces y redirecciones rápidas a diversas aplicaciones. 

---

## Tabla de Contenidos

- [Desarrolladores](#desarrolladores)
- [Paqueterías utilizadas](#paqueterías-utilizadas)
- [Requisitos](#requisitos)
- [Instalación y Configuración](#instalación-y-configuración)
  - [Instalación de Dependencias](#instalación-de-dependencias)
  - [Configuración](#configuración)
- [Ejecutar el Proyecto](#ejecutar-el-proyecto)
- [Compilar el Proyecto](#compilar-el-proyecto)

---

## Desarrolladores

- **[Jonathan Ponce]** - First commit (15/01/2025).

---

## Fuentes y Bibliotecas Externas

A continuación se muestran las dependencias externas utilizadas en este proyecto:

### Fuentes

1. **Roboto & Poppins** (fuente de Google Fonts):
   Para agregar la fuente **Roboto**, incluye este enlace en el archivo `index.html` de tu proyecto:

   ```html
   <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&family=Poppins:wght@500&display=swap" rel="stylesheet">

2. **Material Icons** (Íconos de Google):
   Para agregar los **Material Ícons**, incluye este enlace en el archivo `index.html` de tu proyecto:

   ```html
   <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

### Bootstrap

1. **Bootstrap CSS**:
   Para usar el framework de Bootstrap en tu proyecto, agrega el siguiente enlace en el archivo `index.html`:

   ```html
   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

2. **Bootstrap JS**:
    Para agregar los scripts de Bootstrap, incluye este script en el archivo `index.html` antes del cierre de la etiqueta `</body>`:

   ```html
   <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

3. **Bootstrap Icons**:
    Para usar los íconos de Bootstrap, agrega este enlace en el archivo `index.html`:

   ```html
   <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">

Recuerda que estos enlaces deben ser agregados dentro de la etiqueta `<head>` en el archivo `index.html` para que se apliquen correctamente en la aplicación.

---

## Requisitos

- Node.js versión 22 o superior.
- Angular CLI versión 19.
- npm o yarn para la gestión de dependencias.

---

## Instalación y Configuración

### Instalación de Dependencias

Para comenzar con el proyecto, primero debes clonar este repositorio y luego instalar las dependencias necesarias:

1. Clona el repositorio:
   ```bash
   git clone <repositorio_url>
   cd <nombre_del_proyecto>
2. Instala las dependencias:
   ```bash
   npm install
---

## Configuración

Si necesitas personalizar algunas configuraciones como las variables de entorno, edita los archivos correspondientes:

- **environment.ts**: Configuración de entornos (desarrollo).
- **environment.prod.ts**: Configuración de entornos (producción).

---

## Ejecutar el proyecto

1. Para ejecutar la aplicación en modo desarrollo, usa el siguiente comando:
    ```bash
    ng serve -o
  Esto abrirá automáticamente una pestaña del navegador en la ruta `http://localhost:4200`.

2. Para abrir la aplicación en un puerto específico, ejecuta:
    ```bash
    ng serve --port 4201
  Cuando ejecutas el comando, el servidor de Angular se levantará y podrás acceder a tu aplicación en `http://localhost:4201`.
  
---

## Compilar el proyecto

- Para compilar el proyecto en modo producción, ejecuta:
  ```bash
  npm run build -- --configuration production
Los archivos optimizados se generarán en la carpeta `dist/`.
