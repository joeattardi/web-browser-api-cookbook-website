// Start the `loadTransactions` timer
console.time('loadTransactions');

// Load some data
const data = await fetch('/api/users/123/transactions');

// Stop the `loadTransactions` timer
// Prints: "loadTransactions: <elapsed time> ms"
console.timeEnd('loadTransactions');
