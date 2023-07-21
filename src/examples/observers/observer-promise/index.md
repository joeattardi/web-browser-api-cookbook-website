---
title: Wrapping an IntersectionObserver with a Promise
order: 2
chapter: observers
slug: observers/observer-promise
summary: Create a Promise that is resolved once a given element becomes visible.
---

You can promisify an `IntersectionObserver` by wrapping it in a `Promise` constructor, and resolving
the `Promise` once the `isIntersecting` property becomes `true`.
