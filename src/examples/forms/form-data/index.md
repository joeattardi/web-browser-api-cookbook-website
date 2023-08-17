---
title: Submitting a Form with Fetch and the FormData API
order: 2
chapter: forms
slug: forms/form-data
summary: Use the Fetch API to submit a form, adding extra data with the FormData API.
---

Imagine a form to add a new user. The API for this form requires an API token that is stored in memory. This example shows how to use the `FormData` API to add extra data before submitting the form.

Enter a username (or keep the default one), and click Submit. The API token is added to the request.

The form endpoint will echo back the data it received, so you can see the API token that was added.
