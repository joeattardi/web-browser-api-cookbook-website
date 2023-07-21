---
title: Lazy Loading an Image
order: 1
chapter: observers
slug: observers/lazy-image
summary: Defer loading of an image until it is scrolled into view.
---

The demo area is scrollable. There is an image that is initially hidden. If you start to scroll down,
the image won't load until it becomes visible in the viewport.

It doesn't wait for the image to be _fully_ within the viewport. As soon as it becomes partially visible,
the image loads.

