<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '../lib/components/Footer.svelte';
  import '../app.css';
</script>

<svelte:head>
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-Z5LMK9PJKM"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'G-Z5LMK9PJKM');
  </script>

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