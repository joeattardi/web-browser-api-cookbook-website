const resultList = document.querySelector('#results');
const requestButton = document.querySelector('#request-button');

requestButton.addEventListener('click', async () => {
  requestButton.disabled = true;
  requestButton.textContent = 'Loading...';
  await fetch('https://httpbin.org/get');
  requestButton.disabled = false;
  requestButton.textContent = 'Make API Request';
});

const observer = new PerformanceObserver(entries => {
  for (let entry of entries.getEntries()) {
    if (entry.initiatorType === 'fetch' && entry.name !== 'https://httpbin.org/get2') {
      const item = document.createElement('li');
      item.className = 'list-group-item';
      item.textContent = `API request to ${entry.name} took ${Math.round(entry.responseEnd - entry.startTime)}ms.`

      resultList.insertBefore(item, resultList.firstChild);
      fetch('https://httpbin.org/get2');
    }
  }
});

observer.observe({ type: 'resource' });
