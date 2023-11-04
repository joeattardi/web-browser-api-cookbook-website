function roundToTwoDecimalPlaces(number) {
  const format = new Intl.NumberFormat(navigator.language, {
    maximumFractionDigits: 2
  });

  return format.format(number);
}

// prints "5.49"
console.log(roundToTwoDecimalPlaces(5.49125));

// prints "5.5"
console.log(roundToTwoDecimalPlaces(5.49621));
