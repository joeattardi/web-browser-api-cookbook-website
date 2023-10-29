---
title: Positioning a Popover Relative to an Element
order: 7
chapter: ui
slug: ui/popover-position
summary: Position a popover relative to another element, such as its trigger.
---

<script>
  import CompatibilityWarning from '$lib/components/CompatibilityWarning.svelte';
</script>

<CompatibilityWarning name="Popover" href="https://caniuse.com/mdn-api_htmlelement_popover" />

You can get the reference element's position by calling `getBoundingClientRect` on it, and use the top or bottom offset to position the popover appropriately.

Note that popover content is placed in the [top layer](https://developer.mozilla.org/en-US/docs/Glossary/Top_layer). This means that even with `position: absolute`, the popover element is positioned relative to the viewport, even if the element with the `popover` element is inside another element with `position: relative`.
