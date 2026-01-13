---
title: Fix Relearn v8 - Iconos y Shortcodes
date: 2026-01-13
description: Corrección de sintaxis para iconos de FontAwesome y escapado de shortcodes en el theme Relearn v8.
tags:
  - Hugo
  - Troubleshooting
  - Relearn
---

# Correcciones para Hugo Relearn v8

Durante la migración o actualización a la v8 del theme Relearn, se deben ajustar ciertos parámetros de sintaxis para mantener la compatibilidad visual.

### Paso A: Iconos FontAwesome

A diferencia de versiones anteriores, la definición del icono en el Front Matter debe incluir el prefijo completo de la familia:

* **Correcto:** `featured = "fa-solid fa-robot"`

### Paso B: Escapado de Shortcodes

Para documentar shortcodes en tus artículos sin que el parser de Hugo los ejecute, se utiliza el espacio de seguridad o el delimitador de comentario:

* `{{/* % children % */}}`

---

## 🏗️ Configuración de Secciones

Para generar un catálogo visual completo en el archivo `_index.md` de Hugo, se utiliza el componente de navegación automática:

```markdown
{{< children type="card" description="true" >}}
```
