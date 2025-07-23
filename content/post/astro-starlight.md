---
title: "Astro + theme Starlight"
date: 2025-07-22T10:00:00-03:00
description: "Starlight es un tema de documentación creado sobre el framework Astro que proporciona un conjunto de características diseñadas específicamente para la creación de documentación técnica."
tags:
    - "ssg"
    - "site-static-generator"
    - "generadores-de-sitio-estático"
    - "astro"
categories:
    - "ssg"
    - "documentación"
image: "https://pub-693f7baf8984450ca2a6a42eec72bd69.r2.dev/hugovsastro.webp"
---

Este artículo es la instalación inicial del sitio construido con Astro utilizando el theme Starlight.<!-- more -->




, que el autor intentará utilizar para migrar sus notas generadas con Hugo y/o Jekyll a un nuevo sitio

Astro es un framework web para construir sitios web orientados al contenido, como blogs, documentación y sitios de marketing, que se destaca por su rendimiento y experiencia de desarrollador. Starlight es un tema de documentación creado sobre Astro que proporciona un conjunto de características diseñadas específicamente para la creación de documentación técnica, como navegación preconstruida, soporte para tabla de contenido, integración de búsqueda y personalización

## Referencias principales consultadas

- [](https://starlight.astro.build/es/getting-started/)

## Comenzando

> Este caso de uso instala [SyncThingy](https://github.com/zocker-160/SyncThingy) como aplicacion Flatpak.
>
> Como este sistema (basado en un Debian 12 con Desktop Linux [Cinnamon](https://github.com/linuxmint/cinnamon)) tenía disponible Flatpak, es que se eligio [la versión de zocker-160/SyncThingy](https://github.com/zocker-160/SyncThingy).
>

## ¿Qué es Syncthing?

[SyncThing](https://syncthing.net/) es una aplicación opensource que realiza sincronización continua de archivos entre diferentes sistemas (y/o multiples dispositivos). Opera en una arquitectura peer-to-peer sin necesidad de un servidor central.

## Supuestos cumplidos

- Sistema operativo basado en Debian 12 (superior y/o derivado).
- Paquetería Flatpak disponible/soportada.

## Instalación de la aplicación basada en Flatpak

Para instalar la aplicación basada en paquetería Flatpak, desde el CLI ejecutar:

```bash
>$ flatpak --user install com.github.zocker_160.SyncThingy
```

![Instalación de SyncThingy, como paquete de Flatpak](/images/flatpak-syncthingy-install.png)

## Configuración inicial

### Ejecución sobre Desktop Linux

En la captura se muestra como ejecutar la aplicación, en un Desktop Linux

![Ejecución de Syncthingy desde Desktop Linux](/images/syncthingy-running.png)

Si la aplicación ha sido correctamente instalada, quedará ejecutandose (como proceso en backgroud, a _nombre_ del usuario actual). En la barra de estado de las aplicaciones misma estará disponible. Esto se muestra en la captura siguiente.

![Syncthingy > icono en barra de tareas](/images/syncthingy-task-icon.png)

### Configuración de la Web UI

- Open Web UI

![syncthingy > Open WebUI](/images/syncthingy-open-webui.png)

- Configuración inicial del acceso a la Web UI

![yncthingy > Open WebUI](/images/syncthingy-web-ui-setting.png)
