<script>
  import Header from '$lib/components/Header.svelte';
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
<div>
  <Header />
  <main class="p-4 container"><slot></slot></main>
</div>
