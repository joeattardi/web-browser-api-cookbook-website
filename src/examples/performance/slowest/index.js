const table = document.querySelector('#resource-table');

const slowestResources = window.performance.getEntriesByType('resource')
  .sort((a, b) => 
    (b.responseEnd - b.startTime) - (a.responseEnd - a.startTime))
  .slice(0, 5);

slowestResources.forEach(entry => {
  const row = document.createElement('tr');

  const time = document.createElement('td');
  time.textContent = Math.round(entry.responseEnd - entry.startTime);
  row.appendChild(time);

  const type = document.createElement('td');
  type.textContent = entry.initiatorType;
  row.appendChild(type);

  const url = document.createElement('td');
  url.textContent = entry.name;
  row.appendChild(url);

  table.appendChild(row);
});