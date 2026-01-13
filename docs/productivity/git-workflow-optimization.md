---
title: "Optimización del flujo en Git"
date: 2026-01-13
description: "Técnicas para realizar commits multilínea y configuración de editores externos para Git."
tags:
  - Git
  - CLI
  - VSCode
---

# Optimización del Flujo en Git {: #git-workflow }

Para cumplir con los [estándares de commits][git-standards], es fundamental dominar la creación de mensajes multilínea.

## ⌨️ Commits Multilínea

### Opción A: Múltiples flags `-m` (Terminal)

Cada flag genera un párrafo nuevo. Es la forma más limpia para la CLI:

```bash
git commit -m "docs: migración de sección productividad" \
           -m "Se implementó el Section Index con Cards." \
           -m "Se actualizó .pages para navegación lateral."
```

### Opción B: Uso del Editor (Recomendado)

Si escribes simplemente `git commit` sin el flag `-m`, Git abrirá tu editor por defecto. Esto te permite escribir con total libertad y revisar el texto antes de guardar.

!!! tip "Tip Pro: VS Code como Editor de Git"
    Puedes configurar VS Code para que sea la interfaz donde escribes tus commits:
    ```bash
    git config --global core.editor "code --wait"
    ```
    Al hacer un commit, se abrirá una pestaña de VS Code. Escribe el mensaje, guarda y cierra la pestaña para finalizar el proceso.

## 🚀 Ejemplo de Commit Ideal

```text
docs: implementar landing page en sección productividad

- Se creó docs/productivity/index.md con sistema de Grid y Cards.
- Se configuró .pages para renombrar items en el menú lateral.
- Se añadió guía técnica sobre asociación de archivos .pages en VS Code.

Esto mejora la navegación visual y facilita el acceso a los settings
del workspace para futuros colaboradores.
```
