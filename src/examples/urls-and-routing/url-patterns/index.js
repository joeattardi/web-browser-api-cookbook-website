const form = document.querySelector('form');
const resultsContainer = document.querySelector('#results');

form.addEventListener('submit', event => {
  event.preventDefault();

  const data = new FormData(event.target);

  const patterns = {};
  if (data.get('hostname')) {
    patterns.hostname = data.get('hostname');
  }

  if (data.get('pathname')) {
    patterns.pathname = data.get('pathname');
  }

  const pattern = new window.URLPattern(patterns);

  // Attempt to match our pattern against our URL.
  const matcher = pattern.exec(data.get('url'));

  // `matcher` is null if the URL doesn't match.
  if (!matcher) {
    console.log('URL does not match pattern')
    const results = document.querySelector('#result-template-noMatch').content.cloneNode(true).firstElementChild;
    results.querySelector('.url').textContent = data.get('url');
    resultsContainer.replaceChildren(results);
  } else {
    console.log('URL matches pattern');
    console.log('Matcher data:', matcher);

    const results = document.querySelector('#result-template-match').content.cloneNode(true).firstElementChild;
    results.querySelector('.url').textContent = data.get('url');

    const details = results.querySelector('.details');

    // The matcher has multiple groups for each placeholder, we'll render
    // each separately.
    details.appendChild(renderMatchGroup(matcher, 'hostname'));
    details.appendChild(renderMatchGroup(matcher, 'pathname'));

    resultsContainer.replaceChildren(results);
  }
});

function renderMatchGroup(matcher, key) {
  const groupList = document.createElement('ul');
  const group = document.createElement('li');
  group.innerHTML = `<strong>${key}</strong>: <span class="font-monospace">${matcher[key].input}</span>`;
  groupList.appendChild(group);

  const matchGroups = document.createElement('ul');

  for (const groupKey of Object.keys(matcher[key].groups)) {
    if (groupKey === '0') {
      continue;
    }
    
    
    const item = document.createElement('li');
    item.innerHTML = `<strong>${groupKey}</strong>: <code>${matcher[key].groups[groupKey]}`;
    matchGroups.appendChild(item);
  }

  groupList.appendChild(matchGroups);

  return groupList;
}
