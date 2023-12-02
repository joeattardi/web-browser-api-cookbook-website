const preview = document.querySelector('#preview');
const photo = document.querySelector('#photo');
const canvas = document.querySelector('#canvas');
const captureButton = document.querySelector('#capture-button');

async function startCamera() {
  const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
  preview.srcObject = stream;
  preview.play();
}

captureButton.addEventListener('click', () => {
  // Resize the canvas based on the device pixel density
  // This helps prevent a blurred or pixellated image.
  canvas.width = canvas.width * window.devicePixelRatio;
  canvas.height = canvas.height * window.devicePixelRatio;

  // Get the 2D context from the canvas and draw the current video frame.
  const context = canvas.getContext('2d');
  context.drawImage(preview, 0, 0, canvas.width, canvas.height);

  // Create a PNG data URL and set it as the image source.
  const dataUrl = canvas.toDataURL('image/png');
  photo.src = dataUrl;

  preview.classList.add('d-none');
  photo.classList.remove('d-none');
});

startCamera();
