---
title: Applying a Transition When an Element Scrolls Into View
order: 6
chapter: observers
slug: observers/animate-on-scroll
summary: Make content appear with an animation effect as it is scrolled into view.
---

You can make content appear as it becomes visible with an animation effect. The element starts out hidden, and is observed with an `IntersectionObserver`. 
Once the element becomes partially visible, the style changes and an animated transition is shown.

Scroll down in the container below and you'll see some cats appear with a fade and scale effect.
