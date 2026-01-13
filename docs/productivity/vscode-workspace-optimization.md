---
title: "Optimización de VS Code: Settings de Espacio de Trabajo"
date: 2026-01-13
description: "Configuración avanzada de .vscode/settings.json para mejorar la experiencia de escritura y edición en proyectos de documentación."
tags:
  - VSCode
  - Productivity
  - Markdown
  - JSON
---

# Optimización del Workspace en VS Code

Cuando trabajamos en proyectos de documentación técnica como esta Knowledge Base, es fundamental que el editor se comporte de forma predecible. En lugar de cambiar la configuración global de VS Code, utilizamos el archivo `.vscode/settings.json` para aplicar reglas específicas a este repositorio.

## Configuración de Visualización (Word Wrap)

Para evitar el desplazamiento horizontal infinito al escribir párrafos largos en Markdown, activamos el ajuste de línea automático (*Word Wrap*).

Añade esto a tu `.vscode/settings.json`:

```json
{
    "editor.wordWrap": "on",
    "editor.wordWrapColumn": 80,
    "editor.wrappingIndent": "indent"
}
```

## Ajustes de Productividad Recomendados

Además del ajuste de línea, estas opciones mejoran significativamente el flujo de trabajo con archivos Markdown y YAML:

1. **Eliminar espacios al final**: Evita commits "sucios" con espacios invisibles.
2. **Renderizado de espacios**: Ayuda a visualizar la indentación (crítico en YAML).
3. **Auto-guardado**: Opcional, pero útil para ver cambios en tiempo real con `mkdocs serve`.

```json
{
    "files.trimTrailingWhitespace": true,
    "editor.renderWhitespace": "boundary",
    "files.autoSave": "onFocusChange"
}
```

## Integración con otras configuraciones

Es vital recordar que este archivo también gestiona cómo el editor interpreta archivos especiales del sistema de navegación.

!!! info "Nota Relacionada"
    Si tienes problemas con el resaltado de los archivos de menú de MkDocs, consulta nuestra guía sobre [Asociación de archivos .pages como YAML](vscode-pages-yaml.md).

## Resumen del archivo `.vscode/settings.json` completo

Así debería lucir tu archivo de configuración local para una experiencia óptima:

```json
{
    "files.associations": {
        ".pages": "yaml"
    },
    "editor.wordWrap": "on",
    "files.trimTrailingWhitespace": true,
    "editor.renderWhitespace": "boundary",
    "[markdown]": {
        "editor.quickSuggestions": {
            "other": true,
            "comments": false,
            "strings": true
        }
    }
}
```

!!! tip "Obsidian Sync"
    Si abres esta carpeta como una bóveda de Obsidian, estas configuraciones no interferirán con Obsidian, ya que el editor de Markdown de Obsidian ignora la carpeta `.vscode`.
