/**
 * Observes an image element for lazy loading.
 * 
 * @param img a reference to the image DOM node
 * @param url the URL of the image to load
 */
function lazyLoad(img, url) {
  const observer = new IntersectionObserver(entries => {
    // Since there's only one image being observed, there is only one entry.
    // If you are observing multiple images, they may start intersecting at the same time,
    // in which case the entries array would have more than one entry.
    if (entries[0].isIntersecting) {
      console.log('Loading image');
      img.src = url;
      observer.disconnect();
    }
  });

  observer.observe(img);
}

lazyLoad(document.querySelector('#lazy-image'), 'https://placekitten.com/300/300');
