---
title: Applying Pluralization Rules
order: 5
chapter: i18n
slug: i18n/pluralization
summary: Format a message differently depending on the number of items.
---

`Intl.PluralRules` can tell you what form of a message string you should use based on the number passed to its `select` method. 

It returns a key such as `one` or `other` (differs depending on the locale) that you can use to look up different messages.
