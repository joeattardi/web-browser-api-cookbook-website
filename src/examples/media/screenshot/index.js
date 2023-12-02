const canvas = document.querySelector('#screenshot');
const video = document.querySelector('#screenshare');
const captureButton = document.querySelector('#captureButton');
const stopCaptureButton = document.querySelector('#stopCaptureButton');
captureButton.addEventListener('click', captureScreen);

async function captureScreen() {
  const stream = await navigator.mediaDevices.getDisplayMedia();
  const mediaRecorder = new MediaRecorder(stream, {
    mimeType: 'video/webm'
  });
 
  mediaRecorder.addEventListener('dataavailable', event => {
    const blob = new Blob([event.data], {
      type: 'video/webm',
    });

    const url = URL.createObjectURL(blob);
    video.src = url;

    const form = new FormData();
    form.append('file', blob);
    fetch('https://httpbin.org/anything', {
      method: 'POST',
      body: form
    });
  });

  mediaRecorder.start();
  captureButton.disabled = true;

  stopCaptureButton.disabled = false;
  stopCaptureButton.addEventListener('click', () => {
    mediaRecorder.stop();
    stopCaptureButton.disabled = true;
    captureButton.disabled = false;
  }, { once: true });
}
