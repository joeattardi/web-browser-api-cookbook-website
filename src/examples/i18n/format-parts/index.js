const formatter = new Intl.DateTimeFormat(navigator.language, { dateStyle: 'short' });
const parts = formatter.formatToParts(new Date());
