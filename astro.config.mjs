// astro.config.mjs
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://daniel-zamo.github.io',
	base: '/kb',
	redirects: { '/': '/kb/es/', },
	integrations: [
		starlight({
			title: 'Notas Técnicas',
			defaultLocale: 'es',
			locales: {
				es: { label: 'Español', lang: 'es' },
			},
			sidebar: [
				{
					label: 'Base de Conocimiento',
					autogenerate: { directory: 'es', collapsed: false },
				},
			],
			customCss: ['./src/styles/custom.css'],
			// INYECCIÓN DIRECTA: Esto es más robusto que un archivo en /public
			head: [
				{
					tag: 'script',
					content: `
						import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';
						mermaid.initialize({ startOnLoad: false, theme: 'dark' });

						const render = async () => {
							const elements = document.querySelectorAll('.language-mermaid');
							for (const el of elements) {
								const pre = el.closest('pre');
								const { svg } = await mermaid.render('id-' + Math.random().toString(36).substr(2, 5), el.textContent);
								const container = document.createElement('div');
								container.innerHTML = svg;
								container.className = 'mermaid-diagram-container';
								pre.replaceWith(container);
							}
						};
						
						// Esto detecta cambios de página en Starlight
						document.addEventListener('astro:page-load', render);
						// Esto carga la primera vez
						setTimeout(render, 500); 
					`,
					attrs: { type: 'module' }
				},
			],
		}),
	],
});
