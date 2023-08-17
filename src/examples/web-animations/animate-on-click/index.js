const button = document.querySelector('#button');

const ripple = button.querySelector('.ripple');
ripple.style.width = `${button.offsetWidth / 2}px`;
ripple.style.height = `${button.offsetWidth / 2}px`;

button.addEventListener('click', event => {
  const ripple = button.querySelector('.ripple');
  ripple.style.top = `${event.offsetY - (ripple.offsetHeight / 2)}px`;
  ripple.style.left = `${event.offsetX - (ripple.offsetWidth / 2)}px`;

  ripple.animate([
    { transform: 'scale(0)', opacity: 0.75 },
    { transform: 'scale(4)', opacity: 0 }
  ], {
    duration: 600
  });
});
