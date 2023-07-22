<script>
  const CONVERTKIT_FORM_ID = 5053784;
</script>

<svelte:head>
  <title>Mailing List Signup</title>
</svelte:head>

<h1>Mailing List Signup</h1>

<p>Sign up to receive email updates about the book's progress, and find out when it is available for early access!</p>

<p>No spam, I promise. Unsubscribe any time.</p>


<form
  action={`https://app.convertkit.com/forms/${CONVERTKIT_FORM_ID}/subscriptions`}
  method="post"
  data-sv-form={CONVERTKIT_FORM_ID}
  data-uid="25824d70c3"
  data-format="inline"
  data-version="5"
>
  <div class="mb-3">
    <label class="form-label" for="email">Email address</label>
    <input 
      type="email" 
      class="form-control" 
      id="email" 
      name="email"
      required
    >
  </div>
  <button class="btn btn-primary">Sign Up</button>
</form>