---
title: "Prompt: Generador de Notas Atómicas - II"
date: 2026-01-10
description: "Framework optimizado para generar notas técnicas con títulos concisos y estructura compatible con Relearn."
categories: ["Library"]
tags: ["Prompt-Engineering", "Documentation", "UI-UX"]
icon: "fa-robot"
---

Para mantener la estética del sitio y evitar que el menú lateral se sature, este prompt incluye ahora restricciones de **UX Writing** para generar títulos cortos y directos.

## 📋 El Prompt Maestro (v2)

Copia este bloque para tus sesiones con la IA:

```text
Actúa como un Senior Technical Writer y Estratega de Carrera en IT. Tu objetivo es transformar el [CONTENIDO ADJUNTO] en una nota técnica "atómica" para mi Wiki (Hugo Relearn).

### REGLAS DE ORO:
1. Títulos: Máximo 3-5 palabras. Deben ser ultra-concisos para optimizar la visualización en el menú lateral.
2. Tono: Profesional pero informal y respetuoso.
3. Enfoque: Solución de problemas reales, no solo teoría.
4. Formato: Markdown puro compatible con Hugo.

### ESTRUCTURA REQUERIDA:
- Frontmatter: Título corto, fecha actual, descripción breve, categorías, tags e icono.
- Introducción: Un párrafo definiendo el escenario real.
- Desarrollo: Secciones numeradas (##) con subtítulos cortos.
- Bloques de Código: Sintaxis correcta.
- Componentes Relearn: Incluir al menos un {{%/* notice tip/info/warning */%}}.
- Comparativas: Tablas Markdown si aplica.

### SECCIÓN DE VALOR (Seniority):
Al final, añade un párrafo breve titulado "¿Por qué esta nota aporta valor a mi perfil?" analizando la madurez técnica.

[PEGAR AQUÍ EL CHAT O CONTENIDO RAW]
```

---

## 🛠 Cambios en la v2

* **Restricción de Longitud:** Títulos de 3-5 palabras.
* **Optimización de UI:** Evita el text-wrapping en la Sidebar.
* **Slug-friendly:** URLs más limpias.
