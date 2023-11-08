---
title: Making the Device Vibrate
order: 6
chapter: device
slug: device/vibration
summary: Use the Vibration API to programmatically vibrate the device.
---

<script>
  import CompatibilityWarning from '$lib/components/CompatibilityWarning.svelte';
</script>

<CompatibilityWarning name="Vibration API" href="https://caniuse.com/vibration" />

The `navigator.vibrate` method, on supported devices, lets you make the device vibrate to call attention to the user.

You can trigger a single vibration, or a sequence of vibrations and pauses.
