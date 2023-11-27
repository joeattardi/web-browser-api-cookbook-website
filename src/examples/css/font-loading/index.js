// Define the Roboto font face.
const roboto = new FontFace(
  'Roboto', 
  'url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2)', {
    style: 'normal',
    weight: 400,
    unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD'
  });

// Add the font face so it can be used.
document.fonts.add(roboto);

// Load the Roboto font. The Promise is resolved when the font has been
// loaded.
roboto.load().then(() => {
  console.log('Roboto loaded');
});

// This Promise is resolved when all fonts have been loaded.
document.fonts.ready.then(() => {
  console.log('All fonts loaded');
  document.querySelector('#text').classList.remove('d-none');
});
