---
title: "Estándares de Git: Conventional Commits"
date: 2026-01-13
description: "Guía sobre el estándar Conventional Commits para mantener un historial técnico profesional y legible."
tags:
  - Git
  - Standards
  - Productivity
---

# Estándares de Git: Conventional Commits {: #git-standards }

Manejar bien los mensajes de Git es lo que diferencia a un "usuario de Git" de un "profesional del desarrollo". Como esta **Knowledge Base (KB)** es el registro histórico de tu aprendizaje, la calidad de los mensajes es crítica.

## 📝 ¿Por qué estandarizar?

Un commit que solo dice *"cambios"* o *"actualización"* pierde su utilidad en 6 meses. Un commit detallado es una **herramienta de búsqueda**.

!!! info "Regla de Oro"
    El título dice **QUÉ** pasó. El cuerpo dice **POR QUÉ** pasó y **QUÉ CAMBIÓ** a grandes rasgos.

## 🏗️ La Estructura: Conventional Commits

Adoptamos el estándar utilizado en grandes proyectos (Linux, Kubernetes). La estructura es: `<tipo>: <descripción corta>`.

### Tipos comunes para esta KB

- **docs:** Cambios solo en la documentación (el más usado aquí).
- **feat:** Cuando añades una funcionalidad nueva al sitio (ej. un plugin).
- **fix:** Cuando corriges un error (ej. un link roto).
- **refactor:** Cambios en la estructura pero no en el contenido.
- **style:** Cambios estéticos (colores, fuentes) en `mkdocs.yml`.

## 📏 Guía de Estilo

1. **Título (Subject):** Máximo 50 caracteres, en imperativo (*"add"* en vez de *"added"*) y sin punto final.
2. **Cuerpo (Body):** Separado por una línea en blanco. Explica el "porqué" y usa listas con guiones para detalles.

---
**Siguiente paso:** Mira cómo implementar esto en tu [Flujo de Trabajo diario][git-workflow].
