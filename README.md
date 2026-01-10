# @DZ Notes - Technical Knowledge Base

<div align="center">
![Hugo](https://img.shields.io/badge/SSG-Hugo-red?logo=hugo&logoColor=white)
![Go](https://img.shields.io/badge/Dependency-Go_Modules-blue?logo=go&logoColor=white)
![Theme](https://img.shields.io/badge/Theme-Relearn-green?logo=relearn&logoColor=white)
![CI/CD](https://img.shields.io/badge/CI%2FCD-GitHub_Actions-2088FF?logo=github-actions&logoColor=white)
![Status](https://img.shields.io/github/actions/workflow/status/daniel-zamo/notes/gh-pages.yml?label=Deployment)
</div>

## 📖 Descripción del Proyecto

Este repositorio constituye mi **Base de Conocimientos Técnica (Second Brain)**. A diferencia de un blog tradicional, este sitio está diseñado bajo un paradigma de **documentación operativa**, funcionando como un manual de vuelo para procedimientos de administración de sistemas, ingeniería de plataforma y automatización.

### Arquitectura de la Solución

- **Motor:** [Hugo](https://gohugo.io/) (Extended Version).
- **Interfaz:** [Relearn Theme](https://mcshelby.github.io/hugo-theme-relearn/), optimizado para búsqueda jerárquica y legibilidad técnica.
- **Gestión de Dependencias:** Go Modules para una trazabilidad de versiones del tema segura y reproducible.
- **Pipeline:** Despliegue automatizado mediante GitHub Actions nativo.

---

## 🛠️ Desarrollo Local

Para ejecutar este manual en un entorno local (Debian/WSL), asegúrate de tener instalados **Git**, **Go** y **Hugo Extended**.

### Pasos iniciales:

1. **Clonar el repositorio:**
   ```bash
   git clone git@github.com:daniel-zamo/notes.git
   cd notes
   ```
2. **Levantar el servidor de desarrollo:**
   ```bash
   hugo server -D
   ```
   
   *El sitio estará disponible en `http://localhost:1313/notes/`.*

---

## 🚀 Pipeline de Despliegue (CI/CD)

El sitio se despliega automáticamente en **GitHub Pages** mediante el flujo definido en `.github/workflows/gh-pages.yml`. 

### Configuración en el Repositorio:

Para que el despliegue funcione correctamente, la configuración en GitHub debe ser:

1. Ir a **Settings** -> **Pages**.
2. En **Build and deployment** -> **Source**, seleccionar: `GitHub Actions`.

*Nota: Ya no se requiere una rama `gh-pages` intermedia, el despliegue es directo desde el artefacto de construcción.*

---

## 🔧 Mantenimiento del Sistema

### Actualizar el Tema (Relearn):

Como el tema se gestiona mediante **Go Modules**, la actualización es atómica y segura:

```bash
hugo mod get -u github.com/McShelby/hugo-theme-relearn/v7
hugo mod tidy
```

### Estructura de Contenidos:

- `content/`: Todos los activos de conocimiento en formato Markdown/MDX.
- `archetypes/`: Plantillas preconfiguradas para nuevos artículos (ej. People Template).

---

<div align="center">
Desarrollado con mentalidad DevOps por Daniel Zamo.
</div>

