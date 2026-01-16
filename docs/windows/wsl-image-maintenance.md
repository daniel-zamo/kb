---
title: Mantenimiento y Backups de WSL 2
description: Procedimientos de administración para el ciclo de vida de imágenes VHDX, exportación y optimización de espacio.
tags:
  - Backup
  - VHDX
  - Mantenimiento
---

# 💾 Mantenimiento y Ciclo de Vida de WSL 2

Como administrador, la gestión proactiva de las imágenes virtuales asegura la continuidad del entorno de trabajo.

## 1. Exportación (Gold Image)

Una vez configurada la instancia, genera un respaldo comprimido. Este archivo `.tar` sirve para restaurar tu entorno en cualquier PC con WSL 2.

```powershell title="Respaldo de Seguridad"
# Apagar el subsistema
wsl --shutdown

# Exportar instancia
wsl --export RockyLinux9 "D:\10_Hot-Tier_Caliente\WSL\Backups\RockyLinux9_Gold.tar"
```

## 2. Optimización de Disco (Sparse VHDX)

Los archivos `.vhdx` crecen dinámicamente pero no reducen su tamaño físico al borrar archivos en Linux.

```powershell title="Habilitar Sparse VHD"
wsl --manage RockyLinux9 --set-sparse true
```

## 3. Reubicación de Distros

Si instalaste una distribución en `C:` por error, el procedimiento es:

1. **Exportar** a un `.tar`.
2. **Unregister**: `wsl --unregister <Nombre>` (¡Cuidado! Borra el disco en C:).
3. **Importar** en la nueva ruta utilizando el `.tar` generado.
