function loadImage(url, fallbackUrl) {
  return new Promise((resolve, reject) => {
    const image = new Image();

    // Attempt to load the image from the given URL
    image.src = url;

    // The image triggers the `load` event when it is successfully loaded.
    image.addEventListener('load', () => {
      // The now-loaded image is used to resolve the `Promise`
      resolve(image);
    });

    // If an image failed to load, it triggers the `error` event.
    image.addEventListener('error', error => {
      // Reject the `Promise` in one of two scenarios:
      // (1) There is no fallback URL
      // (2) The fallback URL is the one that failed
      if (!fallbackUrl || image.src === fallbackUrl) {
        reject(error);
      } else {
        // If this is executed, it means the original image failed to load.
        // Try to load the fallback.
        image.src = fallbackUrl; 
      }
    });
  });
}

const validImage = 'https://placekitten.com/g/200/200';
const invalidImage = 'https://example.com/invalid.jpg';

loadImage(validImage).then(image => {
  image.className = 'm-auto';
  document.querySelector('#validImage .result').appendChild(image);
});

loadImage(invalidImage, validImage).then(image => {
  image.className = 'm-auto';
  document.querySelector('#invalidImageFallback .result').appendChild(image);
});

loadImage(invalidImage).then(image => {
  image.className = 'm-auto';
  document.querySelector('#invalidImage .result').appendChild(image);
}).catch(error => {
  document.querySelector('#invalidImage .result').innerHTML = '⚠️ error loading image';
});