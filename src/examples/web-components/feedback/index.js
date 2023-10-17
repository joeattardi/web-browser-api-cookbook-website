const template = document.createElement('template');
template.innerHTML = `
  <style>
    .feedback-prompt {
      display: flex;
      align-items: center;
      gap: 0.5em;
    }

    button {
      padding: 0.5em 1em;
    }
  </style>

  <div class="feedback-prompt">
    <slot name="prompt">Was this helpful?</slot>
    <button data-helpful="true">Yes</button>
    <button data-helpful="false">No</button>
  </div>
`;

class FeedbackRating extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    const feedbackButtons = this.shadowRoot.querySelectorAll('button');
    feedbackButtons.forEach(button => {
      button.addEventListener('click', event => {
        this.shadowRoot.querySelector('.feedback-prompt').remove();
        this.shadowRoot.textContent = 'Thanks for your feedback!';

        this.helpful = event.target.dataset.helpful === 'true';
        this.shadowRoot.dispatchEvent(new CustomEvent('feedback', {
          composed: true,
          bubbles: true
        }));
      });
    });
  }
}

customElements.define('feedback-rating', FeedbackRating);

const feedback = document.querySelector('feedback-rating');
feedback.addEventListener('feedback', event => {
  const result = document.querySelector('#result');

  if (event.target.helpful ) {
    result.textContent = 'User indicated that the website was helpful.';
  } else {
    result.textContent = 'User indicated that the website was not helpful.';
  }
});
