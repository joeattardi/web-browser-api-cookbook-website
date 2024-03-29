const target = document.querySelector('.drop-target');
const fileInput = document.querySelector('#file-input');

function showDroppedFile(file) {
  // Read the file data and insert the loaded image
  // into the page.
  const reader = new FileReader();
  reader.addEventListener('load', event => {
    const image = document.createElement('img');
    image.src = event.target.result;
    target.replaceChildren(image);
    target.classList.remove('drop-target');
  });

  reader.readAsDataURL(file);
}

target.addEventListener('drop', event => {
  // Cancel the drop event. Otherwise, the browser will leave the page
  // and navigate to the file directly.
  event.preventDefault();

  // Get the selected file data.
  const [item] = event.dataTransfer.items;
  console.log(item);
  const file = item.getAsFile();

  if (file.type.startsWith('image/')) {
    showDroppedFile(file);
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
  showDroppedFile(file);
});