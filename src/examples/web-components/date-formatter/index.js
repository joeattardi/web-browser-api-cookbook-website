const dateInput = document.querySelector('#date');

function adjustForUTC(date) {
  return new Date(date.getTime() + (date.getTimezoneOffset() * 60_000));
}

dateInput.addEventListener('change', () => {
  const formatter = document.querySelector('date-formatter');
  formatter.setAttribute('date', adjustForUTC(dateInput.valueAsDate));
})

class DateFormatter extends HTMLElement {
  static observedAttributes = ['date'];

  constructor() {
    super();
    this.format = new Intl.DateTimeFormat(
      navigator.language, 
      { 
        dateStyle: 'full'
      }
    );
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (newValue) {
      this.textContent = this.format.format(new Date(newValue));
    } else {
      this.textContent = '(no date)';
    }
  }

  connectedCallback() {
    if (this.hasAttribute('date')) {
      const date = new Date(this.getAttribute('date'));
      if (date) {
        this.textContent = this.format.format(date);
      }
    } else {
      this.textContent = '(no date)';
    }
  }
}

customElements.define('date-formatter', DateFormatter);
