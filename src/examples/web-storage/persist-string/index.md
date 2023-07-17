---
title: Persisting String Data
order: 2
chapter: web-storage
slug: web-storage/persist-string
summary: 'Use local storage to remember the color selected with a color picker.'
---

A simple string value is a perfect use case for local storage. It can be stored and loaded without performing any serialization or conversion. This makes it well suited to "remembering" default form values. 

This example has a color picker that uses local storage to remember the last color selected, and sets it as the default color when the page is reloaded.
