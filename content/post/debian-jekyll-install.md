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

## Tecnologías utilizadas

<a href="https://www.debian.org/" target="_blank" class="badge-link">
  <img src="https://img.shields.io/badge/Debian-A81D33?style=flat-square&logo=debian&logoColor=white" alt="Debian">
</a> | <a href="https://cinnamon-spices.linuxmint.com/" target="_blank" class="badge-link">
  <img src="https://img.shields.io/badge/Cinnamon-DC682E?style=flat-square&logo=cinnamon&logoColor=white" alt="Cinnamon">
</a>

## Instalación de dependencias

### Instalación de Ruby

```bash
sudo nala -y update && sudo nala -y install ruby-full
```
