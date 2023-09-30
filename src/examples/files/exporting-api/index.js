const exportButton = document.querySelector('#export-button');

let userList;

/**
 * Shows a save file picker and returns the selected file handle.
 * @returns a file handle to the selected file, or null if the user clicked Cancel
 */
async function selectOutputFile() {
  try {
    return window.showSaveFilePicker({
      // The default name for the output file
      suggestedName: 'users.json',

      // Limit the available file extensions
      types: [
        { description: "JSON", accept: { "application/json": [".json"] } }
      ]
    });
  } catch (error) {
    // If the user clicks Cancel, an exception is thrown. In this case,
    // return null to indicate no file was selected.
    return null;
  }
}

async function exportData() {
  const outputFile = await selectOutputFile();

  // Only proceed if an output file was actually selected
  if (outputFile) {
    try {
      // Prepare a writable stream, which is used to save the file
      // to disk.
      const stream = await outputFile.createWritable();

      // Write the JSON, in a human readable format, to the stream.
      await stream.write(JSON.stringify(userList, null, 2));
      await stream.close();

      // Show a success message.
      document.querySelector('#export-success').classList.remove('d-none');
    } catch (error) {
      console.error(error);
    }
  }
}

exportButton.addEventListener('click', () => {
  exportData();
});

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

  if ('showSaveFilePicker' in window) {
    exportButton.classList.remove('d-none');
  }
  
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
