const editor = document.querySelector('#editor');
const characterCount = document.querySelector('#character-count');
const wordCount = document.querySelector('#word-count');
const sentenceCount = document.querySelector('#sentence-count');

const characters = new Intl.Segmenter(
  navigator.language,
  { granularity: 'grapheme' }
);

const words = new Intl.Segmenter(
  navigator.language,
  { granularity: 'word' }
);

const sentences = new Intl.Segmenter(
  navigator.language,
  { granularity: 'sentence' }
);

editor.addEventListener('input', () => {
  // The segmenters return iterables, which you can convert
  // into an array using spread syntax. Then you can get the length of
  // the array to find the count.
  characterCount.textContent = 
    [...characters.segment(editor.value)].length;
  wordCount.textContent = 
    [...words.segment(editor.value)].length;
  sentenceCount.textContent = 
    [...sentences.segment(editor.value)].length;
});
