import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://daniel-zamo.github.io',
	base: '/kb',
	integrations: [
		starlight({
			title: 'Notas Técnicas',
			// Definimos español como idioma único y principal en la raíz
			defaultLocale: 'es',

			// ELIMINAMOS el bloque 'locales: { es: { ... } }' 
			// para evitar que busque la ruta /es/

			sidebar: [
				{
					label: 'Inicio',
					link: '/',
				},
				{
					label: 'Notas',
					autogenerate: { directory: '' },
				},
			],
			customCss: ['./src/styles/custom.css'],
		}),
	],
});