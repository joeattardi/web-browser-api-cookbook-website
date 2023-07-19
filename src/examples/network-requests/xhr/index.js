function loadUsers() {
  const request = new XMLHttpRequest();

  request.addEventListener('load', event => {
    // The event target is the XHR itself; it contains a 
    // responseText property that we can use to create a JavaScript object from
    // the JSON text.
    const users = JSON.parse(event.target.responseText);
    console.log('Got users:', users);
    document.querySelector('#loader').remove();
    renderUsers(users);
  });

  // Handle any potential errors with the request.
  // This only handles network errors. If the request 
  // returns an error status like 404, the `load` event still fires
  // where you can inspect the status code.
  request.addEventListener('error', err => {
    console.log('Error!', err);
  });
  
  request.open('GET', `/api/users`);
  request.send();
}

loadUsers();

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