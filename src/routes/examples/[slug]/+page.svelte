<script>
  export let data;
</script>

<h2>{data.metadata.title}</h2>

<svelte:component this={data.component} />

<h3>Examples</h3>

<ul>
  {#each data.examples as { slug, title }}
    <a href="/examples/{slug}">{title}</a>
  {/each}
</ul>
