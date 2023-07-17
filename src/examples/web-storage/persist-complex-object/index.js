/**
 * Given a user profile object, serialize it to JSON and store it in local storage.
 * @param userProfile the profile object to save
 */
function saveProfile(userProfile) {
  localStorage.setItem('userProfile-complex', JSON.stringify(userProfile, replacer));
}

/**
 * Loads the user profile from local storage, and deserializes the JSON back to
 * an object. If there is no stored profile, an empty object is returned.
 * @returns the stored user profile, or an empty object
 */
function loadProfile() {
  return JSON.parse(localStorage.getItem('userProfile-complex'), reviver) || {};
}

function replacer(key, value) {
  if (key === '') {
    // first replacer call, `value` is the object itself.
    // Return all properties of the object, but transform `lastUpdated`.
    // This uses object spread syntax to make a copy of `value` before
    // adding the `lastUpdated` property.
    return {
      ...value, // make a copy, using object spread, to avoid altering the original object
      lastUpdated: value.lastUpdated.getTime()
    };
  }

  // After the initial transformation, the replacer is called once for each key-value pair.
  // No more replacements are necessary, so return these as is.
  return value;
}

function reviver(key, value) {
  // JSON.parse calls the reviver once for each key/value pair. Watch for the `lastUpdated` key.
  // Only proceed if there's actually a value for `lastUpdated`.
  if (key === 'lastUpdated' && value) {
    // Here, the value is the timestamp. You can pass this to the `Date` constructor
    // to create a `Date` object referring to the proper time.
    return new Date(value);
  }

  // Restore all other values as is.
  return value;
}

const form = document.querySelector('form');
const lastUpdated = document.querySelector('#last-updated');

const profile = loadProfile();
console.log('Loaded profile data:', profile);
form.elements.firstName.value = profile.firstName || '';
form.elements.lastName.value = profile.lastName || '';

if (profile.lastUpdated) {
  lastUpdated.textContent = `Last updated: ${profile.lastUpdated}`;
}

form.addEventListener('submit', event => {
  event.preventDefault();
  profile.firstName = form.elements.firstName.value;
  profile.lastName = form.elements.lastName.value;
  profile.lastUpdated = new Date();
  console.log('Updating profile lastUpdated date', profile.lastUpdated);
  console.log('Persisting profile:', profile);
  saveProfile(profile);

  lastUpdated.textContent = `Last updated: ${profile.lastUpdated}`;
});
