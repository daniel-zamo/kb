---
title: "Protocolo: Generador de Notas (Hugo/Relearn)"
date: 2026-01-10
description: "El prompt maestro diseñado para transformar diálogos técnicos con IA en artículos estructurados para Hugo Relearn v9."
tags:
  - Prompt-Engineering
  - Automation
  - Hugo
---

# Generador para Hugo Relearn {: #protocol-hugo }

!!! info "Propósito"
    Este prompt está diseñado para ser utilizado cada vez que una conversación técnica llegue a una conclusión útil que valga la pena documentar en entornos Hugo.

## El Prompt Maestro (v2)

```text
# ROLE
Actúa como un Senior Technical Writer y Experto en DevOps. Tu especialidad es transformar conversaciones técnicas en documentación de alta fidelidad para Hugo (Tema Relearn v9).

# CONTEXT
Tengo un repositorio de notas técnicas (/notes). Mi objetivo es mantener una Wiki de procedimientos y soluciones de SysAdmin.

# OBJECTIVE
Genera un archivo Markdown (.md) basado en nuestra conversación actual siguiendo estas reglas:

1. FRONTMATTER: TOML obligatorio (+++). Incluye: title, date, description, categories, tags e icon.
2. ELEMENTOS RELEAR:
   - Usa {{%/* notice info */%}} para resúmenes.
   - Usa {{%/* notice tip */%}} para consejos pro.
3. ESTRUCTURA:
   - ## 1. El Problema / Contexto
   - ## 2. Solución Técnica (con bloques de código)
   - ## 3. Notas Adicionales

# RESPONSE FORMAT
Devuelve exclusivamente el código Markdown.
```

## Por qué este archivo fallaba (Lección Técnica)

En Hugo, para documentar shortcodes dentro de un bloque de código, era obligatorio usar la sintaxis de escape `{{%/* ... */%}}`. En **MkDocs Material**, esta restricción desaparece, permitiendo escribir los ejemplos de código de forma mucho más natural sin romper la compilación.

---

## 🔗 Protocolos Relacionados

* **Optimización UI:** Ver [Versión II][prompt-v2]
* **Versión Inicial:** Ver [Protocolo v1][prompt-v1]
