import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';

mermaid.initialize({
  startOnLoad: false,
  theme: 'dark',
  securityLevel: 'loose'
});

const renderMermaid = async () => {
  console.log('%c[Mermaid]: Iniciando orquestador...', 'color: yellow;');

  const allBlocks = document.querySelectorAll('pre code');

  for (const code of allBlocks) {
    // 1. IMPORTANTE: Usamos innerText en lugar de textContent.
    // innerText suele preservar mejor los saltos de línea de los bloques <pre>.
    let text = code.innerText.trim();

    if (text.startsWith('graph ') || text.startsWith('flowchart ') || text.startsWith('sequenceDiagram')) {
      console.log('%c[Mermaid]: Bloque detectado. Normalizando...', 'color: #00ff00;');

      // 2. CORRECCIÓN DE EMERGENCIA: 
      // Si el texto no tiene saltos de línea (causado por el formateador de Astro),
      // intentamos restaurarlos. Mermaid necesita un salto tras el encabezado.
      if (!text.includes('\n')) {
        text = text.replace(/^(graph \w+|flowchart \w+|sequenceDiagram)/, '$1\n');
      }

      try {
        const id = `mermaid-svg-${Math.random().toString(36).substring(2, 9)}`;

        // 3. Renderizado
        const { svg } = await mermaid.render(id, text);

        const wrapper = document.createElement('div');
        wrapper.className = 'mermaid-diagram-container';
        wrapper.innerHTML = svg;

        const elementToReplace = code.closest('pre').closest('figure') || code.closest('pre');
        elementToReplace.replaceWith(wrapper);
      } catch (error) {
        console.error('%c[Mermaid]: Error crítico de sintaxis:', 'color: red;', error);
      }
    }
  }
};

document.addEventListener('astro:page-load', renderMermaid);
renderMermaid();