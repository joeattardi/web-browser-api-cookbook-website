// There is only one navigation performance entry.
const [navigation] = window.performance.getEntriesByType('navigation');

document.querySelector('#load-time').textContent = 
  `${(navigation.loadEventEnd - navigation.startTime).toFixed(2)}ms`;

document.querySelector('#ttfb').textContent = 
  `${(navigation.responseStart - navigation.startTime).toFixed(2)}ms`;

document.querySelector('#interactive').textContent =
  `${(navigation.domInteractive - navigation.startTime).toFixed(2)}ms`;
  