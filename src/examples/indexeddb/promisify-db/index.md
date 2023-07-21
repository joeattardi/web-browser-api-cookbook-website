---
title: Promisifying the IndexedDB API
order: 6
chapter: indexeddb
slug: indexeddb/promisify-db
summary: Wrap the IndexedDB API with Promises to avoid passing callbacks or global variables.
---

Because IndexedDB APIs are event based, they can be wrapped in `Promise`s which makes the API a little easier to work with.
