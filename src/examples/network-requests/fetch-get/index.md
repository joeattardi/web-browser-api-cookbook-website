---
title: Sending a GET Request With the Fetch API
order: 2
chapter: network-requests
slug: network-requests/fetch-get
summary: Use the Fetch API to send a GET request to a web API.
---

Fetch is a modern replacement for `XMLHttpRequest`.

Unlike `XMLHttpRequest`, Fetch works with `Promise`s. The initial `fetch` call returns a promise that resolves to the response object. To get the JSON response body, we call `response.json()` which returns another `Promise`. Finally, that gives us the JSON response.

This example sends a `GET` request using the Fetch API.
