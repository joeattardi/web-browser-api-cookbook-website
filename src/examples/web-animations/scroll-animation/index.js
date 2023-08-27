const progress = document.querySelector('.scroll-progress');
const container = document.querySelector('.scroll-container');

// Create a timeline that's linked to the document's
// scroll position.
const timeline = new ScrollTimeline({
  source: container
});

// Start the animation, passing the timeline you just created.
progress.animate(
  [
    { transform: 'scaleX(0)' },
    { transform: 'scaleX(1)' }
  ],
  { timeline });
