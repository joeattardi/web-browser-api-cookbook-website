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
    <p>Was this helpful?</p>
    <button data-helpful="true">Yes</button>
    <button data-helpful="false">No</button>
  </div>
`;

class FeedbackRating extends HTMLElement {
  connectedCallback() {
    // Create the shadow DOM and render the template into it
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(template.content.cloneNode(true));

    shadowRoot.querySelector('.feedback-prompt').addEventListener('click', event => {
      const { helpful } = event.target.dataset;
      // console.log(event.target.dataset.helpful);

      if (typeof helpful !== 'undefined') {
        // Once a feedback option is chosen, hide the buttons and show a confirmation
        shadowRoot.querySelector('.feedback-prompt').remove();
        shadowRoot.textContent = 'Thanks for your feedback!';

        // JavaScript doesn't have a 'parseBoolean' type function, so convert the string value
        // to the corresponding boolean value.
        this.helpful = helpful === 'true';

        // Dispatch a custom event, so your app can be notified when a feedback button
        // is clicked.
        shadowRoot.dispatchEvent(new CustomEvent('feedback', {
          composed: true, // this is needed to "escape" the shadow DOM boundary
          bubbles: true // this is needed to propagate up the DOM
        }));
      }
    });
  }
}

if (!customElements.get('feedback-rating')) {
  customElements.define('feedback-rating', FeedbackRating);
}

const feedback = document.querySelector('feedback-rating');
feedback.addEventListener('feedback', event => {
  const result = document.querySelector('#result');

  if (event.target.helpful ) {
    result.textContent = 'User indicated that the website was helpful.';
  } else {
    result.textContent = 'User indicated that the website was not helpful.';
  }
});
