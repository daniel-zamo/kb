---
title: "TPL People Obsidian > Templater"
date: 2026-01-10
categories: ["Productividad"]
tags: ["Obsidian", "Templater", "Workflow", "IT-Career"]
icon: "fa-rocket"
---

{{% notice note %}}
**Propósito:** Este artículo documenta la lógica técnica detrás de mi sistema de seguimiento de entrevistas. El objetivo es estandarizar la captura de datos críticos durante procesos de selección, permitiendo una preparación técnica basada en datos.
{{% /notice %}}

## 🧠 El Problema: Fatiga de Contexto

Durante una fase de búsqueda activa, un ingeniero puede gestionar múltiples procesos en paralelo. La pérdida de detalles específicos sobre el stack tecnológico de una empresa o el rol de un entrevistador genera una "deuda de preparación".

## 🛠 La Solución: Automatización con Templater

Utilizo el plugin **Templater** de Obsidian para disparar una pipeline de creación de notas que me obliga a definir el contexto de la entrevista antes de que esta ocurra.

### El Script de Templater

Este código genera prompts dinámicos para evitar la procrastinación en la toma de notas:

```javascript
<%*
// 1. Ingesta de Metadatos Dinámicos
let empresa = await tp.system.prompt("Empresa");
let cargo = await tp.system.prompt("Cargo / Rol");
let etapa = await tp.system.prompt("Etapa (Ej: Técnica, HR, Manager)");

// 2. Formateo de Título Automático
await tp.file.rename(`${tp.date.now("YYYY-MM-DD")} - ${empresa} - ${cargo}`);
-%>

# 🏢 Entrevista: <% empresa %>

**Fecha:** <% tp.date.now("YYYY-MM-DD HH:mm") %>

**Rol:** <% cargo %>

**Etapa:** <% etapa %>

## 🎯 Estrategia Técnica

*¿Qué problemas de su infraestructura puedo resolver?*

- [ ] Conexión con mi proyecto de **AI-Ops (n8n + Gemini)**.
- [ ] Experiencia en **IaC / Debian 12**.

## 📝 Notas de la Sesión

> [!TIP] Registrar 'Pain Points' mencionados por el entrevistador.

- 

## 🚀 Follow-up (Acciones Post-Entrevista)

- [ ] Enviar agradecimiento por LinkedIn.
- [ ] Enviar enlace a documentación específica en mi Portfolio.

```

## 📈 Beneficios Operativos

1. **Estandarización:** Todas mis fichas de entrevista mantienen la misma jerarquía.
2. **Histórico Auditable:** Permite revisar meses después por qué se descartó un proceso.
3. **Foco en el Valor:** Al automatizar la estructura, mi tiempo se dedica exclusivamente a investigar a la empresa.
