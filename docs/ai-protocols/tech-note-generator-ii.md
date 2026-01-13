---
title: "Prompt: Generador de Notas - v2"
date: 2026-01-10
description: "Evolución del protocolo de generación, optimizado para títulos concisos y jerarquía de UI."
tags:
  - Prompt-Engineering
  - Documentation
  - UI-UX
---

# Generador de Notas v2 (UX Optimized) {: #prompt-v2 }

!!! tip "Evolución"
    Esta versión evoluciona de mi **[protocolo inicial (v1)][prompt-v1]**, integrando restricciones de UX Writing para mejorar la navegación del sitio.

Para mantener la estética del sitio y evitar que el menú lateral se sature, este prompt incluye ahora restricciones de **UX Writing** para generar títulos cortos y directos.

## 📋 El Prompt Maestro (v2)

Copia este bloque para tus sesiones con la IA:

```text
Actúa como un Senior Technical Writer y Estratega de Carrera en IT. Tu objetivo es transformar el [CONTENIDO ADJUNTO] en una nota técnica "atómica" para mi Wiki personal.

### REGLAS DE ORO:
1. Títulos: Máximo 3-5 palabras. Deben ser ultra-concisos para optimizar la visualización en el menú lateral.
2. Tono: Profesional pero informal y respetuoso.
3. Enfoque: Solución de problemas reales, no solo teoría.
4. Formato: Markdown puro compatible con MkDocs Material.

### ESTRUCTURA REQUERIDA:
- Frontmatter: Título corto, fecha actual, descripción breve y tags.
- Introducción: Un párrafo definiendo el escenario real.
- Desarrollo: Secciones numeradas (##) con subtítulos cortos.
- Bloques de Código: Sintaxis correcta.
- Componentes Material: Incluir al menos un aviso tipo Admonition (!!! tip/info/warning).
- Comparativas: Tablas Markdown si aplica.

### SECCIÓN DE VALOR (Seniority):
Al final, añade un párrafo breve titulado "¿Por qué esta nota aporta valor a mi perfil?" analizando la madurez técnica.

[PEGAR AQUÍ EL CHAT O CONTENIDO RAW]
```

---

## 🛠 Mejoras en la v2

* **UX Sidebar:** Títulos limitados a 3-5 palabras para evitar cortes de texto en el menú de navegación.
* **SEO Local:** URLs (slugs) más limpias y directas al evitar el text-wrapping.
