---
title: Automatically Pause and Play a Video
order: 3
chapter: observers
slug: observers/pause-video
summary: Pause a playing video if it scrolls out of view.
---

You can use an `IntersectionObserver` to automatically pause a playing video if it scrolls out of view (`isIntersecting` is false).

When the countdown video starts, scroll the page so it moves completely out of view. The video will automatically pause. When you scroll it back into view, it will resume playing.
