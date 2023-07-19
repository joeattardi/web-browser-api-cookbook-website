function loadUsers() {
  // Make the request
  return fetch('/api/users')
    // Parse the response body as an object
    .then(response => response.json())
    // Handle errors, including network and JSON parsing errors
    .catch(error => console.error('Couldn\'t fetch:', error.message));
}

loadUsers().then(userList => {
  console.log('Got users:', userList);
  document.querySelector('#loader').remove();
  renderUsers(userList);
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
