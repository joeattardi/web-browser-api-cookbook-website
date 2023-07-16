---
title: Using the async and await Keywords
order: 4
chapter: async
slug: async/async-await
summary: Load some data using a Promise-based API, and wait for the Promise with the await keyword.
---

This example shows the basics of working with a `Promise` based API. It has a `getUsers` function which simulates a network request with a delay.

When the `Promise` is resolved, the user list is rendered. This example uses the `await` keyword instead of calling `then` on the `Promise`.
