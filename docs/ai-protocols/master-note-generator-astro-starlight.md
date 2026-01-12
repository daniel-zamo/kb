---
title: "Protocolo: Artículos de Portfolio (Astro/Starlight)"
date: 2026-01-10
description: "Prompt maestro avanzado para generar Casos de Éxito en MDX, integrando diagramas Mermaid, componentes Starlight y botones de acción."
tags:
  - Astro
  - Starlight
  - MDX
  - Mermaid
  - Portfolio
---

!!! tip "Consejo de uso"
    Este protocolo está diseñado para transformar el conocimiento técnico de una "Nota" en un **Activo de Carrera**. Prioriza la visualización de arquitectura mediante Mermaid y la interacción mediante LinkButtons.

## El Prompt Maestro para Astro (v2 - High Impact)

Utiliza este prompt para generar los artículos de tu sitio principal (`daniel-zamo.github.io`):

```text
# ROLE
Actúa como un Senior Platform Engineer y Experto en Developer Advocacy. Tu objetivo es transformar una conversación técnica o una nota de ingeniería en un "Project Case Study" visual y estratégico para mi portfolio en Astro Starlight.

# CONTEXT
El lector objetivo es un Engineering Manager o Tech Lead. El contenido debe demostrar no solo que "sabes usar la herramienta", sino que sabes "diseñar soluciones y documentar estándares".

# OBJECTIVE
Genera un archivo .mdx siguiendo estas especificaciones:

1. FRONTMATTER (YAML):
   - title: [Título de impacto: Solución + Resultado]
   - description: [Resumen ejecutivo de 2 líneas]
   - sidebar: { label: "[Nombre corto]", order: [X] }

2. IMPORTS:
   import { Steps, Aside, Badge, LinkButton } from '@astrojs/starlight/components';

3. ESTRUCTURA Y COMPONENTES:
   - ## 📋 Resumen Ejecutivo: Usar <Aside type="note"> para explicar el valor de negocio/operativo.
   - ## 🏗️ Arquitectura: 
     - Generar un diagrama funcional usando sintaxis ```mermaid.
     - Listar el stack tecnológico usando <Badge text="Tech" variant="note" />.
   - ## 💻 Implementación: Detallar el proceso técnico usando el componente <Steps>.
   - ## 📚 Recursos y Documentación: 
     - Usar <LinkButton href="URL"> para enlazar al repositorio de GitHub o al SOP correspondiente.

4. TONO:
   Profesional, orientado a arquitectura y eficiencia.

# INPUT DATA
[PEGAR AQUÍ EL CHAT O LA NOTA TÉCNICA]

# RESPONSE FORMAT
Devuelve exclusivamente el código MDX.
```

---

## 🔗 Diferencias Estratégicas

| Elemento | En Notas (Hugo) | En Portfolio (Astro) |
| :--- | :--- | :--- |
| **Arquitectura** | Texto / Tablas | **Diagramas Mermaid** |
| **Navegación** | Enlaces Markdown | **LinkButtons (CTAs)** |
| **Proceso** | Listas simples | **Componente Steps** |
| **Foco** | "Cómo se hace" | **"Qué valor aporta"** |

---

## 🛠 Guía de Uso del Protocolo

Para que el resultado sea óptimo, cuando pegues el contenido en la IA, puedes añadir una instrucción extra: *"Añade un LinkButton que apunte a mi repositorio de IaC"*. Esto hará que la IA genere el botón con el estilo visual correcto de Starlight.
