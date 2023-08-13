const results = document.querySelector('.users');

/**
 * Observes a placeholder element with an IntersectionObserver.
 * When the placeholder becomes visible, more data is loaded.
 * 
 * @param placeholder The "Load More" placeholder element
 * @param loadMore A function that loads more data
 */
function observeForInfiniteScroll(placeholder, loadMore) {
  const observer = new IntersectionObserver(entries => {
    // If the placeholder becomes visible, it means the user
    // has scrolled to the bottom of the list. In this case, time to
    // load more data.
    if (entries[0].isIntersecting) {
      loadMore();
    }
  });
  
  observer.observe(placeholder);
}

observeForInfiniteScroll(document.querySelector('.load-more'), loadUsers);

async function loadUsers() {
  const response = await fetch('/api/users');
  const users = await response.json();

  users.forEach(user => {
    const userCard = document.querySelector('#user-template').content.cloneNode(true).firstElementChild;
    userCard.querySelector('.card-title').textContent = `${user.firstName} ${user.lastName}`;
    userCard.querySelector('.job-title').textContent = user.jobTitle;

    results.appendChild(userCard);
  });
}
