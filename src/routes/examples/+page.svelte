<script>
  import CategoryCard from '../../lib/components/CategoryCard.svelte';

  export let data;
</script>

<h1>Examples by Chapter</h1>
<div class="grid">
  {#each data.examples as { slug, title, summary, chapter }}
    <CategoryCard {title} href={`/examples/${slug}`} chapter={`Chapter ${chapter}`}>
      {summary}
    </CategoryCard>
  {/each}
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
  }
</style>