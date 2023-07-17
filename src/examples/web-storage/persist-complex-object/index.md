---
title: Persisting Complex Objects
order: 4
chapter: web-storage
slug: web-storage/persist-complex-object
summary: 'Use JSON replacer and reviver functions to customize object serialization.'
---

Fill out the user profile with a first and last name, then click Save. The profile data will be stored as an object in local storage. When you refresh the page, the previously saved profile data is shown.

The profile data includes a `lastUpdated` property that is automatically set when you click Save. `Date` objects can't be serialized directly to JSON, but you can use a replacer and reviver function to serialize the `Date` to a compatible type, and convert it back to a `Date` object when deserializing it.
