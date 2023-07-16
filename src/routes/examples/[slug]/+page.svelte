<script>
  import Breadcrumb from '../../../lib/components/Breadcrumb.svelte';
  import Breadcrumbs from '../../../lib/components/Breadcrumbs.svelte';
  import CategoryCard from '../../../lib/components/CategoryCard.svelte';

  export let data;
</script>

<Breadcrumbs>
  <Breadcrumb href="/examples">Examples</Breadcrumb>
  <Breadcrumb active>{data.metadata.title}</Breadcrumb>
</Breadcrumbs>

<small class="text-uppercase">Chapter {data.metadata.chapter}</small>
<h1>{data.metadata.title}</h1>

<svelte:component this={data.component} />

<h3>Examples</h3>

<div class="grid mt-4">
  {#each data.examples as { slug, title, summary, order }}
      <CategoryCard
        {title}
        href={`/examples/${slug}`}
        chapter={`Recipe ${data.metadata.chapter}.${order}`}
      >
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
