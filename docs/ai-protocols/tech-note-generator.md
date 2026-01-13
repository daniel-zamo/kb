---
title: "Prompt: Generador de Notas - v1"
date: 2026-01-10
description: "Protocolo inicial para transformar diálogos técnicos en artículos de alta calidad para Hugo Relearn."
tags:
  - Prompt-Engineering
  - Documentation
  - Automation
---

# Generador de Notas v1 (Original) {: #prompt-v1 }

!!! info "Nota de Versión"
    Este es el protocolo original. Se recomienda utilizar la **[Versión II (Optimización UX)][prompt-v2]** para obtener mejores resultados en el menú lateral.

Para mantener la calidad y el tono de mi base de conocimientos, utilizo el siguiente prompt maestro. Está diseñado para extraer la esencia técnica de cualquier conversación y formatearla para los estándares de mi sitio.

## 📋 El Prompt Maestro

Copia el bloque a continuación y pega tu contenido al final:

```text
Actúa como un Senior Technical Writer y Estratega de Carrera en IT. Tu objetivo es transformar el [CONTENIDO ADJUNTO] en una nota técnica de estilo "atómico" para mi Wiki personal (Hugo Relearn).

### REGLAS DE ORO:
1. Tono: Profesional pero informal y respetuoso (estilo "chuleta de ingeniero").
2. Enfoque: Solución de problemas reales, no solo teoría.
3. Formato: Markdown puro compatible con Hugo.

### ESTRUCTURA REQUERIDA:
- Frontmatter: Título claro, fecha actual, descripción breve, categorías, tags y un icono de FontAwesome acorde.
- Introducción: Un párrafo definiendo el problema o escenario "en el mundo real".
- Desarrollo: Dividir en secciones numeradas (##) con explicaciones breves.
- Bloques de Código: Usar sintaxis correcta (powershell, bash, yaml, etc.).
- Componentes Relearn: Incluir al menos un {{%/* notice tip/info/warning */%}} para resaltar puntos clave.
- Comparativas: Si hay varias opciones, usar una tabla Markdown para compararlas.

### SECCIÓN DE VALOR (Seniority):
Al final, añade una sección oculta o un párrafo breve titulado "¿Por qué esta nota aporta valor a mi perfil?" analizando cómo esta competencia específica demuestra madurez técnica ante un reclutador.

[PEGAR AQUÍ EL CHAT O CONTENIDO RAW]
```

---

## ⚙️ Flujo de Trabajo (Workflow)

1. **Captura:** Copia el texto raw de la fuente (logs de terminal, chat con IA, notas sueltas).
2. **Ejecución:** Pega el prompt maestro seguido de la captura en tu modelo de lenguaje preferido.
3. **Refinado:** Guarda el resultado como un archivo `.md` en tu estructura de directorios.

---
**Siguiente paso recomendado:** Revisar la [Implementación en Astro][protocol-astro].
