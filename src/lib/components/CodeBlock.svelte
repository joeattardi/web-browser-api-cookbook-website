<script>
  import Highlight from 'svelte-highlight';
  import html from 'svelte-highlight/languages/vbscript-html';
  import javascript from 'svelte-highlight/languages/javascript';

  export let code;
  export let filename;

  const types = {
    html,
    js: javascript
  };

  const language = types[filename.split('.')[1]];
</script>

<Highlight language={language} {code} />





