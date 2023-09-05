const voices = document.querySelector('#voices tbody');

function renderVoices() {
  voices.innerHTML = '';
  speechSynthesis.getVoices().forEach(voice => {
    const row = document.createElement('tr');

    const name = document.createElement('td');
    name.textContent = voice.name;
    row.append(name);

    const language = document.createElement('td');
    language.textContent = voice.lang;
    row.append(language);

    const isDefault = document.createElement('td');
    if (voice.default) {
      isDefault.innerHTML = '<i class="bi bi-check-circle-fill"></i>';
    }
    row.append(isDefault);

    voices.appendChild(row);
  });
}

speechSynthesis.addEventListener('voiceschanged', () => renderVoices());
renderVoices();
