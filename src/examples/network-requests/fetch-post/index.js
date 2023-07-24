/**
 * Creates a new user by sending a POST request to /api/users.
 * @param firstName The user's first name
 * @param lastName The user's last name
 * @param department The user's department
 * @returns a Promise that resolves to the API response body
 */
function createUser(firstName, lastName, department) {
  return fetch('/api/users', {
    method: 'POST',
    body: JSON.stringify({ firstName, lastName, department }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .catch(error => console.error('Error:', error.message));
}

const form = document.querySelector('#user-form');
form.addEventListener('submit', event => {
  event.preventDefault();

  const { firstName, lastName, department } = form.elements;
  console.log(department.value);

  createUser(firstName.value, lastName.value, department.value)
    .then(data => {
      const result = document.querySelector('#response');
      result.querySelector('pre').textContent = JSON.stringify(data, null, 2);
      result.classList.remove('d-none');
    });
});