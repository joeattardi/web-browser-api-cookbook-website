const dateForm = document.querySelector('#date-form');
const output = document.querySelector('#output');

dateForm.addEventListener('submit', event => {
  event.preventDefault();

  const format = new Intl.DateTimeFormat(navigator.language, { dateStyle: dateForm.elements.format.value });

  output.querySelector('#formatted-date').textContent = format.format(dateForm.elements.date.valueAsDate);
  output.querySelector('#parts').textContent = JSON.stringify(format.formatToParts(dateForm.elements.date.valueAsDate), null, 2);
  output.classList.remove('d-none');
});