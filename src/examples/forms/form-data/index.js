const form = document.querySelector('#user-form');

// In a real world application, the API token would be stored somewhere and
// not hard coded like this.
const apiToken = 'aBcD1234EfGh5678IjKlM';

form.addEventListener('submit', event => {
  event.preventDefault();

  const data = new FormData(event.target);
  data.set('apiToken', apiToken);

  fetch('/api/form', {
    method: 'POST',
    body: data
  })
    .then(response => response.json())
    .then(body => renderResults(body));
});

function renderResults(result) {
  const resultContainer = document.querySelector('#result');
  const list = resultContainer.querySelector('ul');

  for (const [key, value] of Object.entries(result)) {
    const item = document.createElement('li');
    item.innerHTML = `<strong>${key}</strong>: ${value}`;
    list.appendChild(item);
  }

  resultContainer.classList.remove('d-none');
}
