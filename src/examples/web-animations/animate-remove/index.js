async function removeItem(item) {
  await item.animate([
    { opacity: 1, transform: 'translateX(0)', height: `${item.offsetHeight}px` },
    { opacity: 0, transform: 'translateX(-100%)', height: 0, padding: 0 }
  ], { duration: 500, fill: 'both', easing: 'ease-in-out' }).finished;

  item.remove();
}

document.querySelectorAll('li').forEach(item => {
  item.addEventListener('click', () => {
    removeItem(item);
  });
})