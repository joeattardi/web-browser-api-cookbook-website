<script>
  export let name;
  export let href;
</script>

<div class="alert alert-warning" role="alert">
  <div class="d-flex align-items-center">
    <i class="bi bi-exclamation-triangle me-2"></i>
    <strong>Compatibility Note: {name}</strong>
  </div>
  <p>
    This feature may not be supported on all browsers yet. Please check
    the latest compatibility data before using in a production
    application.
  </p>
  <a href={href} class="link-body-emphasis">Browser support for {name}</a>
</div>
