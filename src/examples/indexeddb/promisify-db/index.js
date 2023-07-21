let contactsDb;

openDatabase().then(db => {
  contactsDb = db;
  renderContacts();
});

/**
 * Opens the database, creating the object store if needed.
 * @returns a Promise that is resolved with the database, or rejected with an error
 */
function openDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('contacts-promise');

    // Create the object store if needed
    request.addEventListener('upgradeneeded', () => {
      const db = request.result;
      db.createObjectStore('contacts', {
        keyPath: 'id',
        autoIncrement: true
      });
    });

    request.addEventListener('success', () => resolve(request.result));
    request.addEventListener('error', () => reject(request.error));
  });
}

/**
 * Reads the contacts from the database.
 * @returns a Promise that is resolved with the contacts, or rejected with an error
 */
function getContacts() {
  return new Promise((resolve, reject) => {
    const request = contactsDb
      .transaction(['contacts'], 'readonly')
      .objectStore('contacts')
      .getAll();

    request.addEventListener('success', () => {
      console.log('Got contacts:', request.result);
      resolve(request.result);
    });

    request.addEventListener('error', () => {
      console.error('Error loading contacts:', request.error);
      reject(request.error);
    });
  });
}

/**
 * Adds a new contact to the database, then re-renders the table.
 * @param contact The new contact object to add
 * @returns a Promise that resolves when the contact is added, or rejected with an error
 */
function addContact(contact) {
  return new Promise((resolve, reject) => {
    const request = contactsDb
      .transaction(['contacts'], 'readwrite')
      .objectStore('contacts')
      .add(contact);

    request.addEventListener('success', () => {
      console.log('Added new contact:', contact);
      resolve();
    });

    request.addEventListener('error', () => {
      console.error('Error adding contact:', request.error);
      reject(request.error);
    });
  });
}

/**
 * Deletes a contact from the database, then re-renders the table.
 * @param contact The contact object to delete
 * @returns a Promise that resolves when the contact is deleted, or rejected with an error
 */
function deleteContact(contact) {
  return new Promise((resolve, reject) => {
    const request = contactsDb
      .transaction(['contacts'], 'readwrite')
      .objectStore('contacts')
      .delete(contact.id);

    request.addEventListener('success', () => {
      console.log('Deleted contact:', contact);
      resolve();
    });

    request.addEventListener('error', () => {
      console.error('Error deleting contact:', request.error);
      reject(request.error);
    });
  });
}

/**
 * Reads the contacts from the database, and renders them in the table.
 */
async function renderContacts() {
  const contacts = await getContacts();
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
      deleteButton.addEventListener('click', async () => {
        await deleteContact(contact);
        renderContacts();
      });

      actions.appendChild(deleteButton);
      row.appendChild(actions);

      tbody.append(row);
    })
  }
}

const form = document.querySelector('#contact-form');
form.addEventListener('submit', async event => {
  event.preventDefault();

  const { name, email } = form.elements;
  await addContact({ name: name.value, email: email.value });
  renderContacts();
  name.value = '';
  email.value = '';
  name.focus();
});
