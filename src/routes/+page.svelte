<div>
  <div class="hero">
    <img class="cover" src="/cover.png" alt="Web API Cookbook cover" />
    <div class="content">
      <h1 class="title">Web API Cookbook</h1>
      <div class="subtitle">Level Up Your JavaScript Applications</div>
      <div class="author">by Joe Attardi</div>
      <div class="tagline">Unlock the power of modern web browser APIs.</div>
      <div class="ctas">
        <a class="cta primary-cta" href="https://www.amazon.com/Web-API-Cookbook-JavaScript-Applications/dp/1098150694">
          Buy from Amazon
          <i class="bi bi-arrow-right"></i>
        </a>
        <a class="cta secondary-cta" href="/examples">See code and demos</a>
      </div>
      <div>Also available from:</div>
      <div class="secondary-links">
        <a class="secondary-link" href="https://www.barnesandnoble.com/w/web-api-cookbook-joe-attardi/1144735729?ean=9781098150693">Barnes &amp; Noble</a>
        <a class="secondary-link" href="https://www.oreilly.com/library/view/web-api-cookbook/9781098150686/">O'Reilly Platform</a>
        <a class="secondary-link" href="https://books.apple.com/us/book/web-api-cookbook/id6479818683">Apple Books</a>
        <a class="secondary-link" href="https://play.google.com/store/books/details/Joe_Attardi_Web_API_Cookbook?id=ZaT8EAAAQBAJ">Google Play Books</a>
      </div>
    </div>
  </div>
</div>

<style>
  @keyframes appear-slide {
    from {
      opacity: 0;
      transform: translateY(-8px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes appear-scale {
    from {
      opacity: 0;
      transform: scale(0.9);
    }

    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  .secondary-links {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
  }

  .secondary-link {
    border: 1px solid #1d4ed8;
    padding: 8px 16px;
    text-decoration: none;
    border-radius: 5px;
    transition: transform 250ms, background-color 250ms;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  }

  .secondary-link:hover {
    background: #dbeafe
  }

  .secondary-link:active {
    box-shadow: none;
    transform: scale(0.98);
  }

  .ctas {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 16px;
    margin-bottom: 16px;
  }

  .cta {
    font-size: 1.2rem;
    text-decoration: none;
    border-radius: 5px;
    padding: 8px 32px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: bold;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    transition: transform 250ms, background-color 250ms;
  }

  .cta:active {
    box-shadow: none;
    transform: scale(0.98);
  }

  .primary-cta {
    background: #d97706;
    color: white;
    border: 1px solid transparent;
  }

  .primary-cta:hover {
    background: #f59e0b;
  }

  .secondary-cta {
    border: 1px solid #d97706;
    color: #d97706;
  }

  .secondary-cta:hover {
    background: #fffbeb;
  }

  .hero {
    background: #f1f5f9;
    padding: 32px;
    display: flex;
    align-items: flex-start;
    gap: 16px;
    border-radius: 10px;
    border: 1px solid #e2e8f0
  }

  .hero .content {
    flex-grow: 1;
    gap: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: appear-slide 250ms;
    animation-delay: 350ms;
    animation-fill-mode: both;
  }

  .cover {
    width: 33%;
    height: auto;
    animation: appear-scale 250ms;
    animation-delay: 250ms;
    animation-fill-mode: both;
  }

  .tagline {
    font-weight: bold;
    font-size: 4rem;
    text-align: center;
    line-height: 1;
  }

  .title {
    font-size: 3rem;
    font-weight: bold;
    margin: 0;
  }

  .subtitle {
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
  }
</style>
