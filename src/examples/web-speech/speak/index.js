const voiceSelect = document.querySelector('#voices');

let voices = [];

function speakText(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.voice = voices[voiceSelect.value];
  speechSynthesis.speak(utterance);
}

function populateVoiceOptions() {
  if (!voices.length) {
    voices = speechSynthesis.getVoices();
    voices.forEach((voice, index) => {
      const option = new Option(voice.name, index);
      if (voice.default) {
        option.selected = true;
      }
      voiceSelect.appendChild(option);
    });
  }
}

speechSynthesis.addEventListener('voiceschanged', () => populateVoiceOptions());
populateVoiceOptions();

document.querySelector('#speak-button').addEventListener('click', () => {
  speakText(document.querySelector('#speak-text').value);
});
