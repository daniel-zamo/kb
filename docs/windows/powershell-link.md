---
title: "Enlaces Simbólicos y Junctions"
date: 2026-01-10
description: "Cómo gestionar enlaces simbólicos y uniones de directorios mediante PowerShell sin morir en el intento de permisos."
tags:
  - PowerShell
  - CLI
  - SysAdmin
  - Storage
---

Típico escenario de SysAdmin: necesitas mover tu carpeta de `_Inbox` (o cualquier directorio pesado) a un disco secundario `D:` pero quieres que el sistema y tus scripts sigan creyendo que está en tu `Home`.

En Linux usaríamos `ln -s`, pero en Windows la cosa tiene sus matices, especialmente con los **privilegios**.

## 1. La opción nativa: SymbolicLink

Es el equivalente más cercano al `ln -s`. Permite apuntar a carpetas y archivos, incluso en rutas de red (UNC).

```powershell
New-Item -Path "C:\Users\dzamo\_Inbox" -ItemType SymbolicLink -Value "D:\_Inbox"
```

!!! warning "El muro de los privilegios"
    Por seguridad, Windows restringe la creación de *Symbolic Links* a cuentas con permisos de **Administrador**. Si lo ejecutas en una sesión normal, verás un error de privilegios.

---

## 2. El "Truco" del SysAdmin: Directory Junction

Si solo necesitas linkear **carpetas locales** (entre discos del mismo PC), el **Junction** es tu mejor amigo.

**¿Lo mejor?** No requiere privilegios de administrador.

```powershell
# Ideal para mover carpetas entre C: y D: sin elevar permisos
New-Item -Path "C:\Users\dzamo\_Inbox" -ItemType Junction -Value "D:\_Inbox"
```

### Diferencias rápidas

| Característica | Symbolic Link | Junction |
| :--- | :--- | :--- |
| **Permisos Admin** | Requeridos (por defecto) | No requeridos |
| **Archivos sueltos** | Sí | No (solo carpetas) |
| **Rutas de Red** | Sí | No |

---

## 3. "Linux-ificando" Windows: Developer Mode

Si quieres que `New-Item -ItemType SymbolicLink` funcione siempre sin pedirte permisos de admin (como en Linux), puedes activar el **Modo Desarrollador**:

1. Ve a **Configuración** > **Privacidad y seguridad** > **Para programadores**.
2. Activa **Modo de desarrollador**.

Esto elimina la restricción de seguridad para enlaces simbólicos en tu cuenta de usuario.

---

## 4. Gestión rápida (Chuleta)

### Eliminar un enlace

Borrar el link **no borra el contenido original**. Puedes hacerlo desde el explorador o vía CLI:

```powershell
Remove-Item "C:\Users\dzamo\_Inbox"
```

### ¿A dónde apunta este link?

Si quieres verificar el destino de un enlace existente:

```powershell
Get-Item "C:\Users\dzamo\_Inbox" | Select-Object -Property Target
```

!!! tip "Dato para veteranos"
    Si vienes del CMD clásico, también puedes usar `mklink /D "Ruta_Link" "Ruta_Target"`, pero `New-Item` de PowerShell es más consistente con el resto de nuestros flujos de automatización.
