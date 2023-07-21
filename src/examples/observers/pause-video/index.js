const video = document.querySelector('#video');

const observer = new IntersectionObserver(entries => {
  if (!entries[0].isIntersecting) {
    console.log('Pausing video');
    video.pause();
  } else {
    console.log('Playing video');
    video.play();
  }
});

observer.observe(video);
