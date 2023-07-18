/**
 * Removes a single parameter from an input URL.
 * 
 * @param inputUrl a URL string containing query parameters
 * @param paramName the name of the parameter to remove
 * @returns a new URL string with the given query parameter removed
 */
function removeQueryParameter(inputUrl, paramName) {
  console.log({ inputUrl, paramName });
  const url = new URL(inputUrl);
  url.searchParams.delete(paramName);
  return url.toString();
}

/**
 * Removes all parameters from an input URL.
 * 
 * @param inputUrl a URL string containing query parameters
 * @returns a new URL string with all query parameters removed
 */
function removeAllQueryParameters(inputUrl) {
  const url = new URL(inputUrl);
  url.search = '';
  return url.toString();
}

const form = document.querySelector('#url-form');
const removeButton = document.querySelector('#remove-single');
const removeAllButton = document.querySelector('#remove-all');

removeButton.addEventListener('click', () => {
  const url = form.elements.url.value;
  const param = form.elements.param.value;
  const newUrl = removeQueryParameter(url, param);
  renderResult(newUrl);
});

removeAllButton.addEventListener('click', () => {
  const newUrl = removeAllQueryParameters(form.elements.url.value);
  renderResult(newUrl);
});

function renderResult(newUrl) {
  const result = document.querySelector('#result');
  result.querySelector('#result-url').textContent = newUrl;
  result.classList.remove('d-none');
}
