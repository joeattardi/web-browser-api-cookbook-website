<script>
  import joe from './joe.jpg';
</script>
<div class="p-4">
  <h2>About the Book</h2>

  <p>
    <em>Web API Cookbook</em> is a book by Joe Attardi, 
    published by O'Reilly Media in 2024. The book contains examples or "recipes" demonstrating
    how to accomplish specific tasks using only the APIs built in to modern web browsers.
  </p>

  <p>
    Many things that once required third-party JavaScript libraries or browser
    plugins are now supported by the browser platform itself.
  </p>

  <p>The book covers topics such as:</p>

  <ul>
    <li>Working with persisted data and local files</li>
    <li>Internationalization</li>
    <li>Speech synthesis and recognition</li>
    <li>Communciating with APIs and real-time data</li>
    <li>Reacting to changes in the DOM</li>
    <li>Custom elements</li>
    <li>Reading device information and sensors</li>
    <li>Performance statistics</li>
    <li>The Web Animations API</li>
  </ul>

  <h2>About the Author</h2>
  <div class="d-flex">
    <img id="headshot" src={joe} alt="Joe Attardi" />
    <div>
      <p>
        Joe Attardi is a software developer and author with over 20 years of
        programming experience, specializing in frontend development and
        JavaScript. He has worked on a variety of large-scale projects for
        companies such as Synopsys, Salesforce, Constant Contact, and Dell.
      </p>

      <p>
        He is also the author of <a
          href="https://link.springer.com/book/10.1007/978-1-4842-6294-8"
          ><em>Modern CSS (2020)</em></a
        >
        and
        <a href="https://link.springer.com/book/10.1007/978-1-4842-6297-9"
          ><em>Using Gatsby and Netlify CMS (2020)</em>.</a
        >
      </p>

      <p>Joe lives just outside Boston, MA with his wife and son.</p>
    </div>
  </div>
</div>

<style>
  #headshot {
    height: 200px;
    margin-right: 1em;
  }
</style>
