<script>
  import Header from '$lib/components/Header.svelte';
  import '../app.css';
</script>

<svelte:head>
  <title>Web Browser API Cookbook</title>
</svelte:head>
<div>
  <Header />
  <main class="p-4"><slot></slot></main>
</div>
