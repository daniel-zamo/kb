---
title: "Configuración VS Code: Soporte para .pages (YAML)"
date: 2026-01-13
description: "Cómo forzar a VS Code a reconocer archivos .pages como sintaxis YAML para el plugin Awesome Pages de MkDocs."
tags:
  - VSCode
  - Productivity
  - MkDocs
  - YAML
---

# Configuración de Archivos .pages en VS Code

Cuando trabajamos con el plugin **mkdocs-awesome-pages-plugin**, utilizamos archivos ocultos llamados `.pages` para gestionar el orden y los títulos del menú. Por defecto, VS Code no reconoce esta extensión y la trata como texto plano (`txt`), lo que rompe el resaltado y el auto-formateo.

## Problema

El editor no reconoce la sintaxis YAML en archivos sin extensión estándar, lo que provoca:

1. Falta de resaltado de sintaxis.
2. Errores de indentación al guardar.
3. El formateador automático puede intentar "corregir" el archivo como si fuera texto plano.

## Solución: Asociación de archivos

Para solucionar esto de forma local en este repositorio, editamos la configuración del espacio de trabajo.

### Paso 1: Crear configuración de Workspace

Si no existe, crea el archivo en la raíz del proyecto:
`.vscode/settings.json`

### Paso 2: Definir la asociación

Añade la regla `files.associations` para vincular `.pages` con el lenguaje `yaml`:

```json
{
  "files.associations": {
    ".pages": "yaml"
  }
}
```

!!! success "Resultado"
    A partir de este momento, todos los archivos `.pages` dentro del proyecto mostrarán los colores de sintaxis de YAML y respetarán las reglas de indentación necesarias para que MkDocs los procese correctamente.

## Ejemplo de contenido correcto en `.pages`

Una vez configurado, el archivo debería verse así:

```yaml
title: Mi Sección Personalizada
nav:
  - index.md
  - guia-rapida.md
  - ...
```
