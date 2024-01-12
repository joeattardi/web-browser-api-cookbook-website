class LazyImage extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });
    this.image = document.createElement('img');
    shadowRoot.appendChild(this.image);
  }

  connectedCallback() {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        console.log('Loading image');
        this.image.src = this.getAttribute('src');
        observer.disconnect();
      }
    });

    observer.observe(this);
  }
}

if (!customElements.get('lazy-image')) {
  customElements.define('lazy-image', LazyImage);
}
