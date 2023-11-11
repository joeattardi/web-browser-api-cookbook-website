// Look up all requests to the /api/users API
const entries = window.performance
  .getEntriesByName('https://localhost/api/users', 'resource');
