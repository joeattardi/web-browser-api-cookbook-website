/**
 * Sends a GET request to the specified URL. Returns a Promise that will resolve to the
 * JSON body parsed as an object, or will reject if there is an error or the response is not
 * valid JSON.
 * 
 * @param url The URL to request
 * @returns a Promise that resolves to the response body
 */
function loadJSON(url) {
  // Create a new Promise object, performing the async work inside the
  // constructor function.
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    // If the request is successful, parse the JSON response and
    // resolve the `Promise` with the resulting object
    request.addEventListener('load', event => {
      // Wrap the JSON.parse call in a try/catch block just in case
      // the response body is not valid JSON.
      try {
        resolve(JSON.parse(event.target.responseText));
      } catch (error) {
        // There was an error parsing the response body.
        // Reject the `Promise` with this error.
        reject(error);
      }
    });

    // If the request fails, reject the `Promise` with the
    // error that was emitted
    request.addEventListener('error', error => {
      reject(error);
    });

    // Set the target URL and send the request
    request.open('GET', url);
    request.send();
  });
}

loadJSON('/api/users')
  .then(userList => {
    document.querySelector('#loader').remove();
    renderUsers(userList);
  }).catch(error => {
    console.error('Failed to load user list:', error);
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
  