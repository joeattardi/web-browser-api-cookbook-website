---
title: Exporting API Data With a Download Link
order: 7
chapter: files
slug: files/download-api
summary: Call a remote API, then export the JSON data by triggering a file download.
---

If you don't want to worry about file permissions, or if you need wider browser support, you can convert the data to a `Blob` and create an object URL, which you can then set as a link's `href` attribute. This will download the data like a normal file download from the browser.
