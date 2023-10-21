class LazyImage extends HTMLImageElement {
  connectedCallback() {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        console.log('Loading image');
        this.src = this.getAttribute('lazySrc');
        observer.disconnect();
      }
    });

    observer.observe(this);
  }
}

if (!customElements.get('lazy-image')) {
  customElements.define('lazy-image', LazyImage, {
    extends: 'img'
  });
}
