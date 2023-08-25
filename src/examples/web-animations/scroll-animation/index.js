const progress = document.querySelector('.scroll-progress');
const container = document.querySelector('.scroll-container');

const timeline = new ScrollTimeline({
  source: container
});

progress.animate([
  { transform: 'scaleX(0)' },
  { transform: 'scaleX(1)' }
], { timeline, fill: 'both' });