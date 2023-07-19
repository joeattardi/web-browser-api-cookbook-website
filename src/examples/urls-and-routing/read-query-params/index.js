/**
 * Takes a URL and returns an array of its query parameters.
 * 
 * @param inputUrl A URL string
 * @returns An array of objects with key and value properties
 */
function getQueryParameters(inputUrl) {
  // Can't use an object here because there may be multiple
  // parameters with the same key, and we want to return all parameers.
  const result = [];

  const url = new URL(inputUrl);

  // Add each key/value pair to the result array
  url.searchParams.forEach((value, key) => {
    result.push({ key, value });
  });

  // Results are ready!
  return result;
}

const form = document.querySelector('#url-form');
form.addEventListener('submit', event => {
  event.preventDefault();

  const table = document.querySelector('#query-params');
  const tableBody = document.querySelector('#query-params tbody');

  // Remove the previous table rows.
  tableBody.innerHTML = '';

  const params = getQueryParameters(form.elements.url.value);

  // For each key-value pair, render a row in the table.
  params.forEach(param => {
    const row = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.className = 'font-monospace';
    nameCell.textContent = param.key;
    row.append(nameCell);

    const valueCell = document.createElement('td');
    valueCell.className = 'font-monospace';
    valueCell.textContent = param.value;
    row.append(valueCell);
    
    tableBody.appendChild(row);
  });

  // Show the table, if it was hidden.
  table.classList.remove('d-none');
});
