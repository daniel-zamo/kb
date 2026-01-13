---
title: Gestión de Enlaces en Hugo
date: 2026-01-13
description: Guía sobre la gestión de integridad referencial en Hugo usando relref vs enlaces externos.
tags:
  - Hugo
  - Mantenibilidad
  - DevOps
---

# Gestión de Links e Integridad Referencial

Para mantener la robustez de la documentación, es fundamental diferenciar entre enlaces externos e internos.

## Enlaces Externos

Para sitios fuera de nuestro dominio, seguimos el estándar de Markdown:
`[Nombre](https://url-externa.com)`

!!! tip "Integridad en Hugo"
    En el ecosistema Hugo, usa siempre el shortcode `relref` en lugar de rutas relativas manuales (como `../archivo.md`).

    **Ejemplo:** `[Texto]({{< relref "nota.md" >}})`
    
    Esto permite que el sitio siga funcionando de forma íntegra aunque decidas cambiar la estructura de carpetas de tu Wiki.

---

## 📈 Valor para el perfil profesional

Esta práctica demuestra la aplicación de **mantenibilidad y escalabilidad** incluso en el contenido. Como DevOps, la "integridad referencial" de la documentación es tan crítica como la del código; tratar el contenido como *as-code* requiere pruebas, estabilidad y referencias que no se rompan ante cambios estructurales.
