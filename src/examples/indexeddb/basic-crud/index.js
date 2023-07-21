// Once the database is opened, it will be assigned to this variable.
let contactsDb;

/**
 * Opens the database, creating the object store if needed.
 * Because this is asynchronous, it takes a callback function `onSuccess`. Once the
 * database is ready, `onSuccess` will be called with the database object.
 * 
 * @param onSuccess A callback function that is executed when the database is ready
 */
function openDatabase(onSuccess) {
  const request = indexedDB.open('todos-index');

  // Create the object store if needed
  request.addEventListener('upgradeneeded', () => {
    const db = request.result;
    db.createObjectStore('contacts', {
      keyPath: 'id',
      autoIncrement: true
    });
  });

  request.addEventListener('success', () => {
    const db = request.result;

    // Call the given callback with the database.
    onSuccess(db);
  });

  request.addEventListener('error', () => {
    console.error('Error opening database:', request.error);
  });
}

/**
 * Reads the contacts from the database, and renders them in the table.
 * @param onSuccess A callback function that is executed when the contacts are loaded
 */
function getContacts(onSuccess) {
  const request = contactsDb
    .transaction(['contacts'], 'readonly')
    .objectStore('contacts')
    .getAll();

  request.addEventListener('success', () => {
    console.log('Got contacts:', request.result);
    onSuccess(request.result);
  });

  request.addEventListener('error', () => {
    console.error('Error loading contacts:', request.error);
  });
}

/**
 * Adds a new contact to the database, then re-renders the table.
 * @param contact The new contact object to add
 * @param onSuccess A callback function that is executed when the contact is added
 */
function addContact(contact, onSuccess) {
  const request = contactsDb
    .transaction(['contacts'], 'readwrite')
    .objectStore('contacts')
    .add(contact);

  request.addEventListener('success', () => {
    console.log('Added new contact:', contact);
    onSuccess();
  });

  request.addEventListener('error', () => {
    console.error('Error adding contact:', request.error);
  });
}

/**
 * Deletes a contact from the database, then re-renders the table.
 * @param contact The contact object to delete
 * @param onSuccess A callback function that is executed when the contact is deleted
 */
function deleteContact(contact, onSuccess) {
  const request = contactsDb
    .transaction(['contacts'], 'readwrite')
    .objectStore('contacts')
    .delete(contact.id);

  request.addEventListener('success', () => {
    console.log('Deleted contact:', contact);
    onSuccess();
  });

  request.addEventListener('error', () => {
    console.error('Error deleting contact:', request.error);
  });
}

// Open the database and do the initial contact list render.
openDatabase(db => {
  contactsDb = db;
  renderContacts();
});

/**
 * Reads the contacts from the database, and renders them in the table.
 */
function renderContacts() {
  getContacts(contacts => {
    const tbody = document.querySelector('.table tbody');

    // Remove the current contact rows
    tbody.innerHTML = '';

    // If there are no contacts, show a message
    if (contacts.length === 0) {
      const row = document.createElement('tr');
      const cell = document.createElement('td');
      cell.colSpan = 3;
      cell.innerHTML = 'No contacts found';

      row.append(cell);
      tbody.append(row);
    } else {
      // Render one row per contact
      contacts.forEach(contact => {
        const row = document.createElement('tr');

        // Name cell
        const name = document.createElement('td');
        name.className = 'align-middle';
        name.textContent = contact.name;
        row.appendChild(name);

        // Email cell
        const email = document.createElement('td');
        email.className = 'align-middle';
        email.textContent = contact.email;
        row.appendChild(email);

        // Actions cell: contains the delete button
        const actions = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.className = 'btn';
        deleteButton.innerHTML = '<i class="bi bi-x-circle"></i>';
        deleteButton.addEventListener('click', () => {
          deleteContact(contact, renderContacts); 
        });

        actions.appendChild(deleteButton);
        row.appendChild(actions);

        tbody.append(row);
      })
    }
  });
}

const form = document.querySelector('#contact-form');
form.addEventListener('submit', event => {
  event.preventDefault();

  const { name, email } = form.elements;
  addContact({ name: name.value, email: email.value }, renderContacts);
  name.value = '';
  email.value = '';
  name.focus();
});
