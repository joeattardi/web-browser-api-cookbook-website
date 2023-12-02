navigator.mediaCapabilities.decodingInfo({
  type: 'file',
  audio: {
    contentType: 'audio/mp3'
  }
}).then(result => {
  document.querySelector('#mp3').textContent = result.supported ? 'Supported' : 'Not supported';
});

navigator.mediaCapabilities.decodingInfo({
  type: 'file',
  audio: {
    contentType: 'audio/webm;codecs=opus'
  }
}).then(result => {
  document.querySelector('#webm').textContent = result.supported ? 'Supported' : 'Not supported';
});
