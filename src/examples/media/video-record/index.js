const preview = document.querySelector('#preview');
const captureButton = document.querySelector('#capture-button');
let isRecording = false;
let mediaRecorder;

async function startCamera() {
  const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
  preview.srcObject = stream;
  mediaRecorder = new MediaRecorder(stream, {
    mimeType: 'video/webm'
  });

  mediaRecorder.addEventListener('dataavailable', event => {
    const blob = new Blob([event.data], {
      type: 'video/webm',
    });

    const url = URL.createObjectURL(blob);
    
    preview.muted = false;
    preview.srcObject = null;
    preview.src = url;
    preview.autoplay = true;
    preview.loop = true;
    preview.controls = true;
  });

  preview.play();
}

captureButton.addEventListener('click', () => {
  if (isRecording) {
    mediaRecorder.stop();
    captureButton.remove();
  } else {
    captureButton.textContent = 'Stop Recording';
    isRecording = true;
    mediaRecorder.start();
  }
});

startCamera();
