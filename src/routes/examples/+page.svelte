<script>
  import CategoryCard from '../../lib/components/CategoryCard.svelte';

  export let data;
</script>

<svelte:head>
  <title>Examples by Chapter | Web Browser API Cookbook</title>
</svelte:head>
<h1>Examples by Chapter</h1>

<p>
  Each recipe in the book has a corresponding example. When possible, the book code has additional
  code added to make it a fully functioning demo. The code from the book, with minimal modifications,
  will appear at the top of the example's JavaScript code.
</p>

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