---
title: Searching for String Values With Cursors
order: 4
chapter: indexeddb
slug: indexeddb/cursor-search
summary: Search for string values by iterating over records with a cursor.
---

One of IndexedDB's limitations is there isn't a built-in way to match object properties against a string pattern using indexes.

It's less efficient, but you can do this by using a cursor.

This employee database can be filtered by employee name. Type a partial name pattern to filter the list.
