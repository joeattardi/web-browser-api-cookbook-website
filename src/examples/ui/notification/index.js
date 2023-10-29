const button = document.querySelector('#notification-button');

async function getPermission() {
  if (Notification.permission !== 'denied') {
    await Notification.requestPermission();
  }

  return Notification.permission === 'granted';
}

button.addEventListener('click', async() => {
  if (await getPermission()) {
    new Notification('Hello!', {
      body: 'This is a test notification'
    });
  }
});
