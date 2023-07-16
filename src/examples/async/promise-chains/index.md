---
title: Chaining Promises
order: 3
chapter: async
slug: async/promise-chains
summary: Call a sequence of Promise APIs, where each depends on the result of the previous.
---

This demo makes multiple asynchronous calls and builds a `Promise` chain. Each `Promise` success handler
returns a new `Promise`, which forms the chain. It simulates a sequence of network requests.

First, a user is loaded using the `getUser` function. Once the user object is returned, it loads the user's blog posts
via the `getPostTitles` function, and finally renders them when the chain is complete.
