<script>
  import { onMount } from 'svelte';
  import highlightTheme from 'svelte-highlight/styles/night-owl';

  import CodeBlock from '../../../../lib/components/CodeBlock.svelte';

  export let data;

  const html = data.sourceFiles.find((file) => file.path.endsWith('html'));
  const js = data.sourceFiles.find((file) => file.path.endsWith('js'));

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

<svelte:head>
  {@html highlightTheme}
</svelte:head>

<h2>{data.metadata.title}</h2>

<svelte:component this={data.component} />

<h3>Demo</h3>
<div class="card p-4 my-4">
  {@html html.content}
</div>

<h3>Code</h3>
{#each data.sourceFiles as { path, content }}
  <h3>{path}</h3>
  <CodeBlock filename={path} code={content} />
{/each}
