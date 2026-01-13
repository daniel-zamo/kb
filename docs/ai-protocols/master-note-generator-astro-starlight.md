---
title: "Protocolo: Artículos de Portfolio (Astro/Starlight)"
date: 2026-01-10
description: "Prompt maestro avanzado para generar Casos de Éxito en MDX, integrando diagramas Mermaid, componentes Starlight y botones de acción."
tags:
  - Astro
  - Starlight
  - Portfolio
---

# Generador de Casos de Éxito (Astro) {: #protocol-astro }

!!! tip "Consejo de uso"
    Este protocolo está diseñado para transformar el conocimiento técnico de una "Nota" en un **Activo de Carrera**. Prioriza la visualización de arquitectura mediante Mermaid y la interacción mediante LinkButtons.

## El Prompt Maestro para Astro (v2 - High Impact)

Utiliza este prompt para generar los artículos de tu sitio principal (`daniel-zamo.github.io`):

```text
# ROLE
Actúa como un Senior Platform Engineer y Experto en Developer Advocacy. Tu objetivo es transformar una conversación técnica o una nota de ingeniería en un "Project Case Study" visual y estratégico para mi portfolio en Astro Starlight.

# CONTEXT
El lector objetivo es un Engineering Manager o Tech Lead.

# OBJECTIVE
Genera un archivo .mdx siguiendo estas especificaciones:

1. FRONTMATTER (YAML): title, description, sidebar.
2. IMPORTS: import { Steps, Aside, Badge, LinkButton } from '@astrojs/starlight/components';
3. ESTRUCTURA:
   - ## 📋 Resumen Ejecutivo: Usar <Aside type="note">.
   - ## 🏗️ Arquitectura: Diagrama Mermaid + Badges técnicos.
   - ## 💻 Implementación: Usar componente <Steps>.
   - ## 📚 Recursos: Usar <LinkButton href="URL">.

# INPUT DATA
[PEGAR AQUÍ LA NOTA TÉCNICA]

# RESPONSE FORMAT
Devuelve exclusivamente el código MDX.
```

---

## 🔗 Diferencias Estratégicas

| Elemento | En Notas (KB) | En Portfolio (Astro) |
| :--- | :--- | :--- |
| **Arquitectura** | Texto / Tablas | **Diagramas Mermaid** |
| **Navegación** | Enlaces Markdown | **LinkButtons (CTAs)** |
| **Proceso** | Listas simples | **Componente Steps** |
| **Foco** | "Cómo se hace" | **"Qué valor aporta"** |

---

## 🛠 Guía de Uso del Protocolo

Para que el resultado sea óptimo, cuando pegues el contenido en la IA, puedes añadir una instrucción extra: *"Añade un LinkButton que apunte a mi repositorio de IaC"*. Esto hará que la IA genere el botón con el estilo visual correcto de Starlight.
