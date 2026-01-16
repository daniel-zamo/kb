---
title: Despliegue de Rocky Linux 9 en WSL 2
description: Guía paso a paso para importar y configurar Rocky Linux 9 sobre un entorno Windows 11 utilizando unidades de almacenamiento secundarias.
tags:
  - WSL2
  - RockyLinux
  - Windows11
  - SysAdmin
---

# 🐧 Rocky Linux 9 en WSL 2: Guía de Instalación

Esta guía detalla el proceso para instalar Rocky Linux 9 utilizando una importación manual del RootFS, optimizando el almacenamiento en una unidad de alto rendimiento (`D:`).

## 1. Obtención del RootFS real

WSL requiere un sistema de archivos raíz plano. Si descargas la imagen de contenedor oficial, debes extraer el archivo correcto:

1. Descarga `Rocky-9-Container-Base.latest.x86_64.tar.xz`.
2. Extrae el contenido hasta obtener el `.tar`.
3. Abre el `.tar` con 7-Zip y navega a `blobs/sha256/`.
4. El archivo de mayor tamaño es el **RootFS**. Extráelo y renómbralo como `rocky9-rootfs.tar`.

## 2. Importación en Unidad Secundaria

Para no saturar la unidad `C:`, importamos el disco virtual en el Tier Caliente de la unidad `D:`.

```powershell title="PowerShell 7 (Admin)"
# Crear directorio dedicado
mkdir "D:\10_Hot-Tier_Caliente\WSL\RockyLinux9"

# Importar la distribución
wsl --import RockyLinux9 "D:\10_Hot-Tier_Caliente\WSL\RockyLinux9" "C:\Users\dzamo\Desktop\2026-01-16\rocky9-rootfs.tar"
```

## 3. Configuración Inicial Post-Instalación

Accedemos a la instancia para preparar el entorno base:

```bash title="Dentro de Rocky Linux"
# 1. Actualización e instalación de utilidades
dnf -y update && dnf -y install sudo passwd shadow-utils util-linux vim-enhanced which

# 2. Gestión de usuario administrador
USER=dzamo
useradd -m -G wheel $USER
passwd $USER
echo "$USER ALL=(ALL) NOPASSWD: ALL" > /etc/sudoers.d/$USER
```

## 4. Activación de Systemd

Indispensable para gestionar servicios en Rocky 9. Creamos la configuración de WSL:

```ini title="/etc/wsl.conf"
[boot]
systemd=true

[user]
default=dzamo
```

!!! danger "Reinicio Crítico"
    Tras guardar los cambios, debes ejecutar `wsl --terminate RockyLinux9` en PowerShell para que los cambios de `wsl.conf` surtan efecto.

## 5. Habilitar Man Pages

Para activar la ayuda del sistema:

1. Edita `/etc/dnf/dnf.conf` y comenta `#tsflags=nodocs`.
2. Instala el motor: `sudo dnf install -y man-db man-pages`.
3. Recupera manuales: `sudo dnf reinstall -y coreutils`.
