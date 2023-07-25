const form = document.querySelector('#user-form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const data = new FormData(event.target);
  
  const body = {};
  for (const [key, value] of data.entries()) {
    body[key] = value;
  }

  fetch('/api/form', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'content-type': 'application/json'
    }
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
