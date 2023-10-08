const dateForm = document.querySelector('#date-form');
const output = document.querySelector('#output');

function getDateDifference(fromDate) {
  const today = new Date();

  if (fromDate.getFullYear() !== today.getFullYear()) {
    return { offset: fromDate.getFullYear() - today.getFullYear(), unit: 'year' };
  } else if (fromDate.getMonth() !== today.getMonth()) {
    return { offset: fromDate.getMonth() - today.getMonth(), unit: 'month' };
  } else {
    // You could even go more granular down to hours, minutes, or seconds!
    return { offset: fromDate.getDate() - today.getDate(), unit: 'day' };
  }
}

function getRelativeDate(fromDate) {
  const { offset, unit } = getDateDifference(fromDate);
  const format = new Intl.RelativeTimeFormat();
  return format.format(offset, unit);
}

dateForm.addEventListener('submit', event => {
  event.preventDefault();

  // valueAsDate gives the time in UTC, so adjust it
  // to the local time for an accurate comparison
  const selectedDate = dateForm.elements.date.valueAsDate;
  const localSelectedDate = new Date(selectedDate.getTime() + (selectedDate.getTimezoneOffset() * 60_000));

  output.classList.remove('d-none');
  output.textContent = getRelativeDate(localSelectedDate);
});
