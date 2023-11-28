const query = window.matchMedia('(prefers-color-scheme: dark)');
query.addEventListener('change', () => {
  if (query.matches) {
    // switch to dark mode
  } else {
    // switch to light mode
  }
});
