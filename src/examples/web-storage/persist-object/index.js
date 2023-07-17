/**
 * Given a user profile object, serialize it to JSON and store it in local storage.
 * @param userProfile the profile object to save
 */
function saveProfile(userProfile) {
  localStorage.setItem('userProfile', JSON.stringify(userProfile));
}

/**
 * Loads the user profile from local storage, and deserializes the JSON back to
 * an object. If there is no stored profile, an empty object is returned.
 * @returns the stored user profile, or an empty object
 */
function loadProfile() {
  return JSON.parse(localStorage.getItem('userProfile')) || {};
}

const form = document.querySelector('form');

const profile = loadProfile();
console.log('Loaded profile data:', profile);
form.elements.firstName.value = profile.firstName || '';
form.elements.lastName.value = profile.lastName || '';

form.addEventListener('submit', event => {
  event.preventDefault();
  profile.firstName = form.elements.firstName.value;
  profile.lastName = form.elements.lastName.value;
  console.log('Persisting profile:', profile);
  saveProfile(profile);
});
