const table = document.querySelector('#resource-table');

const entries = window.performance.getEntriesByType('resource');
entries.forEach(entry => {
  const row = document.createElement('tr');

  const type = document.createElement('td');
  type.textContent = entry.initiatorType;
  row.appendChild(type);

  const url = document.createElement('td');
  url.textContent = entry.name;
  row.appendChild(url);

  const time = document.createElement('td');
  time.textContent = Math.round(entry.responseEnd - entry.startTime);
  row.appendChild(time);

  table.appendChild(row);
});