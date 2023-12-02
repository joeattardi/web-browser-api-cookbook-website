const preview = document.querySelector('#preview');
const photo = document.querySelector('#photo');
const canvas = document.querySelector('#canvas');

async function startCamera() {
  const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });

  // Hook up the video element to the stream.
  preview.srcObject = stream;
  preview.play();

  // Resize the canvas based on the device pixel density
  // This helps prevent a blurred or pixellated image.
  canvas.width = canvas.width * window.devicePixelRatio;
  canvas.height = canvas.height * window.devicePixelRatio;
  const context = canvas.getContext('2d');

  // Target frame rate of 30 FPS - draw each frame to the canvas
  setInterval(() => {
    context.drawImage(preview, 0, 0, canvas.width, canvas.height);
  }, 30 / 1000);
}

document.querySelector('#filterNone').addEventListener('click', event => {
  canvas.style.filter = 'none';
});

document.querySelector('#filterGrayscale').addEventListener('click', event => {
    canvas.style.filter = 'grayscale(100%)';
});

document.querySelector('#filterHueRotate').addEventListener('click', event => {
  canvas.style.filter = 'hue-rotate(90deg)';
});

startCamera();
