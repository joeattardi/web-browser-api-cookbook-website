const form = document.querySelector('#login-form');

const username = localStorage.getItem('username');
if (username) {
  form.elements.username.value = username;
}

form.addEventListener('submit', event => {
  event.preventDefault();
  
  const data = new FormData(form);
  localStorage.setItem('username', data.get('username'));

  form.classList.add('d-none');
  document.querySelector('#success').classList.remove('d-none');
});
