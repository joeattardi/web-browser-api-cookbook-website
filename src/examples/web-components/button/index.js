const template = document.createElement('template');
template.innerHTML = `
  <style>
    button {
      background: #333;
      padding: 0.5em 1.25em;
      font-size: 1rem;
      border: none;
      border-radius: 5px;
      color: white;
    }

    button.primary {
      background: #2563eb;
    }

    button.danger {
      background: #dc2626;
    }
  </style>

  <button>
    <slot></slot>
  </button>
`;

class StyledButton extends HTMLElement {
  static observedAttributes = ['variant', 'type'];

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.button = this.shadowRoot.querySelector('button');
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'variant') {
      this.button.className = newValue;
    } else if (name === 'type') {
      this.button.type = newValue;
    }
  }
}

if (!customElements.get('styled-button')) {
  customElements.define('styled-button', StyledButton);
}

document.querySelector('#default-button').addEventListener('click', () => {
  alert('Clicked the default button');
});

document.querySelector('#primary-button').addEventListener('click', () => {
  alert('Clicked the primary button');
});

document.querySelector('#danger-button').addEventListener('click', () => {
  alert('Clicked the danger button');
});

