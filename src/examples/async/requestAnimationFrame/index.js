const button = document.querySelector('#toggle');
const box = document.querySelector('#box');

const ANIMATION_SECONDS = 1;

let isBoxVisible = true;
button.addEventListener('click', () => {
  button.disabled = true;
  Promise.all([
    animateBox('#box-5', 5),
    animateBox('#box-10', 10),
    animateBox('#box-30', 30),
    animateBox('#box-60', 60)
  ]).then(() => {
    isBoxVisible = !isBoxVisible;
    button.disabled = false;
  })
});

function animateBox(id, fps) {
  return new Promise(resolve => {
    const box = document.querySelector(id);

    // The time interval between each frame.
    const frameInterval = 1000 / fps;

    // The total number of frames.
    const frameCount = ANIMATION_SECONDS * fps;

    // The amount to adjust the opacity by in each frame.
    const opacityIncrement = 1 / frameCount;

    // The timestamp of the last frame.
    let lastTimestamp;

    // The starting opacity value and the direction to adjust it in.
    let opacity = isBoxVisible ? 1 : 0;
    const offset = isBoxVisible ? -opacityIncrement : opacityIncrement;

    /**
     * This callback is called by requestAnimationFrame.
     * @param timestamp The timestamp when requestAnimationFrame executed this function
     */
    function animate(timestamp) {
      // Set the last timestamp to now if there isn't an existing one.
      if (!lastTimestamp) {
        lastTimestamp = timestamp;
      }

      // Calculate how much time has elapsed since the last frame.
      // If not enough time has passed yet, schedule another call of this
      // function and return.
      const elapsed = timestamp - lastTimestamp;
      if (elapsed < frameInterval) {
        requestAnimationFrame(animate);
        return;
      }

      // Time for a new animation frame. Remember this timestamp.
      lastTimestamp = timestamp;

      // Adjust the opacity and make sure it doesn't overflow or underflow.
      opacity = Math.max(0, Math.min(1, opacity + offset));
      box.style.opacity = opacity;

      // If the opacity is still an intermediate value, the animation isn't done
      // yet. Schedule another run of this function.
      if (opacity > 0 && opacity < 1) {
        requestAnimationFrame(animate);
      } else {
        resolve();
      }
    }

    requestAnimationFrame(animate);
  });
}
