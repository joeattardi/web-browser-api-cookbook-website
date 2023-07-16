<script>
  export let title;
  export let href;
  export let chapter;
</script>

<div class="card h-100">
  <div class="card-body">
    <small class="text-uppercase">{chapter}</small>
    <h5 class="card-title">
      <a href={href} class="link-underline-opacity-0 link-underline stretched-link">{title}</a>
    </h5>
    <p><slot></slot></p>
  </div>
</div>

<style>
  .card {
    background: #f8fafc;
  }

  .card:hover {
    background: #f1f5f9;
  }
</style>