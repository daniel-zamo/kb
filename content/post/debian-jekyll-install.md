---
title: "Guía de Instalación de Jekyll en Debian (y/o derivado)"
date: 2025-07-18T10:00:00-03:00
description: "Instalación del SSG Jekyll en una distribución Linux basada o derivada de Debian 12 (y/o superior)."
tags:
    - "linux"
    - "markdown"
    - "site-static-generator"
    - "generadores-sitios-estaticos"
    - "documentación"
    - "ruby"
categories:
    - "ssg"

image: "/images/jekyll.header.avif"
---

## Instalación de Jekyll en Debian 12 (y/o derivado)

{{< note title="Objetivo" >}}
En este caso de uso se instala el SSG Jekyll sobre un Debian 12. El mismo procedimiento es identico de realizar en distribuciones superiores y/o derivadas de Debian (por ejemplo Ubuntu, Linux Mint, Q4os, etc).
{{< /note >}}

## Supuestos cumplidos

- Sistema operativo: Debian 12
- Desktop/ambiente gráfico: [![Hugo](https://img.shields.io/badge/Hugo-FF4088?style=flat-square&logo=hugo&logoColor=white)](https://gohugo.io/)

## Referencias principales consultadas

## Instalación de dependencias


### Instalación de Ruby

```bash
sudo nala -y update && \
  sudo nale -y install ruby-full
```