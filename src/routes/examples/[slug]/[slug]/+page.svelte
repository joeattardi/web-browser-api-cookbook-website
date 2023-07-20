<script>
  import { onMount } from 'svelte';
  import highlightTheme from 'svelte-highlight/styles/night-owl';

  import Breadcrumb from '../../../../lib/components/Breadcrumb.svelte';
  import Breadcrumbs from '../../../../lib/components/Breadcrumbs.svelte';
  import CodeBlock from '../../../../lib/components/CodeBlock.svelte';

  export let data;

  const { html, js } = data.sourceFiles;

  onMount(() => {
    if (js && html) {
      const scriptTag = document.createElement('script');
      scriptTag.textContent = `
        (function() {
          ${js}
        })();
        `;
      document.body.appendChild(scriptTag);
    }
  });
</script>

<svelte:head>
  {@html highlightTheme}
</svelte:head>

<Breadcrumbs>
  <Breadcrumb href="/examples">Examples</Breadcrumb>
  <Breadcrumb href="/examples/{data.chapter.metadata.slug}">{data.chapter.metadata.title}</Breadcrumb>
  <Breadcrumb active>{data.metadata.title}</Breadcrumb>
</Breadcrumbs>

<small class="text-uppercase">Recipe {data.chapter.metadata.chapter}.{data.metadata.order}</small>
<h1>{data.metadata.title}</h1>

<svelte:component this={data.component} />

{#if html}
<h3>Demo</h3>
<div class="card p-4 my-4">
  <div class="card-body">
    {@html html}
  </div>
</div>
{/if}

{#if html || js}
  <h3>Code</h3>

  {#if js}
    <CodeBlock type="javascript" code={js} />
  {/if}

  {#if html}
    <CodeBlock type="html" code={html} />
  {/if}
{/if}
