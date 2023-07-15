<script>
  import CategoryCard from '../../../lib/components/CategoryCard.svelte';

  export let data;
</script>

<small>Chapter {data.metadata.chapter}</small>
<h1>{data.metadata.title}</h1>

<svelte:component this={data.component} />

<h3>Examples</h3>

<div class="row rol-cols-1 row-cols-md-2 g-4">
  {#each data.examples as { slug, title, summary, order }}
    <div class="col">
      <CategoryCard
        {title}
        href={`/examples/${slug}`}
        chapter={`Recipe ${data.metadata.chapter}.${order}`}
      >
        {summary}
      </CategoryCard>
    </div>
  {/each}
</div>
