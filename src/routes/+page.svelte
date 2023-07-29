<h1 class="display-3 fw-bold text-center">Web Browser API Cookbook</h1>
<h2 class="fs-4 text-center mb-5">by Joe Attardi</h2>

<div class="main-container">
  <img src="/cover.jpeg" class="cover mb-4" />
  <div class="me-4">
    <p>
      <em>Web Browser API Cookbook</em> will teach you how to leverage the powerful
      APIs available in today's modern browsers to enhance your web applications.
      Many things that once required third-party JavaScript libraries or browser
      plugins are now supported by the browser platform itself.
    </p>

    <p>
      The book is due to be published by O'Reilly Media in 2025 but is currently available in early release.
    </p>
  </div>
</div>

<div class="d-flex flex-column mb-4">
  <div class="text-center mb-4">
    <a class="btn btn-primary px-4 py-3 fs-4 w-100" href="examples">
      <div class="fw-bold">Explore the examples</div>
      <small class="fs-6"
        >Working demos demonstrating modern browser APIs</small
      >
    </a>
  </div>
  <div class="text-center">
    <a class="btn btn-outline-secondary px-4 py-3 fs-4 w-100" href="signup">
      <div class="fw-bold">Sign up for updates</div>
      <small class="fs-6">Get email updates about the book's progress</small
      >
    </a>
  </div>
</div>

<style>
  .cover {
    width: 30vw;
    margin-right: 1.5rem;
  }

  .main-container {
    display: flex;
    align-items: flex-start;
  }

  .main-container p {
    font-size: clamp(1.2rem, 2vw, 2rem);
  }

  @media (max-width: 768px) {
    .main-container {
      flex-direction: column;
      align-items: center;
    }

    .cover {
      margin-right: 0;
    }

    .main-container p {
      text-align: center;
    }
  }
</style>