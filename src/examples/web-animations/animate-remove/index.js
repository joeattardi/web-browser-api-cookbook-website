/**
 * Removes an element from the DOM after performing an animation.
 * @param element The element to remove
 */
async function removeElement(element) {
  // First, perform the animation and make the element disappear from view.
  // The resulting animation's `finished` property is a Promise.
  await element.animate([
    { opacity: 1, transform: 'translateX(0)', height: `${element.offsetHeight}px` },
    { opacity: 0, transform: 'translateX(-100%)', height: 0, padding: 0 }
  ], { duration: 250, easing: 'ease-in-out' }).finished;

  // Animation is done, now remove the element from the DOM.
  element.remove();
}

/**
 * Shows an element that was just added to the DOM with an animation.
 * @param element The element to show
 */
function showElement(element) {
  element.animate([
    { opacity: 0, transform: 'translateX(-100%)', height: 0, padding: 0 },
    { opacity: 1, transform: 'translateX(0)', height: `${element.offsetHeight}px` }
  ], { duration: 250, easing: 'ease-in-out' });
}

function addItem() {
  const list = document.querySelector('.list-group');
  const newItem = document.createElement('li');
  newItem.textContent = 'A new item';
  newItem.className = 'list-group-item';
  newItem.addEventListener('click', () => {
    removeElement(newItem);
  });

  list.insertBefore(newItem, list.firstElementChild);
  showElement(newItem);
}

document.querySelector('.add-button').addEventListener('click', () => {
  addItem();
});

document.querySelectorAll('li').forEach(item => {
  item.addEventListener('click', () => {
    removeElement(item);
  });
});
