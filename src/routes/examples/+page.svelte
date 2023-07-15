<script>
  export let data;
</script>

<h2>Examples</h2>
<ul>
  {#each data.examples as { slug, title }}
    <a href="/examples/{slug}">{title}</a>
  {/each}
</ul>