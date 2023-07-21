<script>
  import Header from '$lib/components/Header.svelte';
  import '../app.css';
</script>

<svelte:head>
  <script>
    const darkQuery = window.matchMedia?.('(prefers-color-scheme: dark)');
    const cachedTheme = sessionStorage.getItem('theme');

    if (cachedTheme != null) {
      document.documentElement.dataset.bsTheme = cachedTheme;
    } else {
      document.documentElement.dataset.bsTheme = darkQuery.matches ? 'dark' : 'light';
    }
  </script>
</svelte:head>
<div>
  <Header />
  <main class="p-4 container"><slot></slot></main>
</div>
