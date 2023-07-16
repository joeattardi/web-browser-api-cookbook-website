<script>
  export let active = false;
  export let href = '';
</script>

{#if active}
  <li class="breadcrumb-item active" aria-current="page"><slot></slot></li>
{:else}
  <li class="breadcrumb-item">
    <a href={href}><slot></slot></a>
  </li>
{/if}
