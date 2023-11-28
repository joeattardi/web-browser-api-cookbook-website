const [stylesheet] = document.styleSheets;
stylesheet.insertRule(`
  .some-selector {
    background-color: red;
  }
`);
