# README.md

## Puesta en Marcha y Solución de Problemas - Sitio con Hugo Blox

Este documento detalla los pasos para configurar y levantar el entorno de desarrollo local para este sitio web, basado en Hugo y el framework Hugo Blox (anteriormente Wowchemy).

El proceso de configuración inicial presentó algunos desafíos específicos, principalmente relacionados con la gestión de dependencias (npm) y la compatibilidad de versiones entre Hugo y el theme. Este README sirve como guía y recordatorio de las soluciones aplicadas.

### Supuestos cumplidos

- Sistema operativo: Desktop Debian 12, Linux Mint 22 o superior
- Hugo, node, npm, npx:

  ```bash
  dzamo@victus:~/2_Areas/daniel-zamo.github.io$ hugo version
  hugo v0.129.0-e85be29867d71e09ce48d293ad9d1f715bc09bb9+extended linux/amd64 BuildDate=2024-07-17T13:29:16Z VendorInfo=gohugoio
  dzamo@victus:~/2_Areas/daniel-zamo.github.io$ vim README.md
  dzamo@victus:~/2_Areas/daniel-zamo.github.io$ node -v
  v22.17.0
  dzamo@victus:~/2_Areas/daniel-zamo.github.io$ npm -v
  10.9.2
  dzamo@victus:~/2_Areas/daniel-zamo.github.io$ npx -v
  10.9.2
  ```

---

## 1. Prerrequisitos

Asegúrate de tener instalado el siguiente software:

- **Git:** Para clonar y gestionar el repositorio.
- **Node.js y npm:** Para gestionar las dependencias de JavaScript y CSS. Puedes verificar con `node -v` y `npm -v`.
- **Hugo (Versión Extendida):** La versión **extendida** es obligatoria.
  - **¡IMPORTANTE!** La compatibilidad de versiones entre Hugo y el theme es CRÍTICA. Tras varias pruebas, la configuración funcional y estable se logró utilizando **Hugo `v0.129.0-extended`**. Versiones muy recientes (ej. `v0.147.x`) pueden causar errores de plantilla (`GetTerms is not a method...`).

---

## 2. Guía de Instalación Paso a Paso

Sigue estos pasos desde tu terminal.

### Paso 1: Clonar el Repositorio

```bash
# Clona tu repositorio (usa la URL SSH o HTTPS según tu configuración)
git clone git@github.com:daniel-zamo/daniel-zamo.github.io.git
cd daniel-zamo.github.io
```

### Paso 2: Instalar Dependencias de Node.js

Esta fue la primera fuente de problemas.

- Problema A: El comando npm install fallaba inicialmente porque el archivo package.json no existía en el repositorio clonado.
- Problema B: Una vez recuperado package.json, npm install lanzaba un error ERESOLVE debido a un conflicto de versiones con la dependencia prettier.

_Solución Aplicada:_

Se forzó la instalación utilizando la bandera `--legacy-peer-deps`, que instruye a npm para que ignore este tipo de conflictos de dependencias entre paquetes.
      
# Solución al conflicto de dependencias

```bash
npm install --legacy-peer-deps
```

### Paso 3: Sincronizar Módulos de Hugo

Hugo utiliza su propio sistema de módulos (Go Modules) para gestionar el theme y sus componentes.

```bash      
# Sincroniza y descarga los módulos definidos en go.mod
hugo mod tidy
```
    
### Paso 4: Levantar el Servidor de Desarrollo

Con las dependencias de npm y Hugo ya instaladas y sincronizadas, y usando la versión correcta de Hugo (v0.129.0), el servidor debería iniciar correctamente.
Generated bash

```bash
hugo server
```
 
