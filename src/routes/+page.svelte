<h1 class="display-3 fw-bold text-center">Web API Cookbook</h1>
<h2 class="fs-4 text-center mb-5">by Joe Attardi</h2>

<div class="main-container">
  <img src="/cover.png" class="cover mb-4" />
  <div class="me-4">
    <p>
      <em>Web API Cookbook</em> will teach you how to leverage the powerful
      APIs available in today's modern browsers to enhance your web applications.
      Many things that once required third-party JavaScript libraries or browser
      plugins are now supported by the browser platform itself.
    </p>

    <div class="d-flex flex-column gap-4">
      <a class="btn btn-primary px-4 py-3 fs-4 w-100" href="https://www.amazon.com/Web-API-Cookbook-JavaScript-Applications/dp/1098150694">
        <div class="fw-bold">Get the book (Amazon)</div>
      </a>
      <a class="btn btn-primary px-4 py-3 fs-4 w-100" href="https://www.oreilly.com/library/view/web-api-cookbook/9781098150686/">
        <div class="fw-bold">Get the book (O'Reilly)</div>
      </a>
      <a class="btn btn-primary px-4 py-3 fs-4 w-100" href="examples">
        <div class="fw-bold">Explore the examples</div>
      </a>
    </div>
    
  </div>
</div>

<style>
  .cover {
    width: 30vw;
    max-width: 500px;
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