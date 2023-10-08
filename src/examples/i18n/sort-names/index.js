const names = [
  'Elena',
  'Mário',
  'André',
  'Renée',
  'Léo',
  'Olga',
  'Héctor',
]

const collator = new Intl.Collator();
names.sort(collator.compare);
