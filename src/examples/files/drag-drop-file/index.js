const target = document.querySelector('.drop-target');

target.addEventListener('drop', event => {
  event.preventDefault();
  const [item] = event.dataTransfer.items;
  const file = item.getAsFile();

  const reader = new FileReader();

  reader.addEventListener('load', event => {
    const image = document.createElement('img');
    image.src = event.target.result;
    target.replaceChildren(image);
    target.classList.remove('drop-target');
  });

  reader.readAsDataURL(file);
});

target.addEventListener('dragover', event => {
  event.preventDefault();
});
