const fileInput = document.querySelector('#file-upload');
const content = document.querySelector('#file-content');

fileInput.addEventListener('change', event => {
  const [file] = fileInput.files;

  // File extends from Blob
  const objectUrl = URL.createObjectURL(file);
  content.src = objectUrl;
});
