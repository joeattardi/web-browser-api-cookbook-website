---
title: Reading the Battery Status
order: 1
chapter: device
slug: device/battery
summary: Read information using the Battery Status API.
---

<script>
  import CompatibilityWarning from '$lib/components/CompatibilityWarning.svelte';
</script>

<CompatibilityWarning name="Battery Status API" href="https://caniuse.com/battery-status" />

`navigator.getBattery` returns a `Promise` which resolves to an object containing information about the battery status. You can also subscribe to events to be notified about changes in the battery charge status.

This example shows the current charging status and battery level of your device, if available.