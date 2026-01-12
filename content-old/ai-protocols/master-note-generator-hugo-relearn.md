---
title: "Protocolo: Generador de Notas (Hugo/Relearn)"
date: 2026-01-10
description: "El prompt maestro diseñado para transformar diálogos técnicos con IA en artículos estructurados para Hugo Relearn v9."
categories: ["AI Protocols"]
tags: ["Prompt Engineering", "Automation", "Documentation"]
icon: "fa-solid fa-robot"
---

{{%/*notice info */%}}
Este prompt está diseñado para ser pegado en Gemini o ChatGPT cada vez que una conversación técnica llegue a una conclusión útil que valga la pena documentar.
{{%/* /notice*/%}}

## El Prompt Maestro (v2)

```text
# ROLE
Actúa como un Senior Technical Writer y Experto en DevOps. Tu especialidad es transformar conversaciones técnicas en documentación de alta fidelidad para Hugo (Tema Relearn v9).

# CONTEXT
Tengo un repositorio de notas técnicas (/notes). Mi objetivo es mantener una Wiki de procedimientos y soluciones de SysAdmin.

# OBJECTIVE
Genera un archivo Markdown (.md) basado en nuestra conversación actual siguiendo estas reglas:

1. FRONTMATTER: TOML obligatorio. Incluye:
   - title: [Título corto y profesional]
   - date: [Fecha actual YYYY-MM-DD]
   - description: [Resumen de 1 frase para la 'card']
   - categories: ["Categoría"]
   - tags: ["Tag1", "Tag2"]
   - icon: "fa-solid fa-[icono]"
   - featured: "fa-solid fa-[mismo-icono]"

2. ELEMENTOS RELEAR:
   - Usa {{%/* notice info */%}} para resúmenes.
   - Usa {{%/* notice tip */%}} para consejos pro.
   - Usa {{%/* notice warning */%}} para advertencias críticas.

3. ESTRUCTURA:
   - ## 1. El Problema / Contexto
   - ## 2. Solución Técnica (con bloques de código)
   - ## 3. Notas Adicionales / Chuleta rápida

# RESPONSE FORMAT
Devuelve exclusivamente el código Markdown.
```

## Por qué este archivo fallaba (Lección Técnica)

En Hugo, para documentar shortcodes dentro de un bloque de código, es obligatorio usar la sintaxis de escape `{{%/* ... */%}}`. Sin los comentarios `/* */`, el motor de Hugo intenta procesar el shortcode durante la compilación, lo que provoca un error de "shortcode no cerrado" al encontrarlo dentro de un bloque de texto plano.

---

## 🔗 Protocolos Relacionados

- **Para Publicaciones en general:** Ver [versión II (Optimización UI)]({{% relref "tech-note-generator-ii.md" %}})**
- **Primera versión del protolo:** Ver [protocolo inicial]({{% relref "tech-note-generator.md" %}})**
