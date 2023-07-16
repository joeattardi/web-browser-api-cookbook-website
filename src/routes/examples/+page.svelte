<script>
  import CategoryCard from '../../lib/components/CategoryCard.svelte';

  export let data;
</script>

<svelte:head>
  <title>Examples by Chapter | Web Browser API Cookbook</title>
</svelte:head>
<h1>Examples by Chapter</h1>
<div class="grid mt-4">
  {#each data.chapters as { slug, title, summary, chapter }}
    <CategoryCard {title} href={`/examples/${slug}`} chapter={`Chapter ${chapter}`}>
      {summary}
    </CategoryCard>
  {/each}
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-auto-rows: minmax(0, 1fr);
    gap: 1rem;
  }
</style>