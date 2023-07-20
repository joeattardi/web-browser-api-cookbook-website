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
}

/**
 * Reads the contacts from the database, and renders them in the table.
 */
function getContacts() {
  const request = contactsDb
    .transaction(['contacts'], 'readonly')
    .objectStore('contacts')
    .getAll();

  request.addEventListener('success', () => {
    console.log('Got contacts:', request.result);
    renderContacts(request.result);
  });
}

/**
 * Adds a new contact to the database, then re-renders the table.
 * @param contact The new contact object to add
 */
function addContact(contact) {
  const request = contactsDb
    .transaction(['contacts'], 'readwrite')
    .objectStore('contacts')
    .add(contact);

  request.addEventListener('success', () => {
    console.log('Added new contact:', contact);
    getContacts();
  });
}

/**
 * Deletes a contact from the database, then re-renders the table.
 * @param contact The contact object to delete
 */
function deleteContact(contact) {
  const request = contactsDb
    .transaction(['contacts'], 'readwrite')
    .objectStore('contacts')
    .delete(contact.id);

  request.addEventListener('success', () => {
    console.log('Deleted contact:', contact);
    getContacts();
  })
}

openDatabase(db => {
  contactsDb = db;
  getContacts();
});

function renderContacts(contacts) {
  const tbody = document.querySelector('.table tbody');
  tbody.innerHTML = '';

  if (contacts.length === 0) {
    const row = document.createElement('tr');
    const cell = document.createElement('td');
    cell.colSpan = 3;
    cell.innerHTML = 'No contacts found';

    row.append(cell);
    tbody.append(row);
  } else {
    contacts.forEach(contact => {
      const row = document.createElement('tr');

      const name = document.createElement('td');
      name.className = 'align-middle';
      name.innerHTML =  contact.name;
      row.appendChild(name);

      const email = document.createElement('td');
      email.className = 'align-middle';
      email.textContent = contact.email;
      row.appendChild(email);

      const actions = document.createElement('td');
      const deleteButton = document.createElement('button');
      deleteButton.className = 'btn';
      deleteButton.innerHTML = '<i class="bi bi-x-circle"></i>';
      deleteButton.addEventListener('click', () => {
        deleteContact(contact); 
      });

      actions.appendChild(deleteButton);
      row.appendChild(actions);

      tbody.append(row);
    })
  }
}

const form = document.querySelector('#contact-form');
form.addEventListener('submit', event => {
  event.preventDefault();

  const { name, email } = form.elements;
  addContact({ name: name.value, email: email.value });
  name.value = '';
  email.value = '';
  name.focus();
});
