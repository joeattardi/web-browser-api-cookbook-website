<script>
  import Header from '$lib/components/Header.svelte';
  import '../app.css';
</script>

<div>
  <Header />
  <main class="p-4 container"><slot></slot></main>
</div>
