---
title: Loading Fonts
order: 2
chapter: css
slug: css/font-loading
summary: Use the CSS Font Loading API to control the loading of fonts.
---

You can use the CSS Font Loading API to get better control over when fonts are loaded. You are given a `Promise` that is
resolved once the font is loaded. You can use this to better manage the page loading process and prevent flashes of unstyled
text.
