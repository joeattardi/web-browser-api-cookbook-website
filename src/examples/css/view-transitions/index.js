const navigation = document.querySelector('#form');
const navigationButton = document.querySelector('#form button');
const profile = document.querySelector('#profile');

navigationButton.addEventListener('click', () => {
  document.startViewTransition(() => {
    profile.classList.remove('d-none');
    navigation.classList.add('d-none');
  });
});
