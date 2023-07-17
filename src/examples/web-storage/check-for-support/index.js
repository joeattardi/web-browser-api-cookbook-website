/**
 * Determines if local storage is available.
 * @returns true if the browser can use local storage, false if not
 */
function isLocalStorageAvailable() {
  try {
    // Local storage is available if the property exists
    return typeof window.localStorage !== 'undefined';
  } catch (error) {
    console.log('err');
    // If window.localStorage exists but the user is blocking local 
    // storage, the attempting to read the property throws an exception.
    // If this happens, consider local storage not available.
    return false;
  }
}

const result = document.querySelector('#result');

if (isLocalStorageAvailable()) {
  result.classList.add('alert-success');
  result.textContent = 'This browser supports local storage.'
} else {
  result.classList.add('alert-danger');
  result.textContent = 'This browser does not support local storage.'
}
