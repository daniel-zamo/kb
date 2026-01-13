---
title: "LVM: Expansión de Discos"
date: 2026-01-10
description: "Guía rápida para expandir almacenamiento mediante LVM sin pérdida de datos."
tags:
  - LVM
  - Storage
  - SysAdmin
---

# LVM: Expansión de Discos {: #lvm-expansion }

Escenario típico: Te quedas sin espacio en un volumen lógico (`LV`) en un servidor en producción. Tienes un disco nuevo o has ampliado el disco virtual. ¿Cómo lo asimilas sin desmontar el sistema?

## 1. El Pipeline de LVM

Para no perderte, recuerda siempre la jerarquía de capas:
**Físico (PV) ➔ Grupo (VG) ➔ Lógico (LV) ➔ Sistema de Archivos (FS).**

### Paso A: Preparar el "Hierro" (PV)

Si has añadido un disco nuevo (ej: `/dev/sdb`):

```bash
# Inicializar el disco para LVM
pvcreate /dev/sdb
```

### Paso B: Ampliar el Grupo (VG)

Añadimos el nuevo espacio al grupo existente (supongamos que se llama `vg_data`):

```bash
vgextend vg_data /dev/sdb
```

### Paso C: Expandir el Volumen (LV)

Le damos el espacio al volumen lógico específico. Usamos el flag `-r` para redimensionar el sistema de archivos automáticamente:

```bash
# Expandir 10GB adicionales y redimensionar FS
lvextend -L +10G -r /dev/vg_data/lv_storage
```

---

## 2. Tabla de Comandos Rápidos

| Nivel | Comando | Acción |
| :--- | :--- | :--- |
| **PV** | `pvdisplay` | Ver estado de discos físicos |
| **VG** | `vgs` | Ver espacio libre en grupos |
| **LV** | `lvs` | Ver volúmenes lógicos activos |

---

## 3. Consideraciones del Sistema de Archivos (FS)

!!! tip "Gestión Manual"
    Si no utilizaste el flag `-r` en el paso anterior, deberás expandir el sistema de archivos manualmente según su tipo:
    - **Ext4:** `resize2fs /dev/vg_data/lv_storage`
    - **XFS:** `xfs_growfs /mnt/punto_montaje` *(Nota: XFS requiere el punto de montaje, no el path del dispositivo).*

---

## ¿Por qué esta nota aporta valor a mi perfil?

Dominar **LVM** demuestra capacidad para gestionar infraestructuras elásticas. En entornos Cloud y Virtualizados, manipular el almacenamiento *online* es una competencia crítica que separa a un técnico junior de un **SysAdmin/DevOps Senior** que prioriza la disponibilidad del servicio y la continuidad de negocio.
