function formatPriceRange(prices) {
  const format = new Intl.NumberFormat(navigator.language, { 
    style: 'currency',

    // the currency code is required when using `style: currency`
    currency: 'USD' 
  });
  return format.formatRange(
    // find the lowest price in the array
    Math.min(...prices),

    // find the highest price in the array
    Math.max(...prices)
  );
}
