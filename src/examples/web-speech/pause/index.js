const content = `
  By listening to the visibilitychange event, you can pause and resume speech when switching tabs. This solution also stops the voice when you leave or refresh the page. Try switching tabs while I'm speaking to see this example in action.
`;

// Clean up speech synthesis on a reload
speechSynthesis.cancel();

document.querySelector('#speak').addEventListener('click', () => {

  const utterance = new SpeechSynthesisUtterance(content);
  speechSynthesis.speak(utterance);
});

document.addEventListener('visibilitychange', event => {
  if (speechSynthesis.speaking) {
    if (document.visibilityState === 'hidden') {
      speechSynthesis.pause();
    } else if (document.visibilityState === 'visible') {
      speechSynthesis.resume();
    }
  }
});
