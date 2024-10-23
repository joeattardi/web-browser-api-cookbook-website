<script>
  import CategoryCard from '../../lib/components/CategoryCard.svelte';

  export let data;
</script>

<svelte:head>
  <title>Examples by Chapter | Web API Cookbook</title>
  <meta property="og:title" content="Examples by Chapter | Web API Cookbook" />
  <meta aproperty="twitter:title" content="Examples by Chapter | Web API Cookbook" />
</svelte:head>
<div class="p-4">
  <h1>Examples by Chapter</h1>

  <p>
    Each recipe in the book has a corresponding example. When possible, the book
    code has additional code added to make it a fully functioning demo. The code
    from the book, with minimal modifications, will appear at the top of the
    example's JavaScript code.
  </p>

  <p>
    When running the demos, check the browser console for additional logging
    output.
  </p>

  <div class="row row-cols-1 row-cols-md-2 mt-4 g-2">
    {#each data.chapters as { slug, title, summary, chapter }}
      <div class="col">
        <CategoryCard
          {title}
          href={`/examples/${slug}`}
          chapter={`Chapter ${chapter}`}
        >
          {summary}
        </CategoryCard>
      </div>
    {/each}
  </div>
</div>