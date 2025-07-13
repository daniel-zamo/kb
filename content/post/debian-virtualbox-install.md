---
title: "Guía de Instalación de VirtualBox en Debian 12"
date: 2023-07-10T10:00:00-03:00
description: "Aprende a instalar VirtualBox y su Extension Pack en Debian 12 y derivados paso a paso desde la línea de comandos."
tags:
    - "linux"
    - "virtualización"
    - "virtualbox"
    - "cursos"
    - "debian"
categories:
    - "course-3182"
    - "curso-3182"

# 'featured' o 'image' suelen ser los parámetros para la imagen destacada.
# Spark es muy simple, puede que no la use, pero es buena práctica tenerla.
image: "/images/virtualbox-install.jpg"
---

# Instalación de Virtualbox en Debian 12 (y/o derivado)


BETA

> En este caso de uso se instala VirtualBox sobre un Debian 12. El mismo procedimiento es identico de realizar en distribuciones superiores y/o derivadas de Debian (ejemplo Ubuntu, Linux Mint, Q4os).
>

## Revisión versión Linux instalado

![revisión linux instalado en el sistema](/images/virtualbox/selection_027.png)

## Instalación (configución mínima inicial) de VirtualBox

### Visitar página descarga de Virtualbox

![URL download Virtualbox](/images/virtualbox/selection_028.png)

### Descarga de Virtualbox (desde el CLI)

![wget virtualbox .deb](/images/virtualbox/selection_029.png)

### Instalación de Virtualbox (desde el CLI)

![instalar virtualbox (CLI >> dpkg)](/images/virtualbox/virtualbox-install.png)

### usermod vboxusers $USER

![$USER al grupo vboxusers](/images/virtualbox/selection_031.png)

## Instalación VirtualBox Extension Pack (opcional)

### Descarga de VBox Ext P

![Descargar VirtualBox Extension Pack - (CLI)](/images/virtualbox/selection_033.png)

### Instalación de VBox Ext P

![Abrir/cargar instalador Vbox. Ext. P.](/images/virtualbox/selection_036.png)

![Instalación de Vbox. Ext. P.](/images/virtualbox/selection_035.png)
