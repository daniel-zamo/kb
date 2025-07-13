---
title: Links
links:
  - title: GitHub
    description: GitHub es la plataforma de desarrollo de software más grande del mundo.
    website: https://github.com
    image: https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png
  - title: TypeScript
    description: TypeScript es un superconjunto tipado de JavaScript que se compila en JavaScript simple.
    website: https://www.typescriptlang.org
    image: ts-logo-128.jpg
  - title: LPI Learning Materials - Materiales de aprendizaje de LPI
    description: Materiales de aprendizaje gratuitos del Linux Professional Institute, ideales para preparar exámenes. Estructura clara con explicaciones, ejercicios y soluciones, adaptados a 1-2 horas por lección. ¡Perfectos para aulas!
    website: https://learning.lpi.org/en/learning-materials/learning-materials/
    image: lpi-learning-logo.png
menu:
    main: 
        weight: -50
        params:
            icon: link

comments: false
---

Para usar esta función, añada la sección `links` al `frontmatter` del Markdown.

Formato de `frontmatter` (portada) de de esta página:

```yaml
links:
  - title: GitHub
    description: GitHub is the world's largest software development platform.
    website: https://github.com
    image: https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png
...
```

El campo `image` acepta imágenes tanto locales como externas.
