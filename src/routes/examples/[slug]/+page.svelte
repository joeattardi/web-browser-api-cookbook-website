<script>
  import Breadcrumb from "../../../lib/components/Breadcrumb.svelte";
  import Breadcrumbs from "../../../lib/components/Breadcrumbs.svelte";
  import CategoryCard from "../../../lib/components/CategoryCard.svelte";

  export let data;
</script>

<div class="p-4">
  <Breadcrumbs>
    <Breadcrumb href="/examples">Examples</Breadcrumb>
    <Breadcrumb active>{data.metadata.title}</Breadcrumb>
  </Breadcrumbs>

  <small class="text-uppercase">Chapter {data.metadata.chapter}</small>
  <h1>{data.metadata.title}</h1>

  <svelte:component this={data.component} />

  <h3>Examples</h3>

  <div class="row row-cols-1 row-cols-md-2 mt-4 g-2">
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
</div>
