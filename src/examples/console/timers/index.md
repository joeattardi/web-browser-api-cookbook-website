---
title: Using Console Timers
order: 4
chapter: console
slug: console/timers
summary: Use timers to calculate how long an operation takes, and log the result.
---

To start a timer, call `console.time` with a name for your timer. Later, when the task you are timing has completed, call `console.timeEnd` with the same timer name. It will stop the timer and print the elapsed time to the console along with its name.
