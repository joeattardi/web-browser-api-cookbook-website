function addQueryParameter(urlString, name, value) {
  const url = new URL(urlString);
  url.searchParams.append(name, value);

  return url.href;
}

const form = document.querySelector('#url-form');
form.addEventListener('submit', event => {
  event.preventDefault();

  const { url, name, value } = form.elements;
  const newUrl = addQueryParameter(url.value, name.value, value.value);

  url.value = newUrl;

  name.value = '';
  value.value = '';
  name.focus();
});
