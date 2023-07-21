// Once the database is opened, it will be assigned to this variable.
let employeeDb;

/**
 * Opens the database, creating the object store and index if needed.
 * Once the database is ready, `onSuccess` will be called with the database object.
 * 
 * @param onSuccess A callback function that is executed when the database is ready
 */
function openDatabase(onSuccess) {
  const request = indexedDB.open('employees');

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

    // Create an index on the `department` property called `department`.
    employeesStore.createIndex('department', 'department');

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
}

/**
 * Gets the employees for a given department, or all employees
 * if no department is given.
 * 
 * @param department The department to filter by (optional)
 * @param onSuccess A callback function that is executed when the employees are loaded
 */
function getEmployees(department, onSuccess) {
  const request = employeeDb
    .transaction(['employees'], 'readonly')
    .objectStore('employees')
    .index('department')
    .getAll(department);

  request.addEventListener('success', () => {
    console.log('Got employees:', request.result);
    onSuccess(request.result);
  });

  request.addEventListener('error', () => {
    console.log('Error loading employees:', request.error);
  });
}

openDatabase(db => {
  employeeDb = db;
  renderEmployees();
});

const departmentFilter = document.querySelector('#department-filter');
departmentFilter.addEventListener('change', event => {
  const department = departmentFilter.value;
  if (department === 'All') {
    renderEmployees();
  } else {
    renderEmployees(department);
  }
});

/**
 * Reads the employees from the database, and renders them in the table.
 * @param department The department to filter by (optional)
 */
function renderEmployees(department) {
  getEmployees(department, employees => {
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
