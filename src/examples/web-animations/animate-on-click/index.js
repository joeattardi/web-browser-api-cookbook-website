const button = document.querySelector('#button');

button.addEventListener('click', () => {
  button.animate([
    { transform: 'scale(1)' },
    { transform: 'scale(1.3) rotate(15deg)', offset: 0.5 },
    { transform: 'scale(1)' }
  ], {
    duration: 1000,
    easing: 'ease-out'
  });
});
