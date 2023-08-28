const button = document.querySelector('#bounce-trigger');
const ball = document.querySelector('#bounce');

// The distance the element moves is smaller each time.
const distances = [ '40px', '20px', '10px' ];

async function animateBounce() {
  for (let distance of distances) {
    // Wait for this animation to complete before continuing
    await ball.animate([
      // Start at the bottom
      { transform: 'translateY(0)' }, 

      // Move up by the current distance
      { transform: `translateY(-${distance})`, offset: 0.5 },

      // Back to the bottom
      { transform: 'translateY(0)' }
    ], {
      duration: 250,
      easing: 'ease-in-out'
    }).finished;
  }
}

button.addEventListener('click', async () => {
  button.disabled = true;
  await animateBounce();
  button.disabled = false;
});
