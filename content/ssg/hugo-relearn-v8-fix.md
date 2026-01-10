---
title: "Hugo Relearn v8: Fix a Shortcodes y Atributos"
date: 2026-01-10
description: "Resolución de errores de renderizado de atributos Markdown y activación de iconos en cards mediante el parámetro 'featured'."
categories: ["SSG"]
tags: ["Hugo", "Troubleshooting", "Markdown"]
icon: "fa-solid fa-tools"
featured: "fa-tools"
---

Tras la migración a **Hugo Relearn v8**, se identificaron problemas de renderizado en los listados automáticos (`children`).

## 1. El Problema: Atributos e Iconos en Cards

### Síntoma A: Texto Plano

Visualización de: `[Título](URL) {class="children-link"}` debido a que Goldmark no procesaba atributos de bloque.

### Síntoma B: Iconos Invisibles en Cards

A pesar de definir `icon` y usar `showicon="true"`, las tarjetas se mostraban vacías. Esto se debe a que el tipo `card` prioriza el "Featured Media".

---

## 2. La Solución Técnica

### Paso A: Configuración de Goldmark (hugo.toml)

Es crítico habilitar los atributos en el motor de renderizado:

```toml
[markup.goldmark.parser.attribute]
  block = true
  title = true
```

### Paso B: Uso del parámetro 'featured' para Iconos

Para que un icono aparezca en el cuerpo de una **card**, debe definirse en el frontmatter bajo el parámetro `featured`, usando la clase completa de FontAwesome:

- **Correcto:** `featured = "fa-solid fa-robot"`

### Paso C: Escapado de Shortcodes

Para documentar shortcodes sin ejecutar el parser de Hugo, se utiliza el espacio de seguridad:

- `{{ % children % }}`

---

## 3. Configuración Final de Secciones

Para un catálogo visual completo en `_index.md`:

{{ % children type="card" description="true" % }}
