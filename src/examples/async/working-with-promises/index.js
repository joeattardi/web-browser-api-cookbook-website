


// window.addEventListener('DOMContentLoaded', () => {
  console.log('whatsup')

  getUsers()
  // This function is called when the user list has been loaded.
  .then(userList => {
    userList.forEach(user => {
      renderUser(user);
    })
  }).catch(error => { // Called if there is an error
    console.error('Failed to load user list:', error);
  });

  const list = document.querySelector('#users');

  function renderUser(user) {
    const item = document.createElement('li');
    item.textContent = user.name;
    list.appendChild(item);
  }

  function getUsers() {
    const users = [
      { name: 'Jean-Luc Picard' },
      { name: 'William Riker' },
      { name: 'Data' }
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