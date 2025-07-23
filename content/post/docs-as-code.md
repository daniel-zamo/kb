---
title: "Docs as Code: Conceptos Básicos"
tags: 
    - "workflow"
    - "documentation"
    - "best-practices" 
    - "buenas-prácticas" 
    - "devops"
    - "documentación"
    - "documentación-técnica"
    - "Markdown"
date: 2025-07-23T10:00:00-03:00
description: "La documentación como código, o documentos como código, es un enfoque para administrar la documentación que trata los documentos como una base de código. Esto permite la versionar, actualizar automáticamente y revisar documentos como lo haría en una base de código. Docs como código ayuda a asegurarse de que sus documentos estén actualizados y que los usuarios puedan obtener acceso a información precisa."
categories:
    - "documentación-técnica"
    - "markdown"
#image: ""
---

# 📜 Docs as Code (en 30 segundos)

**Definición**:  
Tratar la documentación *como código fuente*: markdown + Git + CI/CD.

## 🔑 5 Pilares Claves

1. **📝 Markdown**  
   - Formato legible (para humanos y máquinas)
   - Ejemplo:  
     ```markdown
     ## Cómo instalar
     ```bash
     npm create astro
     ```

2. **🔄 Control de Versiones**  
   - Historial de cambios (Git)
   - Ramas/MRs para revisión

3. **⚙️ Automatización**  
   - CI/CD valida/build despliega docs  
   - Ejemplo (GitLab CI):  
     ```yaml
     pages:
       script:
         - npm run build-docs
     ```

4. **🧪 Testing**  
   - Validar links rotos  
   - Ejecutar snippets de código (opcional)

5. **📦 Modularidad**  
   - Reusar fragmentos (ej: `{% include 'snippet.md' %}`)

## 💡 Por qué usarlo?

- ✅ **Documentación siempre actualizada** (vive con el código)  
- ✅ **Colaboración mejorada** (via MRs)  
- ✅ **Portabilidad** (markdown = universal)  

## 🛠️ Herramientas Recomendadas
- **SSGs**: Astro (Starlight), MkDocs, Docusaurus  
- **Linting**: markdownlint, Vale  
- **Hosting**: GitLab/GitHub Pages  

> Ejemplo real: Este sitio está hecho cumpliendo en lo más posible con escribirlo utilizando *Docs as Code*.
