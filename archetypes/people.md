---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: false
# Taxonomías para filtrar en tu web
categories: ["Networking"]
tags: ["Entrevistas", "Recruiters", "Tech Leads"]
# Parámetros personalizados para el CRM
role: "Recruiter / Tech Lead / Manager"
company: "Nombre de la Empresa"
status: "Contactado / Entrevista 1 / Oferta / Rechazado"
linkedin_url: ""
tech_stack: ["Azure", "n8n", "Terraform"]
icon: "fa-user-tie" # Icono de FontAwesome para Relearn
---

{{% notice info %}}
**Objetivo de la Relación:** [Breve descripción de por qué esta persona es clave para la reinserción laboral]
{{% /notice %}}

### 🔍 Perfil y Contexto

- **Empresa:** {{% badge %}}EMPRESA{{% /badge %}}
- **Rol en el proceso:** [Ej: Es quien toma la decisión técnica]
- **Stack de interés:** [¿Qué tecnologías mencionaron que les urgen?]

### 📅 Bitácora de Interacciones

| Fecha | Acción | Notas Clave |
| :--- | :--- | :--- |
| {{ .Date.Format "2006-01-02" }} | Creación | Perfil identificado para postulación. |

### 💡 Puntos de Dolor (Pain Points) Identificados

*¿Qué problema tiene la empresa que yo puedo resolver con mi stack?*

