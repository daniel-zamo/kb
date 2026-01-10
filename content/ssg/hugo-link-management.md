---
title: "Hugo: Gestión de Enlaces"
date: 2026-01-10
description: "Implementación de enlaces robustos mediante shortcodes nativos y componentes de Relearn."
categories: ["SSG"]
tags: ["Hugo", "Markdown", "Shortcodes", "Web-Dev"]
icon: "fa-link"
---

En un entorno de documentación profesional, los enlaces "hardcoded" son un riesgo. Hugo permite gestionar referencias internas de forma dinámica para evitar enlaces rotos tras refactorizar carpetas.

## 1. Enlaces Internos (Relref)

Para enlazar notas dentro del mismo sitio, lo ideal es usar `relref`. Hugo buscará el archivo automáticamente sin importar su ruta absoluta.

```markdown
# Enlace a un archivo en cualquier parte del content/

[Ir al generador]({{% relref "tech-note-generator.md" %}})

# Enlace a un encabezado específico (ancla)

[Ver reglas]({{% relref "tech-note-generator.md#reglas-de-oro" %}})

```

---

## 2. Componentes Visuales (Buttons)

El tema Relearn permite elevar la UI mediante botones. Son ideales para llamadas a la acción (CTAs) o repositorios.

```markdown

# Botón simple con icono de FontAwesome

{{% button href="https://github.com/daniel-zamo" icon="fa-github" %}}GitHub{{% /button %}}

# Botón estilizado para navegación interna

{{% button href="/productivity/obsidian-interview-templater/" %}}Ver Template{{% /button %}}

```

---

## 3. Comparativa de Métodos

| Método | Uso Ideal | Ventaja |
| :--- | :--- | :--- |
| **Relref** | Notas internas | Indestructible si mueves archivos. |
| **Markdown** | Enlaces externos | Estándar y rápido. |
| **Button** | CTAs / Descargas | Alta visibilidad (UX). |

---

## 4. Referencias Externas

Para sitios fuera de nuestro dominio, seguimos el estándar de Markdown:

`[Nombre](https://url-externa.com)`

{{% notice tip %}}

Usa siempre `relref` en lugar de rutas relativas manuales (como `../archivo.md`). Esto permite que el sitio siga funcionando aunque decidas cambiar la estructura de carpetas de tu Wiki.

{{% /notice %}}

---

## ¿Por qué esta nota aporta valor a mi perfil?

Demuestra que aplico **mantenibilidad y escalabilidad** incluso en el contenido. Es importante que un DevOps se preocupe por la "integridad referencial" de la documentación, tratando el contenido como si fuera código que requiere pruebas y estabilidad.
