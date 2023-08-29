const items = document.querySelectorAll('.images div');

const animationOptions = { duration: 200, easing: 'ease-in-out', fill: 'both' };

let currentIndex = 0;

function getTransform(offset) {
  return { transform: `translateX(${offset * 300}px)` };
}

function animateOut(element, direction) {
  element.animate([
    getTransform(-currentIndex),
    getTransform(-(currentIndex + direction))
  ], animationOptions);
}

function animateIn(element, direction) {
  element.animate([
    getTransform(-currentIndex + direction),
    getTransform(-currentIndex)
  ], animationOptions);
}

document.querySelector('.next-image').addEventListener('click', () => {
  animateOut(items[currentIndex], 1);
  currentIndex = currentIndex < items.length - 1 ?
    currentIndex + 1 : 0;
  animateIn(items[currentIndex], 1);
});

document.querySelector('.previous-image').addEventListener('click', () => {
  animateOut(items[currentIndex], -1);
  currentIndex = currentIndex > 0 ?
    currentIndex - 1 : items.length - 1;
  animateIn(items[currentIndex], -1);
});
