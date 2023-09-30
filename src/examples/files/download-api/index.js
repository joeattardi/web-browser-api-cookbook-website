const exportLink = document.querySelector('#export-link');

let userList;

function loadUsers() {
  // Make the request
  return fetch('/api/users')
    // Parse the response body as an object
    .then(response => response.json())
    // Handle errors, including network and JSON parsing errors
    .catch(error => console.error('Couldn\'t fetch:', error.message));
}

loadUsers().then(data => {
  userList = data;
  document.querySelector('#loader').remove();
  renderUsers(userList);

  // Clean up the previous export data, if it exists.
  const currentUrl = exportLink.href;
  if (currentUrl) {
    URL.revokeObjectURL(currentUrl);
  }

  // Need a Blob for creating an object URL
  const blob = new Blob([JSON.stringify(userList, null, 2)], {
    type: 'application/json'
  });

  // The object URL links to the Blob contents - set this in the link
  const url = URL.createObjectURL(blob);
  exportLink.href = url;
  exportLink.classList.remove('d-none');
});

/**
 * Renders an array of users in the user table.
 * @param userList the array of users
 */
function renderUsers(userList) {
  const tableBody = document.querySelector('#users tbody');
  userList.forEach(user => {
    renderUser(user, tableBody);
  });
}

/**
 * Renders a user object as a row in the user table.
 * @param user the user object to render
 * @param tableBody the table body to append the row to
 */
function renderUser(user, tableBody) {
  const row = document.createElement('tr');
  
  const firstName = document.createElement('td');
  firstName.textContent = user.firstName;
  row.appendChild(firstName);

  const lastName = document.createElement('td');
  lastName.textContent = user.lastName;
  row.appendChild(lastName);

  const department = document.createElement('td');
  department.textContent = user.department;
  row.appendChild(department);

  tableBody.appendChild(row);
}
