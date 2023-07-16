<script>
  import { onMount } from 'svelte';
  import highlightTheme from 'svelte-highlight/styles/night-owl';

  import CodeBlock from '../../../../lib/components/CodeBlock.svelte';

  export let data;

  const { html, js } = data.sourceFiles;

  onMount(() => {
    const scriptTag = document.createElement('script');
    scriptTag.textContent = `
      (function() {
        ${js}
      })();
      `;
    document.body.appendChild(scriptTag);
  });
</script>

<svelte:head>
  {@html highlightTheme}
</svelte:head>

<h2>{data.metadata.title}</h2>

<svelte:component this={data.component} />

<h3>Demo</h3>
<div class="card p-4 my-4">
  {@html html}
</div>

<h3>Code</h3>

<CodeBlock type="javascript" code={js} />
<CodeBlock type="html" code={html} />
