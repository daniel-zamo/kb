---
title: "Implementación de mkdocs-autorefs"
date: 2026-01-13
description: "Guía técnica para activar referencias cruzadas inteligentes en MkDocs y evitar links rotos al mover archivos."
tags:
  - MkDocs
  - Tutorial
  - Plugins
---

# Configuración de Enlaces Inteligentes (Autorefs) {: #guia-autorefs }

Para solucionar la fragilidad de los enlaces relativos en MkDocs, utilizamos el plugin `mkdocs-autorefs`. Esto nos permite referenciar artículos por su nombre o por un ID único, similar al funcionamiento de Hugo.

## 🛠️ Instalación y Configuración

1. **Instalar el componente:**

   ```bash
   pip install mkdocs-autorefs
   ```

2. **Activar en `mkdocs.yml`:**
   Debes añadirlo a la sección de plugins. Es compatible con `awesome-pages`.

   ```yaml
   plugins:
     - search
     - awesome-pages
     - autorefs
   ```

## 📖 Modos de Uso

### A. Referencia por Título (H1)

Si el plugin está activo, puedes linkear cualquier nota usando su título de primer nivel entre corchetes.

* **Sintaxis:** `[Ir a la comparativa][Gestión de Enlaces: Hugo vs. MkDocs]`

### B. Referencia por ID Único (Recomendado)

Esta es la forma más robusta. Asignamos un ancla al título de la nota de destino.

1. **En la nota de destino:**

   ```markdown
   # Mi Título Super Largo {: #mi-id-corto }
   ```

2. **Desde cualquier otra nota:**

   ```markdown
   Para más info, ver la [guía rápida][mi-id-corto].
   ```

## 🚨 Validación Estricta

Para asegurar que no existan errores de referencia, ejecutamos el build en modo estricto. Si un link no se encuentra, el proceso fallará en lugar de publicar un sitio roto.

```bash
mkdocs build --strict
```

## Beneficios de este flujo

* **Mantenibilidad:** Puedes reorganizar tus carpetas (`linux`, `ssg`, `win`) sin editar los enlaces internos.
* **Limpieza:** Evitas el uso de rutas complejas tipo `../../../seccion/archivo.md`.
* **Compatibilidad:** Sigue siendo Markdown estándar que herramientas como Obsidian pueden interpretar.
