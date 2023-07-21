<script>
  import { browser } from '$app/environment';
  let isDark = null;

  if (browser) {
    const cachedTheme = sessionStorage.getItem('theme');

    if (cachedTheme != null) {
      isDark = cachedTheme === 'dark';
    } else {
      isDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
    }
    document.documentElement.dataset.bsTheme = isDark ? 'dark' : 'light';
  }

  function toggleTheme() {
    isDark = !isDark;
    document.documentElement.dataset.bsTheme = isDark ? 'dark' : 'light';
    sessionStorage.setItem('theme', isDark ? 'dark' : 'light');
  }
</script>

<button
  style={isDark == null ? 'opacity: 0;' : 'opacity: 1'}
  class="ms-4 nav-link link-light"
  on:click={toggleTheme}
>
    <i class="bi {isDark ? 'bi-moon-stars-fill' : 'bi-sun-fill'}" />
</button>