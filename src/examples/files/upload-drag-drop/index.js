const target = document.querySelector('.drop-target');
const fileInput = document.querySelector('#file-input');

function uploadDroppedFile(file) {
  fetch('/api/uploadFile', {
    method: 'POST',
    body: file
  });
}

target.addEventListener('drop', event => {
  // Cancel the drop event. Otherwise, the browser will leave the page
  // and navigate to the file directly.
  event.preventDefault();

  // Get the selected file data.
  const [item] = event.dataTransfer.items;
  const file = item.getAsFile();

  if (file.type.startsWith('image/')) {
    uploadDroppedFile(file);
  }
});

// You need to cancel the dragover event as well, to prevent the
// file from replacing the full page content
target.addEventListener('dragover', event => {
  event.preventDefault();
});

// For accessibility, perform the same operation when using
// the file input.
fileInput.addEventListener('change', () => {
  const [file] = fileInput.files;
  uploadDroppedFile(file);
});