---
title: Highlighting Text Ranges
order: 1
chapter: css
slug: css/highlight
summary: Use the CSS Custom Highlight API to highlight text ranges.
---

<script>
  import CompatibilityWarning from '$lib/components/CompatibilityWarning.svelte';
</script>

<CompatibilityWarning name="Highlight API" href="https://caniuse.com/mdn-api_highlight" />

You can use the CSS Custom Highlight API to highlight arbitrary ranges of text in the document. There are three general steps to do this:

1. Create a `Range` object that contains the text you want to highlight.
1. Register the highlighted range with the API under a unique name.
1. Use the `highlight` pseudo-element to apply the styles you want to the highlight, referencing the name.
