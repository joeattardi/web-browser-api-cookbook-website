const fileInput = document.querySelector('#file-upload');
const content = document.querySelector('#file-content');

fileInput.addEventListener('change', event => {
  const [file] = fileInput.files;

  // File extends from Blob, which can be passed to
  // createObjectURL.
  const objectUrl = URL.createObjectURL(file);

  // The <video> element can take the object URL to load the video
  content.src = objectUrl;
});
