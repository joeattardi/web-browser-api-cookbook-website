const square = document.querySelector('#animate-square');

square.animate([
  { transform: 'translateX(0)' },
  { transform: 'translateX(250px)' }
], {
  duration: 5000,
  direction: 'alternate',
  iterations: Infinity,
  easing: 'ease-in-out'
});

square.animate([
  { transform: 'rotate(0deg)' },
  { transform: 'rotate(360deg)' }
], {
  duration: 3000,
  iterations: Infinity,
  composite: 'add'
});
