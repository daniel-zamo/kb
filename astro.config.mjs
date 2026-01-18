import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://daniel-zamo.github.io',
	base: '/kb', // Vital para GitHub Pages

	// NOTA: Eliminamos los redirects manuales. 
	// Starlight redirigirá de /kb a /kb/es/ automáticamente al detectar defaultLocale.

	integrations: [
		starlight({
			title: 'Notas Técnicas',
			defaultLocale: 'es',
			locales: {
				// Definimos 'es' explícitamente. 
				// Esto mapea src/content/docs/es/ a la URL /kb/es/
				es: {
					label: 'Español',
					lang: 'es',
				},
			},
			sidebar: [
				{
					label: 'Base de Conocimiento',
					// autogenerate desde 'es' asegura que no se cree una carpeta 
					// extra "es" en el menú y que todo sea automático.
					autogenerate: {
						directory: 'es',
						collapsed: false // Muestra los subartículos siempre a la vista
					},
				},
			],
			customCss: ['./src/styles/custom.css'],
			head: [
				{
					tag: 'script',
					attrs: {
						type: 'module',
						// Usamos la ruta absoluta incluyendo el base path
						src: '/kb/mermaid-init.js',
						defer: true,
					},
				},
			],
		}),
	],
});
