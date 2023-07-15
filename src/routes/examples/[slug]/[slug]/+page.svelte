<script>
  import { onMount } from 'svelte';
  export let data;

  const html = data.sourceFiles.find(file => file.path.endsWith('html'));
  const js = data.sourceFiles.find(file => file.path.endsWith('js'));

  onMount(() => {
      const scriptTag = document.createElement('script');
      scriptTag.textContent = `
      (function() {
        ${js.content}
      })();
      `;
      document.body.appendChild(scriptTag);
  });
</script>

<h2>{data.metadata.title}</h2>

<svelte:component this={data.component} />

<div>
  {@html html.content}
</div>

{#each data.sourceFiles as { path, content }}
  <h3>{path}</h3>
  <pre>
{content}
  </pre>
{/each}