const toggle = document.querySelector('#dictate');
const icon = toggle.firstElementChild;
const statusTag = document.querySelector('#status');
const result = document.querySelector('#result');
let recognition;

/**
 * Starts listening for speech. When speech is recognized, it is appended
 * to the given text field's value. 
 * Recognition continues until the returned recognition object is stopped.
 *
 * @param textField A text field to append to
 * @returns The recognition object
 */
function startDictation(textField) {
  if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continuous = true;

    recognition.addEventListener('result', event => {
      const result = event.results[event.resultIndex];
      textField.value += result[0].transcript;
    });

    recognition.addEventListener('error', event => {
      console.log('error', event);
    });

    recognition.start();

    // Return the recognition object so recognition
    // can be stopped later (like when the user clicks a toggle button).
    return recognition;
  }
}

// Make sure the browser supports speech recognition.
if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
  document.querySelector('.compatibility').classList.remove('d-none');
  document.querySelector('.demo').classList.add('d-none');
}

toggle.addEventListener('click', () => {
  if (recognition) {
    recognition.stop();
    statusTag.className = 'badge text-bg-secondary';
    statusTag.textContent = 'idle';
    icon.className = 'bi bi-mic-fill';
  } else {
    recognition = startDictation(result);
    statusTag.className = 'badge text-bg-primary';
    statusTag.textContent = 'listening';
    icon.className = 'bi bi-x-circle-fill';
  }
});
