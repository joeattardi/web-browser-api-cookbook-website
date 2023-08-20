async function removeItem(item) {
  await item.animate([
    { opacity: 1, transform: 'translateX(0)', height: `${item.offsetHeight}px` },
    { opacity: 0, transform: 'translateX(-100%)', height: 0, padding: 0 }
  ], { duration: 250, fill: 'both', easing: 'ease-in-out' }).finished;

  item.remove();
}

function addItem() {
  const list = document.querySelector('.list-group');
  const newItem = document.createElement('li');
  newItem.textContent = 'A new item';
  newItem.className = 'list-group-item';
  newItem.addEventListener('click', () => {
    removeItem(newItem);
  });

  list.insertBefore(newItem, list.firstElementChild);

  newItem.animate([
    { opacity: 0, transform: 'translateX(-100%)', height: 0, padding: 0 },
    { opacity: 1, transform: 'translateX(0)', height: `${newItem.offsetHeight}px` }
  ], { duration: 250, fill: 'both', easing: 'ease-in-out' })
}

document.querySelector('.add-button').addEventListener('click', () => {
  addItem();
});

document.querySelectorAll('li').forEach(item => {
  item.addEventListener('click', () => {
    removeItem(item);
  });
});
