const template = document.createElement('template');
template.innerHTML = `
  <div>
    <button type="button" class="toggle-button">
      <slot name="title"></slot>
    </button>
    <div class="content">
      <slot></slot>
    </div>
  </div>
`;

class Disclosure extends HTMLElement {
  static observedAttributes = ['open'];

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.content = this.shadowRoot.querySelector('.content');
  }

  connectedCallback() {
    this.content.hidden = !this.hasAttribute('open');
    this.shadowRoot.querySelector('.toggle-button')
      .addEventListener('click', () => {
        if (this.hasAttribute('open')) {
          this.removeAttribute('open');
          this.content.hidden = true;
        } else {
          this.setAttribute('open', '');
          this.content.hidden = false;
        }
      });
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (newValue !== null) {
      this.content.hidden = false;
    } else {
      this.content.hidden = true;
    }
  }
}

if (!customElements.get('x-disclosure')) {
  customElements.define('x-disclosure', Disclosure);
}
