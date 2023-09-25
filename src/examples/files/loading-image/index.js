const fileInput = document.querySelector('#file-upload');
const content = document.querySelector('#file-content');

fileInput.addEventListener('change', event => {
  const [file] = fileInput.files;
  const reader = new FileReader();

  reader.addEventListener('load', event => {
    content.src = event.target.result;
  });

  reader.addEventListener('error', event => {
    console.log('error', event);
  });

  reader.readAsDataURL(file);
});
