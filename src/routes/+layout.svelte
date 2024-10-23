<script>
  import { page } from '$app/stores';
  import Header from '$lib/components/Header.svelte';
  import Footer from '../lib/components/Footer.svelte';
  import '../app.css';
</script>

<svelte:head>
  <meta property="og:url" content={$page.url.href} />

  <meta property="twitter:url" content={$page.url.href} />

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
<div class="layout d-flex flex-column">
  <Header />
  <main class="container-fluid p-0 flex-grow-1"><slot></slot></main>
  <Footer />
</div>

<style>
  .layout {
    height: 100vh;
  }
</style>