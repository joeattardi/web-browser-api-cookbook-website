function resolveUrl(relativePath, baseUrl) {
  return new URL(relativePath, baseUrl).href;
}

const form = document.querySelector('#url-form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const fullUrl = resolveUrl(
    form.elements.relativePath.value,
    form.elements.baseUrl.value
  );
  
  const result = document.querySelector('#result');
  result.querySelector('#result-url').textContent = fullUrl;
  result.classList.remove('d-none');
});
