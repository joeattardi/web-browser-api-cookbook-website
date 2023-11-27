function getRange(textNode, textToHighlight) {
  const startOffset = textNode.textContent.indexOf(textToHighlight);
  const endOffset = startOffset + textToHighlight.length;

  // Create a Range for the text to highlight
  const range = new Range();
  range.setStart(textNode, startOffset);
  range.setEnd(textNode, endOffset);

  return range;
}

const node = document.querySelector('#text');
const range = getRange(node.firstChild, 'highlight some of the text');

// Register the CSS highlight
const highlight = new Highlight(range);
CSS.highlights.set('highlight-range', highlight);
