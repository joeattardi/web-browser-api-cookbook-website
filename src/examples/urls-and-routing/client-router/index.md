---
title: Creating a Simple Client Side Router
order: 5
chapter: urls-and-routing
slug: urls-and-routing/client-router
summary: "Build a simple router that navigates between views without reloading the page."
---

This is an example of basic client-side routing using the History API.

Clicking a link will change the URL by calling `history.pushState` and replace the app contents with the new route. If you  
click the browser's Back or Forward button, it handles the `popstate` event to show the proper content. This is all done 
on the client side only. Other than the initial page load, no requests are sent to the server.

This type of routing is common with single-page applications.
