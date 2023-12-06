const template = document.createElement('template');
template.innerHTML = `
  <dialog id="confirm">
    <h2>Confirm</h2>
    <p><slot></slot></p>

    <button type="button" class="btn btn-primary confirm-button">Confirm</button>
    <button type="button" class="btn btn-secondary cancel-button">Cancel</button>
  </dialog>
`;

class ConfirmDialog extends HTMLElement {
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(template.content.cloneNode(true));

    this.dialog = shadowRoot.querySelector('dialog');

    shadowRoot.querySelector('.confirm-button')
      .addEventListener('click', () => {
        this.dialog.close('confirm');
      });

    shadowRoot.querySelector('.cancel-button')
      .addEventListener('click', () => {
        this.dialog.close('cancel');
      });

    this.dialog.addEventListener('cancel', () => {
      this.dialog.returnValue = 'cancel';
    });
  }

  showModal() {
    this.dialog.showModal();

    return new Promise(resolve => {
      this.dialog.addEventListener('close', () => {
        resolve(this.dialog.returnValue === 'confirm');
      }, { once: true });
    });
  }
}

if (!customElements.get('confirm-dialog')) {
  customElements.define('confirm-dialog', ConfirmDialog);
}

const confirmDialog = document.querySelector('#confirm');
document.querySelector('#show-confirm')
  .addEventListener('click', async () => {
    const confirmed = await confirmDialog.showModal();
    if (confirmed) {
      result.textContent = '✅ User confirmed.';
    } else {
      result.textContent = '❌ User canceled.';
    }
  });