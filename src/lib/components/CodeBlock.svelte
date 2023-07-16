<script>
  import Highlight from 'svelte-highlight';
  import html from 'svelte-highlight/languages/vbscript-html';
  import javascript from 'svelte-highlight/languages/javascript';

  export let code;
  export let type;

  const types = {
    html,
    javascript
  };

  const names = {
    html: 'HTML',
    javascript: 'JavaScript'
  }

  const language = types[type];
</script>

<div class="code-block my-4" data-lang={type}>
  <span class="m-2 badge fs-6">{names[type]}</span>
  <Highlight language={language} {code} />
</div>

<style>
  .code-block {
    background: #011627;
    font-size: 1.2em;
  }

  .code-block :global(.hljs) {
    border-radius: 5px;
  }

  .code-block .badge {
    color: #000000;
  }

  .code-block[data-lang="javascript"] .badge {
    background: #f7df1e;
  }

  .code-block[data-lang="html"] .badge {
    background: #E34C26;
  }
</style>
