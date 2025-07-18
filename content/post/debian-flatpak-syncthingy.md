---
title: "SyncThingy como app. flatpak en Debian y/o derivado"
date: 2025-07-16T10:00:00-03:00
description: "Instalación de SyncThingy como aplicación de flatpak en Debian (y/o derivado, o Ubuntu)."
tags:
    - "linux"
    - "linux-cli"
    - "linux-desktop"
    - "ubuntu"
    - "debian"
categories:
    - "linux"
    - "flatpak"
image: "https://forum.syncthing.net/uploads/default/optimized/2X/2/2391f779a1efb96b8618a7d67aa41b0331f8e24d_2_690x431.png"
---

## Instalación de SyncThingy como aplicación Flatpak (en Debian y/o derivado)

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