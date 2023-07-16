// Loading three users at once
Promise.all([
  getUser(1),
  getUser(2),
  getUser(3)
]).then(users => {
  // users is an array of user objects - the values returned from
  // the parallel getUser calls
  document.querySelector('#loader').remove();
  renderUsers(users);
}).catch(error => {
  // If any of the above Promises are rejected
  console.error('One of the users failed to load:', error);
});

function renderUsers(users) {
  const tableBody = document.querySelector('#users tbody');
  users.forEach(user => {
    renderUser(user, tableBody);
  });
}

const list = document.querySelector('#users');

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

const users = [
  { id: 1, firstName: "John", lastName: "Smith", department: "Sales" },
  { id: 2, firstName: "Emily", lastName: "Johnson", department: "Marketing" },
  { id: 3, firstName: "Michael", lastName: "Davis", department: "Human Resources" },
];  

function getUser(userId) {
  return new Promise(resolve => {
    console.log(`Finding user with id ${userId}`)
    // Use setTimeout to simluate request latency
    setTimeout(() => {
      const user = users.find(user => user.id === userId);
      console.log(`Found user ${userId}: ${user.firstName} ${user.lastName}`);
      resolve(user);
    }, 1500);
  });
}
