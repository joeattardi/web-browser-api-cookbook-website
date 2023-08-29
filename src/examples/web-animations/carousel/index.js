const images = document.querySelectorAll('.images img');

const animationOptions = { duration: 500, fill: 'both' };

let currentIndex = 0;

function getTransform(offset) {
  return { transform: `translateX(${offset * 300}px)` };
}

document.querySelector('.next-image').addEventListener('click', () => {
    images[currentIndex].animate([
      getTransform(-currentIndex),
      getTransform(-(currentIndex + 1))
    ], animationOptions);

    if (currentIndex < images.length - 1) {
      images[currentIndex + 1].animate([
        getTransform(-currentIndex),
        getTransform(-(currentIndex + 1))
      ], animationOptions);
      currentIndex++;
    }
    else {
      currentIndex = 0;
      images[0].animate([
        getTransform(1),
        getTransform(0)
      ], { duration: 500, fill: 'both' });
    }
});
