---
title: "Desplegando sitio basado en Astro + theme Starlight"
date: 2025-07-22T10:00:00-03:00
description: "Creación de mi sitio Astro basado en el theme Starlight."
# es un tema de documentación creado sobre el framework Astro que proporciona un conjunto de características diseñadas específicamente para la creación de documentación técnica.
tags:
    - "ssg"
    - "site-static-generator"
    - "generadores-de-sitio-estático"
    - "astro"
categories:
    - "ssg"
    - "documentación"
    - "linux-cli"
image: "/images/starlight-header.png"
---

Este artículo es la creación del sitio construido con Astro basado en el theme Starlight.<!-- more -->

## Objetivo

En la siguiente captura ([ver imagen](#astro-welcome-img)) se muestra la pantalla de bienvenida inicial con el sitio que creamos e instalamos aquí.

{{< figure-id id="astro-welcome-img" src="/images/astro-starlight-welcome.first.png" alt="Pantalla de bienvenida de Astro y Starlight" caption="Fig. 1: Pantalla de bienvenida del sitio de desarrollo con Astro." >}}

## Referencias principales consultadas

- [Sitio principal del theme](https://starlight.astro.build/es/getting-started/)

## Especificación inicial/supuestos cumplidos

- Desktop o CLI de desarrollo/trabajo: Distribución Linux basada en Kernel `6.8.0-63-generic` y/o superior.
- Git (opcional, pero muy recomendable)
- nodejs (npm; npx...)
- Visual Studio Code (opcional)

### Verificación dependencias instaladas (CLI Linux)

```bash
dzamo@victus:~/2_Areas$ uname -s -r
Linux 6.8.0-63-generic
dzamo@victus:~/2_Areas$ git -v; node -v; npm -v; npx -v
git version 2.43.0
v22.17.0
11.4.2
11.4.2
dzamo@victus:~/2_Areas$ 
```

## Creación/instalación del sitio

```bash
npm create astro@latest -- --template starlight dzamo.gitlab.io
```

En la captura siguiente se muestra la sesión de trabajo para crear el sitio, con esto ya queda nuestro sitio listo para ser usado en nuestro host actual.

![Crear sitio > Astro+Starlight ](/images/astro-create-site-w-starlight.png)

## Primera ejecución del sitio

```bash
dzamo@victus:~/2_Areas$ cd dzamo.gitlab.io
dzamo@victus:~/2_Areas/dzamo.gitlab.io$ npm run dev
```

Con la sesión anterior, se ha lanzado el sitio en desarrollo. En la captura ([ver imagen](#astro-welcome-img)) se muestra el sitio inicial ya disponible y basado en el theme que acabamos de instalar.
