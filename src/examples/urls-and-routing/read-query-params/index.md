---
title: Reading Query Parameters
order: 4
chapter: urls-and-routing
slug: urls-and-routing/read-query-params
summary: "Parse a URL and list its query parameters."
---

Individual query parameters can be read using the URL's `searchParams` property, which is a `URLSearchParams` object.

This object has a `forEach` function to iterate over all key-value pairs, which can be used to get a list of all query parameters.

Enter a URL containing some parameters, and click the "Parse URL" button. A table will be shown with the parameter keys and values.
