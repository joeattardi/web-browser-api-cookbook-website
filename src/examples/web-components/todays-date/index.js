class TodaysDate extends HTMLElement {
  connectedCallback() {
    const format = new Intl.DateTimeFormat(
      navigator.language,
      {
        dateStyle: 'full'
      }
    );

    this.textContent = format.format(new Date());
  }
}

customElements.define('todays-date', TodaysDate);