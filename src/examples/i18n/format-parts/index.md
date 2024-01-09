---
title: Getting the Parts of a Formatted Date
order: 2
chapter: i18n
slug: i18n/format-parts
summary: Format a Date object.
---

The `formatToParts` method returns an array of tokens representing a formatted date. The resulting array looks like this:

```
[
  { type: 'month', value: '10' },
  { type: 'literal': value: '/' },
  { type: 'day': value: '1' },
  { type: 'literal', value: '/' },
  { type: 'year', value: '23' }
]
```