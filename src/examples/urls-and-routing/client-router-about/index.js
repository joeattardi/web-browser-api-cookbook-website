// The `app` element contains all of the UI for the demo.
const app = document.querySelector('#app');

// The `router-content` element is where the template associated with
// the active route will be rendered.
const content = document.querySelector('#router-content');

function createRouter() {
  const router = {
    // Associates known URL patterns with templates.
    routes: [
      { template: document.querySelector('#template-home'), path: '/examples/urls-and-routing/client-router' },
      { template: document.querySelector('#template-about'), path: '/examples/urls-and-routing/client-router-about' },
    ],

    /**
     * Renders the content associated with a URL by looking up the associated route.
     *
     * @param the desired URL path
     * @param pushState whether or not to fire a pushState call
     */
    navigate(path, pushState = true) {
      // Look for a route object with a matching `path` property.
      const route = this.routes.find((route) => route.path === path);
      if (route) {
        // We found a route, so render the associated template.
        content.replaceChildren(route.template.content.cloneNode(true));
      }

      // Toggle some CSS classes to indicate the active route
      app.querySelector('.active')?.classList.remove('active');
      app.querySelector(`[href="${path}"`)?.classList.add('active');

      if (pushState) {
        window.history.pushState({}, '', path);
      }
    },
  };

  function renderCurrentUrlContent() {
    const url = window.location.pathname;
    router.navigate(url, false);
  }

  // The `popstate` event fires when the Back or Forward buttons are clicked.
  // We check the new current URL and render the appropriate template.
  window.addEventListener('popstate', () => {
    renderCurrentUrlContent();
  });
  
  // On initial load, look at the URL and figure out what template we should display.
  renderCurrentUrlContent();

  return router;
}

const router = createRouter();

// We need the links to behave a little differently.
// The default behavior is to load the new route with a full page refresh,
// which we don't want. So we'll intercept the click events and fire a client-side
// routing action instead.
const links = app.querySelectorAll('a');
links.forEach(link => {
  link.addEventListener('click', event => {
    // Prevent the browser from actually navigating.
    event.preventDefault();

    // Perform a client-side only routing action.
    router.navigate(event.target.getAttribute('href'));
  });
});
