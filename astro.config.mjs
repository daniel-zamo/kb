import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://daniel-zamo.github.io',
	base: '/kb', // Base URL crítica para assets
	integrations: [
		starlight({
			title: 'Notas Técnicas',
			defaultLocale: 'es',
			// Configuración de idiomas para asegurar que cargue es.json
			locales: {
				root: { label: 'Español', lang: 'es', },
			},

			sidebar: [
				{
					label: 'Base de Conocimiento',
					autogenerate: {
						directory: ''
					},
				},
			],
			customCss: ['./src/styles/custom.css'],
			head: [
				{
					tag: 'script',
					attrs: {
						type: 'module',
						// Usamos la ruta absoluta incluyendo el base para despliegue en GH Pages
						src: '/kb/mermaid-init.js',  // El prefijo /kb/ es vital para GitHub Pages
						defer: true,
					},
				},
			],
		}),
	],
});
