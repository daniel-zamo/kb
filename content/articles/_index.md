---
title: Artículos
summary: Artículos
type: landing

cascade:
  - _target:
      kind: page
    params:
      show_breadcrumb: true

sections:
  - block: collection
    id: articles
    content:
      title: Artículos
      filters:
        folders:
          - articles
    design:
      view: article-grid
      columns: 2
---
