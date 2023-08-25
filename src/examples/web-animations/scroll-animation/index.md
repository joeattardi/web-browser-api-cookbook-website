---
title: Showing a Scroll Progress Indicator
order: 5
chapter: web-animations
slug: web-animations/scroll-animation
summary: Animate an element as you scroll.
---

<script>
  import CompatibilityWarning from '$lib/components/CompatibilityWarning.svelte';
</script>

<CompatibilityWarning name="ScrollTimeline API" href="https://caniuse.com/mdn-api_scrolltimeline" />

You can use a `ScrollTimeline` to link an animation's progress to an element's scroll position. The animation seeks back and forth in sync with the scroll position.

Scroll the article below and (on supported browsers) you'll see an animated progress bar grow and shrink as you scroll.
