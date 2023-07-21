/**
 * Observes an image element for lazy loading.
 * 
 * @param img a reference to the image DOM node
 * @param url the URL of the image to load
 */
function lazyLoad(img, url) {
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      console.log('Loading image');
      img.src = url;
      observer.disconnect();
    }
  });

  observer.observe(img);
}

lazyLoad(document.querySelector('#lazy-image'), 'https://placekitten.com/300/300');
