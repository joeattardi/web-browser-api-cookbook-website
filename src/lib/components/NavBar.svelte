<script>
  import DarkModeToggle from './DarkModeToggle.svelte';
</script>

<nav class="navbar navbar-expand-sm justify-content-end bg-body-tertiary" data-bs-theme="dark">
  <div class="container-fluid">
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
      <a class="navbar-brand d-flex align-items-center" href="/">
        <img class="me-2" src="/logo.png" alt="Logo">
        <strong>Web Browser API Cookbook</strong>
      </a>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="/examples">Examples</a>
        </li>
        <li>
          <a class="nav-link" href="/about">About</a>
        </li>
      </ul>
    </div>
    <div class="d-flex">
      <a class="nav-link link-light fs-4" href="https://github.com/joeattardi/web-browser-api-cookbook"><i class="bi bi-github"></i></a>
      <DarkModeToggle />
    </div>
  </div>
</nav>

<style>
  .navbar-brand img {
    width: 3rem;
  }
</style>