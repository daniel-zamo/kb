---
title: WezTerm: Configuración para Platform Engineers
description: Configuración avanzada de WezTerm optimizada para GPUs Intel, con comportamiento estilo Konsole y lanzador directo a Rocky Linux.
tags:
  - Terminal
  - WezTerm
  - Lua
  - UX
---

# 🚀 WezTerm: Terminal Acelerada por GPU

WezTerm ofrece un rendimiento superior y una capacidad de configuración mediante Lua que lo hace ideal para flujos de trabajo de ingeniería de plataforma.

## Configuración Principal (.wezterm.lua)

Esta configuración implementa **Copy-on-select** y **Clic derecho para pegar**, replicando la experiencia de Konsole (KDE).

```lua title="C:\Users\dzamo\.wezterm.lua"
local wezterm = require 'wezterm'
local config = wezterm.config_builder()

-- Lanzador WSL Rocky Linux 9
config.default_prog = { 'wsl.exe', '-d', 'RockyLinux9', '--user', 'dzamo' }

-- Renderizado OpenGL para Intel
config.front_end = "OpenGL"
config.max_fps = 60

-- Estética
config.color_scheme = 'AdventureTime'
config.font = wezterm.font_with_fallback({
  'Cascadia Code',
  'JetBrains Mono',
  'Consolas',
})
config.font_size = 12.0

-- Mouse: Comportamiento Konsole
config.mouse_bindings = {
  {
    event = { Up = { streak = 1, button = 'Left' } },
    mods = 'NONE',
    action = wezterm.action.CompleteSelection 'ClipboardAndPrimarySelection',
  },
  {
    event = { Down = { streak = 1, button = 'Right' } },
    mods = 'NONE',
    action = wezterm.action.PasteFrom 'Clipboard',
  },
}

-- Atajos
config.keys = {
  { key = 'v', mods = 'ALT', action = wezterm.action.SplitHorizontal { domain = 'CurrentPaneDomain' } },
  { key = 'h', mods = 'ALT', action = wezterm.action.SplitVertical { domain = 'CurrentPaneDomain' } },
  { key = 'c', mods = 'CTRL|SHIFT', action = wezterm.action.CopyTo 'Clipboard' },
  { key = 'v', mods = 'CTRL|SHIFT', action = wezterm.action.PasteFrom 'Clipboard' },
}

return config
```

## Navegación de Paneles

- `ALT + Flechas`: Cambiar el foco entre paneles divididos.
- `CTRL + SHIFT + T`: Nueva pestaña.
- `CTRL + SHIFT + W`: Cerrar panel.

```
#<// END: archivo `docs/productivity/wezterm-config-sysadmin.md`

---

#> BEGIN: archivo `docs/windows/wsl-wezterm-troubleshooting.md`
```markdown
---
title: Troubleshooting WSL & WezTerm
description: Resolución de errores comunes durante la integración de Rocky Linux y emuladores de terminal de terceros.
tags:
  - Debug
  - Troubleshooting
  - WSL
---

# 🛠 Troubleshooting: WSL & WezTerm

## 1. WSL_E_NOT_A_LINUX_DISTRO
Ocurre al importar archivos `.tar` que son imágenes OCI/Docker.
**Solución:** Extraer manualmente el RootFS de la carpeta `blobs/` de la imagen original.

## 2. Errores de Fuentes en WezTerm
Si WezTerm avisa que no puede cargar una fuente, el nombre en el `.lua` no coincide con el registro de Windows.
**Solución:** Ejecutar `wezterm ls-fonts --list-system` para ver los nombres exactos y usar `font_with_fallback` apuntando primero a `Cascadia Code`.

## 3. Desfase Horario (Time Drift)
El reloj de la distro se atrasa tras hibernar Windows.
**Solución:** Instalar y habilitar `chronyd` dentro de Rocky Linux.
```bash
sudo dnf install chrony -y
sudo systemctl enable --now chronyd
```

## 4. Error copy_on_select

En versiones recientes de `config_builder`, este flag puede fallar.
**Solución:** Definirlo manualmente en `mouse_bindings` usando la acción `CompleteSelection`.
