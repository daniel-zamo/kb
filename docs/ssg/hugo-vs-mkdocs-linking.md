---
title: "Enlaces Internos: Filosofía Hugo vs. MkDocs"
date: 2026-01-13
description: "Análisis de cómo gestionan las referencias cruzadas los dos SSG más populares y por qué MkDocs requiere una configuración extra."
tags:
  - Hugo
  - MkDocs
  - SSG
  - Arquitectura
---

# Gestión de Enlaces: La "Inteligencia" del Contenido

Una de las mayores diferencias al migrar de **Hugo** a **MkDocs** es cómo el sistema entiende la ubicación de los archivos. Esta nota documenta por qué un sistema es "automático" y el otro "basado en archivos".

## 1. Hugo: El modelo "Content-Aware"

Hugo funciona con una base de datos interna. Cuando usas el shortcode `ref`, Hugo no busca una ruta de carpeta, busca un **objeto de contenido**.

* **Sintaxis:** `{{< ref "mi-nota.md" >}}`
* **Comportamiento:** Si mueves `mi-nota.md` de `/linux` a `/backup/old`, Hugo actualiza el link en tiempo de compilación. El sistema "sabe" dónde está el archivo sin importar su posición física.

## 2. MkDocs: El modelo "Filesystem-based"

Por defecto, MkDocs es purista del Markdown estándar. Los enlaces son rutas relativas del sistema de archivos (como en Linux).

* **Sintaxis:** `[Link](../linux/mi-nota.md)`
* **Comportamiento:** Es frágil. Si mueves el archivo, el enlace se rompe (`404`). El sistema no busca el archivo, simplemente intenta seguir la ruta que escribiste.

## Comparativa de robustez

| Característica | Hugo (Nativo) | MkDocs (Nativo) | MkDocs (+ Autorefs) |
| :--- | :--- | :--- | :--- |
| **Tipo de enlace** | Global / Lógico | Relativo / Físico | **Híbrido / Lógico** |
| **Resistencia a cambios** | Alta | Nula | **Alta** |
| **Portabilidad MD** | Baja (usa shortcodes) | Alta (MD puro) | **Alta (MD + IDs)** |

## Conclusión

Para que nuestra Knowledge Base en MkDocs sea mantenible a largo plazo, necesitamos emular la "inteligencia" de Hugo mediante el plugin `autorefs`, permitiendo que las notas se muevan sin romper la navegación.

---
!!! observation "Nota de Migración"
    Esta diferencia es la razón por la cual, durante la migración del `content/` original, debemos prestar especial atención a no romper las rutas relativas o, mejor aún, implementar [Identificadores Únicos][guia-autorefs].
