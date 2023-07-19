---
title: Matching URLs to Patterns
order: 6
chapter: urls-and-routing
slug: urls-and-routing/url-patterns
summary: "Match URLs against predefined patterns."
---
<script>
  import CompatibilityWarning from '$lib/components/CompatibilityWarning.svelte';
</script>

<CompatibilityWarning name="URLPattern API" href="https://caniuse.com/mdn-api_urlpattern">
</CompatibilityWarning>

This demo shows how to match patterns in URLs using the [URLPattern API](https://developer.mozilla.org/en-US/docs/Web/API/URLPattern). 
For each pattern input, you can enter an exact string to match or include wildcards and named groups.

Enter a URL in the last input and click "Check URL" to parse the URL and match against your pattern.

## Example patterns

Try some of these patterns for the hostname or pathname:

 - **Exact match**: `/api/users`
 - **Wildcards**: `/api/users/*`
 - **Named groups**: `/api/users/:userId/profile`
 - **Mix and match**: `/api/groups/:groupId/*/users/:userId`
 