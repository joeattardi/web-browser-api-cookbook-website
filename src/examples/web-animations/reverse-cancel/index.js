const button = document.querySelector('.hover-button');

let animation;

async function animate(direction) {
  if (animation) {
    animation.reverse();
  } else {
    animation = button.animate([
      { transform: 'scale(1)' },
      { transform: 'scale(2)' }
    ], { duration: 1000, fill: 'forwards', direction });

    await animation.finished;
    animation = null;
  }
}

button.addEventListener('mouseover', () => {
  animate('normal');
});

button.addEventListener('mouseout', () => {
  animate('reverse');
});
