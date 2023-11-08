const textarea = document.querySelector('#text-area');
const copyButton = document.querySelector('#copy-button');
const pasteButton = document.querySelector('#paste-button');

copyButton.addEventListener('click', async () => {
  const { selectionStart, selectionEnd } = textarea;
  const selectedText = textarea.value.slice(selectionStart, selectionEnd);

  try {
    await navigator.clipboard.writeText(selectedText);
  } catch (error) {
    console.error('Clipboard error:', error);
  }
});

pasteButton.addEventListener('click', async () => {
  const currentValue = textarea.value;
  const { selectionStart, selectionEnd } = textarea;

  try {
    const clipboardValue = await navigator.clipboard.readText();
    const newValue = currentValue.slice(0, selectionStart) + clipboardValue + currentValue.slice(selectionEnd);
    textarea.value = newValue;
  } catch (error) {
    console.error('Clipboard error:', error);
  }
});
