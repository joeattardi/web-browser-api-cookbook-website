const addButton = document.querySelector('.add-animation');

// A simple animation that moves the element up then down again.
const keyframes = [
  { transform: 'translateY(0)' },
  { transform: 'translateY(-100%)', offset: 0.5 },
  { transform: 'translateY(0)' },
];

// Run the animation over 2000ms, infinite loop
const options = {
  duration: 3000,
  iterations: Infinity
};

/**
 * Create an animation for a square element.
 * @param square the new square element to animate
 */
function createAnimation(square) {
  const effect = new KeyframeEffect(square, keyframes, options);
  return new Animation(effect);
}

const animation = createAnimation(document.querySelector('.square'));
animation.play();
createAnimation(document.querySelector('.square2')).play();

addButton.addEventListener('click', () => {
  // Create the synchronized square
  const newSquare = document.createElement('div');
  newSquare.className = 'square mt-5 mx-4 bg-primary';
  document.querySelector('#squares').appendChild(newSquare);

  // Create the synchronized animation and sync the time with the primary animation.
  const newAnimation = createAnimation(newSquare);
  newAnimation.currentTime = animation.currentTime;
  newAnimation.play();

  // Create the unsynchronized animation and start from the beginning.
  const newSquare2 = document.createElement('div');
  newSquare2.className = 'square2 my-5 mx-4 bg-primary';
  document.querySelector('#squares2').appendChild(newSquare2);
  createAnimation(newSquare2).play();
});
