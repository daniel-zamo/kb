# Reporte de configuración - Directorio config/_default

**Generado:** vie 16 ene 2026 19:07:58 CET
**Usuario:** dzamo
**Hostname:** aspire-a315-59
**Directorio analizado:** /home/dzamo/my-workspace/in_github.com/daniel-zamo.github.io/kb/docs

## Estructura del directorio

```bash
docs
├── ai-protocols
│   ├── index.md
│   ├── master-note-generator-astro-starlight.md
│   ├── master-note-generator-hugo-relearn.md
│   ├── .pages
│   ├── tech-note-generator-ii.md
│   └── tech-note-generator.md
├── glossary
│   ├── devops-terms.md
│   ├── index.md
│   └── .pages
├── index.md
├── javascripts
│   └── mathjax.js
├── linux
│   ├── index.md
│   ├── lvm-expansion.md
│   └── .pages
├── .pages
├── productivity
│   ├── git-conventional-commits.md
│   ├── git-workflow-optimization.md
│   ├── index.md
│   ├── obsidian-interview-templater.md
│   ├── .pages
│   ├── vscode-pages-yaml.md
│   └── vscode-workspace-optimization.md
├── ssg
│   ├── hugo-link-management.md
│   ├── hugo-relearn-v8-fix.md
│   ├── hugo-vs-mkdocs-linking.md
│   ├── index.md
│   ├── kb-vs-portfolio.md
│   ├── mkdocs-autorefs-guide.md
│   └── .pages
├── stylesheets
│   └── extra.css
└── windows
    ├── index.md
    ├── .pages
    └── powershell-link.md
```

---

## Contenido de archivos


## Archivo `index.md`

**Ubicación:** `docs/index.md`  
**Tamaño:** 1683 bytes  
**Permisos:** rw-r--r--  
**Propietario:** dzamo  
**Lenguaje:** markdown  

```markdown
---
title: Inicio
hide:
  - navigation
  - toc
---

# 🛠️ Knowledge Base: Mis Notas Técnicas

Bienvenido a mi repositorio central de conocimiento. Aquí documento procesos y configuraciones de mi flujo de trabajo como **Platform Engineer**.

---

<div class="grid cards" markdown>

- :material-robot:{ .lg .middle } **Protocolos (prompt) de IA**

    ---

    Estrategias y prompts maestros para la generación de activos técnicos.
    [:octicons-arrow-right-24: Ver protocolos](ai-protocols/index.md)

- :material-linux:{ .lg .middle } **Linux & Infra**

    ---

    Administración de sistemas, volúmenes LVM y hardening.
    [:octicons-arrow-right-24: Explorar Linux](linux/index.md)

- :material-tools:{ .lg .middle } **Productividad**

    ---

    Optimización de VS Code y automatización de tareas.
    [:octicons-arrow-right-24: Mejorar flujo](productivity/index.md)

- :material-web:{ .lg .middle } **SSG & Docs**

    ---

    Gestión de sitios estáticos con MkDocs, Hugo y Astro.
    [:octicons-arrow-right-24: Ver guías SSG](ssg/index.md)

- :material-microsoft-windows:{ .lg .middle } **Windows Admin**

    ---

    Snippets de PowerShell y configuraciones específicas.
    [:octicons-arrow-right-24: Ver notas](windows/index.md)

</div>

---

### 🚀 Sobre este sitio

Este proyecto es un **Laboratorio de Documentación Viva**.

- **Stack:** MkDocs + Material for MkDocs.
- **Despliegue:** GitHub Actions automático.
- **Filosofía:** "Si lo haces más de dos veces, documéntalo".

!!! tip "Búsqueda Rápida"
    Presiona <kbd>F</kbd> o <kbd>S</kbd> en cualquier momento para abrir el buscador global y encontrar comandos específicos rápidamente.
```

---

## Archivo `.pages`

**Ubicación:** `docs/.pages`  
**Tamaño:** 408 bytes  
**Permisos:** rw-r--r--  
**Propietario:** dzamo  
**Lenguaje:** text  

```text
nav:
  #  - "🏠 Inicio": index.md
  - Inicio: index.md
  #  - "🐧 Linux": linux/
  - Linux: linux/
  #  - "🪟 Windows": windows/
  - Windows: windows/
  #  - "🛠️ Productividad": productivity/
  - Productividad: productivity/
  #  - "🌐 SSG": ssg/
  - SSG: ssg/
  #  - "🤖 Protocolos IA": ai-protocols/
  - Protocolos IA: ai-protocols/
  #  - "📖 Glosario": glossary/
  - Glosario: glossary/
```

---

## Resumen del reporte

- **Total de archivos procesados:** 2
- **Tamaño total del directorio:** 164K
- **Reporte generado en:** `./2026-01-16_kb_content_report.md`

### Comandos utilizados para verificación

```bash
# Verificar número de archivos
echo "Total de archivos en docs: $(find "docs" -maxdepth 1 -type f | wc -l)"

# Verificar permisos
echo "=== Permisos de archivos ==="
ls -la "docs/"
```

*Reporte generado automáticamente por script LFCS - 2026-01-16*
