const trigger = document.querySelector('.trigger');
const box = document.querySelector('.box');

const animation = box.animate([
  { transform: 'rotate(0deg)' },
  { transform: 'rotate(360deg)' }
], { duration: 5000, iterations: Infinity });

function toggleAnimation(animation) {
  if (animation.playState === 'running') {
    animation.pause();
    trigger.textContent = 'Animate';
  } else {
    animation.play();
    trigger.textContent = 'Pause';
  }
}

trigger.addEventListener('click', () => {
  toggleAnimation(animation);
});
