// outputs '52,000.55'
console.log(
  new Intl.NumberFormat().format(5200.55)
);

// outputs '52.000,55'
console.log(
  new Intl.NumberFormat('de-DE').format(5200.55)
);
