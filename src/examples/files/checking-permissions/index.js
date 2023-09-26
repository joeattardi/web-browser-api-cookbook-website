const button = document.querySelector('#check-button');
const resultElement = document.querySelector('#result');

if ('showOpenFilePicker' in window) {
  document.querySelector('#check-button').addEventListener('click', async () => {
    const [file] = await window.showOpenFilePicker();

    let result = await file.queryPermission({ mode: 'readwrite' });
    if (result === 'prompt') {
      result = await file.requestPermission({ mode: 'readwrite' });
    }

    if (result === 'granted') {
      resultElement.classList.add('alert-success');
      resultElement.classList.remove('alert-danger');
      resultElement.textContent = `Read-write permission allowed for file ${file.name}`;
    } else {
      resultElement.textContent = `Read-write permission not granted for file ${file.name}`;
      resultElement.classList.remove('alert-success');
      resultElement.classList.add('alert-danger');
    }

    resultElement.classList.remove('d-none');
  });
} else {
  resultElement.textContent = 'This browser does not support File System Access.';
  resultElement.classList.remove('d-none');
  resultElement.classList.remove('alert-success');
  resultElement.classList.add('alert-danger');
  button.disabled = true;
}
