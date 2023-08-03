/**
 * Loads the post titles for a given user ID.
 * @param userId the ID of the user whose posts you want to load
 * @returns a Promise that resolves to an array of post titles
 */
function getPostTitles(userId) {
  console.log('Getting user');
  return getUser(userId)
    // Callback is called with the loaded user object
    .then(user => {
      console.log(`Getting posts for ${user.name}`);
      // This `Promise` is also returned from `.then`
      return getPosts(user);
    })
    // Calling `then` on the `getPosts` `Promise`
    .then(posts => {
      // Returns another Promise that will resolve to an array of post titles
      return posts.map(post => post.title);
    })
    // Called if either getUser or getPosts are rejected
    .catch(error => {
      console.error('Error loading data:', error);
    });
}

const list = document.querySelector('#posts');

getPostTitles(1)
  .then(postTitles => {
    document.querySelector('#loader').remove();

    postTitles.forEach(title => {
      const item = document.createElement('li');
      item.className = 'list-group-item';
      item.textContent = title;
      list.appendChild(item);      
    });
  });

// Simulates some functions that would, in real life,
// make network requests.
function getUser(id) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        name: 'Olivia Anderson'
      });
    }, 1000);
  });
}

function getPosts(user) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        { title: 'Mastering JavaScript Fundamentals: A Comprehensive Guide'},
        { title: 'Supercharge Your Web Development with JavaScript Frameworks' },
        { title: 'Building Interactive Web Applications with JavaScript and DOM Manipulation' },
      ]);
    }, 2000);
  });
}
