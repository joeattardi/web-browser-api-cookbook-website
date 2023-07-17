// A reference to the color picker input element.
const colorPicker = document.querySelector('#colorPicker');

// Load the saved color, if any, and set it on the color picker.
const storedValue = localStorage.getItem('savedColor');
if (storedValue) {
  console.log('Found saved color:', storedValue);
  colorPicker.value = storedValue;
}

// Update the saved color whenever the value changes.
colorPicker.addEventListener('change', event => {
  localStorage.setItem('savedColor', colorPicker.value);
  console.log('Saving new color:', colorPicker.value);
});

// Listen for the `storage` event. If another tab changes the
// `savedColor` item, update this page's color picker with the new value.
window.addEventListener('storage', event => {
  if (event.key === 'savedColor') {
    console.log('New color was chosen in another tab:', event.newValue);
    colorPicker.value = event.newValue;
  }
});
