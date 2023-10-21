---
title: Creating a Lazy Loading Image Component
order: 5
chapter: web-components
slug: web-components/wc-lazy-img
summary: Build a custom image component that is lazily loaded when it enters the viewport.
---

<script>
  import CompatibilityWarning from '$lib/components/CompatibilityWarning.svelte';
</script>

<CompatibilityWarning name="Extending built-in elements" href="https://caniuse.com/custom-elementsv1" />

This example extends the `<img>` element to create a lazy loaded version. The image will not load until it scrolls into the viewport.
