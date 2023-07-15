  getUsers()
  // This function is called when the user list has been loaded.
  .then(userList => {
    userList.forEach(user => {
      renderUser(user);
    })
  }).catch(error => { // Called if there is an error
    console.error('Failed to load user list:', error);
  });

  const tableBody = document.querySelector('#users tbody');

  function renderUser(user) {
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

  function getUsers() {
    const users = [
      { firstName: "John", lastName: "Smith", department: "Sales" },
      { firstName: "Emily", lastName: "Johnson", department: "Marketing" },
      { firstName: "Michael", lastName: "Davis", department: "Human Resources" },
      { firstName: "Sarah", lastName: "Thompson", department: "Finance" },
      { firstName: "David", lastName: "Wilson", department: "Engineering" }
    ];    

    return new Promise(resolve => {
      // Use setTimeout to simluate request latency
      setTimeout(() => {
        document.querySelector('#loader').remove();
        resolve(users);
      }, 1500);
    });
  }
// });