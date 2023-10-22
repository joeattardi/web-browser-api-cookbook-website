const dialog = document.querySelector('#confirm');
const trigger = document.querySelector('#show-confirm');
const result = document.querySelector('#result');
const confirmButton = document.querySelector('.confirm-button');
const cancelButton = document.querySelector('.cancel-button');

trigger.addEventListener('click', () => {
  dialog.showModal();
});

confirmButton.addEventListener('click', () => {
  dialog.close('confirm');
});

cancelButton.addEventListener('click', () => {
  dialog.close('cancel');
});

dialog.addEventListener('close', event => {
  console.log(dialog.returnValue);
  if (dialog.returnValue === 'confirm') {
    result.textContent = '✅ User confirmed.';
  } else {
    result.textContent = '❌ User canceled.';
  }
});