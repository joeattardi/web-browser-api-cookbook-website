getUsers()
  // This function is called when the user list has been loaded.
  .then(userList => {
    renderUsers(userList);
  }).catch(error => { // Called if there is an error
    console.error('Failed to load user list:', error);
  });

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

/**
 * Retrieves an array of users after simulating a network request delay.
 * @returns a Promise that resolves to the users array
 */
function getUsers() {
  const users = [
    { firstName: "John", lastName: "Smith", department: "Sales" },
    { firstName: "Emily", lastName: "Johnson", department: "Marketing" },
    { firstName: "Michael", lastName: "Davis", department: "Human Resources" },
    { firstName: "Sarah", lastName: "Thompson", department: "Finance" },
    { firstName: "David", lastName: "Wilson", department: "Engineering" }
  ];    

  return new Promise(resolve => {
    // Use setTimeout to simluate request delay
    setTimeout(() => {
      document.querySelector('#loader').remove();
      resolve(users);
    }, 1500);
  });
}
