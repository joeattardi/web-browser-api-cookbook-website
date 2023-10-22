---
title: Creating a Confirmation Dialog Web Component
order: 3
chapter: ui
slug: ui/confirm-component
summary: Encapsulate the dialog logic in a custom element.
---

This example creates a confirmation dialog wrapped in a web component (custom element).
It makes the flow of showing the modal and waiting for the result a little easier by using a
`Promise`.

When the custom dialog's `showModal` method is called, it shows the underlying dialog and returns
a `Promise` that will be resolved once the modal is either confirmed or cancelled. The value of
the `Promise` will be a boolean - `true` if the user confirmed, or `false` if they canceled.
