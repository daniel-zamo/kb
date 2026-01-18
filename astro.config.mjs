// kb/astro.config.mjs
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://daniel-zamo.github.io',
	base: '/kb',
	// Redirección crítica: de /kb a /kb/es/
	redirects: {
		'/': '/kb/es/',
	},
	integrations: [
		starlight({
			title: 'Notas Técnicas',
			defaultLocale: 'es',
			locales: {
				es: {
					label: 'Español',
					lang: 'es',
				},
			},
			sidebar: [
				{
					label: 'Base de Conocimiento',
					// IMPORTANTE: Ahora autogeneramos desde la carpeta 'es'
					autogenerate: { directory: 'es', collapsed: false },
				},
			],
			// ... tus otros ajustes (mermaid, customCss, etc.)
		}),
	],
});