<script>
  import Header from '$lib/components/Header.svelte';
</script>

<svelte:head>
  <title>Web Browser API Cookbook</title>
</svelte:head>
<div>
  <Header />
  <main><slot></slot></main>
</div>
