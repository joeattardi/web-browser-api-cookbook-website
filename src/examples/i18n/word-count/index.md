---
title: Counting Characters, Words, and Sentences
order: 6
chapter: i18n
slug: i18n/word-count
summary: Split up a string into locale-specific segments to count words and sentences.
---

<script>
  import CompatibilityWarning from '$lib/components/CompatibilityWarning.svelte';
</script>

<CompatibilityWarning name="Intl.Segmenter" href="https://caniuse.com/mdn-javascript_builtins_intl_segmenter" />

The `Intl.Segmenter` API breaks a string up into segments. The segment boundaries are determined by the segmenter's configured granularity. You can configure a segmenter to segment the string by sentences, words, or individual characters (referred to by the API as graphemes).

This example uses `Intl.Segmenter` to generate a character, word, and sentence count as you type in the text area.
