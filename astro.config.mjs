import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://daniel-zamo.github.io',
	base: '/kb',
	redirects: { '/': '/es/', '/es': '/es/' },


	integrations: [
		starlight({
			title: 'Notas Técnicas',
			defaultLocale: 'es',
			// Definimos 'es' explícitamente para que coincida con la carpeta src/content/docs/es/
			locales: {
				es: { label: 'Español', lang: 'es', },
			},
			sidebar: [
				{
					label: 'Base de Conocimiento',
					// IMPORTANTE: autogeneramos desde 'es' 
					// para que NO aparezca la carpeta 'es' en el menú lateral
					autogenerate: { directory: 'es' },
					collapsed: false
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
