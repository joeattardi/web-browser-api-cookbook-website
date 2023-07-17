/**
 * Generates an array of all keys found in the local storage area.
 * @returns an array of keys
 */
function getAllKeys() {
  const keys = [];

  for (let i = 0; i < localStorage.length; i++) {
    keys.push(localStorage.key(i));
  }

  return keys;
}

function generateTestData() {
  localStorage.setItem('demo-color', 'blue');
  localStorage.setItem('demo-name', 'Michael');
  localStorage.setItem('demo-email', 'sysadmin@example.com');
}

generateTestData();

const keys = getAllKeys();
const list = document.querySelector('#keyList');
keys.forEach(key => {
  const item = document.createElement('li');
  item.className = 'list-group-item font-monospace';
  item.textContent = key;
  list.appendChild(item);
});
