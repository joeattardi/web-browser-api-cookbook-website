---
title: Upgrading an Existing Database
order: 2
chapter: indexeddb
slug: indexeddb/upgrading
summary: Add a new object store to a database by incrementing its version number.
---

This example is a contact list database implemented with IndexedDB. Contacts can be created, read, and deleted.

If you add a new object store to your database, you need to increment the database version. This triggers an
`upgradeneeded` event where you can check the old version and determine which object store(s) need to be created.
