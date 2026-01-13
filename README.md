# @DZ Notes - Technical Knowledge Base

<div align="center">

![MkDocs](https://img.shields.io/badge/SSG-MkDocs-blue?logo=python&logoColor=white)
![Material](https://img.shields.io/badge/Theme-Material-indigo?logo=materialdesign&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)
![CI/CD](https://img.shields.io/badge/CI%2FCD-GitHub_Actions-2088FF?logo=github-actions&logoColor=white)
![Status](https://img.shields.io/github/actions/workflow/status/daniel-zamo/kb/gh-pages.yml?label=Deployment)

</div>

## 📖 Descripción del Proyecto

Este repositorio es mi **Base de Conocimientos Técnica (Second Brain)**. Trasladado desde Hugo a **MkDocs**, este sitio funciona como un manual de vuelo operativo para procedimientos de administración de sistemas, ingeniería de plataforma y protocolos de IA.

A diferencia de un blog, aquí prima la **atomicidad y la recuperabilidad** de la información mediante una arquitectura de enlaces inteligentes.

### Arquitectura de la Solución

- **Motor:** [MkDocs](https://www.mkdocs.org/) (Basado en Python).
- **Interfaz:** [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/), optimizado para documentación técnica avanzada.
- **Navegación:** Gestión automática mediante `awesome-pages` y referencias cruzadas con `autorefs`.
- **Pipeline:** Despliegue automatizado en GitHub Pages mediante GitHub Actions.

---

## 🛠️ Desarrollo Local

Para trabajar en esta KB, se requiere **Python 3.x** y un entorno virtual configurado.

### Instalación y ejecución

1. **Clonar el repositorio:**

   ```bash
   git clone git@github.com:daniel-zamo/kb.git
   cd kb
   ```

2. **Configurar el entorno virtual e instalar dependencias:**

   ```bash
   python3 -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   ```

3. **Levantar el servidor de desarrollo:**

   ```bash
   mkdocs serve
   ```

   *El sitio estará disponible en `http://127.0.0.1:8000/`.*

---

## 🚀 Pipeline de Despliegue (CI/CD)

El sitio se sincroniza automáticamente con **GitHub Pages** al detectar cambios en la rama principal.

- **Workflow:** `.github/workflows/gh-pages.yml`
- **Configuración:** En el repositorio, ir a *Settings -> Pages* y asegurar que la fuente sea `GitHub Actions`.

---

## 📂 Estructura de Contenidos

- `docs/`: Contenido fuente en Markdown.
  - `ai-protocols/`: Prompts y flujos de trabajo con IA.
  - `linux/`: Administración de sistemas y storage.
  - `productivity/`: Optimización de VS Code y metodologías.
- `mkdocs.yml`: Configuración central del sitio y plugins.

---

## ⚖️ Licencia

Este proyecto se distribuye bajo la licencia **MIT**. Consulta el archivo [LICENSE](./LICENSE) para más detalles.

<div align="center">
Desarrollado con mentalidad DevOps por Daniel Oscar Zamo.
</div>
