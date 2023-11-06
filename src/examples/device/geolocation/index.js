const loader = document.querySelector('#loader');
const results = document.querySelector('#results');

navigator.geolocation.getCurrentPosition(position => {
  loader.classList.add('d-none');
  console.log(position);

  document.querySelector('#latitude').textContent = position.coords.latitude;
  document.querySelector('#longitude').textContent = position.coords.longitude;
  results.classList.remove('d-none');
}, error => {
  // Either the user denied permission, or the device location could not
  // be determined.
  console.log(error);
});
