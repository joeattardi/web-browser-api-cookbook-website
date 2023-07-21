// Once the database is opened, it will be assigned to this variable.
let employeeDb;

/**
 * Searches for employees by name.
 * 
 * @param name A query string to match employee names
 * @param onSuccess Success callback that will receive the matching employees.
 */
function searchEmployees(name, onSuccess) {
  // An array to hold all contacts with a name containing the query text.
  const results = [];

  const query = name.toLowerCase();

  const request = employeeDb
    .transaction(['employees'], 'readonly')
    .objectStore('employees')
    .openCursor();
  

  // The cursor request will emit a `success` event for each object it finds
  request.addEventListener('success', () => {
    const cursor = request.result;
    if (cursor) {
      const name = `${cursor.value.firstName} ${cursor.value.lastName}`.toLowerCase();
      // Add the contact to the result array if it matches the query.
      if (name.includes(query)) {
        results.push(cursor.value);
      }

      // Continue to the next record.
      cursor.continue();
    } else {
      onSuccess(results);
    }
  });

  request.addEventListener('error', () => {
    console.error('Error searching employees:', request.error);
  });
}

/**
 * Opens the database, creating the object store and index if needed.
 * Once the database is ready, `onSuccess` will be called with the database object.
 * 
 * @param onSuccess A callback function that is executed when the database is ready
 */
function openDatabase(onSuccess) {
  const request = indexedDB.open('employees-cursor');

  // Keep track of whether or not the database needs to be populated.
  let shouldPopulate = false;

  request.addEventListener('upgradeneeded', () => {
    const db = request.result;

    // New employee objects will be given an auto-generated 
    // `id` property which serves as its key.
    const employeesStore = db.createObjectStore('employees', {
      keyPath: 'id',
      autoIncrement: true,
    });

    // If the upgradeneeded event was triggered, that means the database
    // didn't exist yet, so the database needs to be populated.
    // Data can't be inserted during this event, so the success handler
    // will check its value and populate the database if needed.
    shouldPopulate = true;
  });

  request.addEventListener('success', () => {
    const db = request.result;

    if (shouldPopulate) {
      // If the flag is set, populate the database, passing along the 
      // onSuccess callback
      populateDatabase(db, onSuccess);
    } else {
      // Otherwise, call the onSuccess callback
      onSuccess(db);
    }
  });

  request.addEventListener('error', () => {
    console.error('Error opening database:', request.error);
  });
}

/**
 * Gets employees, either by loading all employees or querying by
 * a name pattern.
 * 
 * @param name (optional) A name query string
 * @param onSuccess Success callback that will receive the employees.
 */
function getEmployees(name, onSuccess) {
  if (name) {
    searchEmployees(name, onSuccess);
  } else {
    getAllEmployees(onSuccess);
  }
}

function getAllEmployees(onSuccess) {
  const request = employeeDb
    .transaction(['employees'], 'readonly')
    .objectStore('employees')
    .getAll();

  request.addEventListener('success', () => {
    console.log('Got employees:', request.result);
    onSuccess(request.result);
  });

  request.addEventListener('error', () => {
    console.log('Error loading employees:', request.error);
  });
}

/**
 * Reads the employees from the database, and renders them in the table.
 * @param name The name to filter by (optional)
 */
function renderEmployees(name) {
  getEmployees(name, employees => {
    const tbody = document.querySelector('.table tbody');

    // Remove the current employee rows
    tbody.innerHTML = '';

    employees.forEach(employee => {
      const row = document.createElement('tr');

      const firstName = document.createElement('td');
      firstName.textContent = employee.firstName;
      row.appendChild(firstName);

      const lastName = document.createElement('td');
      lastName.textContent = employee.lastName;
      row.appendChild(lastName);

      const department = document.createElement('td');
      department.textContent = employee.department;
      row.appendChild(department);

      tbody.appendChild(row);
    })
  });
}

openDatabase(db => {
  employeeDb = db;
  renderEmployees();
});

const searchField = document.querySelector('#name-filter');
searchField.addEventListener('input', () => {
  renderEmployees(searchField.value);
});

/**
 * Populates the database with seed data.
 * @param db the IndexedDB object
 * @param onSuccess A callback to execute once the database is populated
 */
function populateDatabase(db, onSuccess) {
  const employees = [
    { firstName: "John", lastName: "Doe", department: "Sales" },
    { firstName: "Jane", lastName: "Smith", department: "HR" },
    { firstName: "Michael", lastName: "Johnson", department: "Finance" },
    { firstName: "Emily", lastName: "Williams", department: "Marketing" },
    { firstName: "David", lastName: "Brown", department: "IT" },
    { firstName: "Sarah", lastName: "Miller", department: "Operations" },
    { firstName: "James", lastName: "Taylor", department: "Sales" },
    { firstName: "Linda", lastName: "Anderson", department: "HR" },
    { firstName: "Robert", lastName: "Clark", department: "Finance" },
    { firstName: "Karen", lastName: "White", department: "Marketing" }
  ];

  const transaction = db.transaction(['employees'], 'readwrite');
  const store = transaction.objectStore('employees');
  employees.forEach(employee => {
    store.add(employee);
  });

  transaction.addEventListener('complete', () => {
    console.log('Database was populated');
    onSuccess(db);
  });
}
