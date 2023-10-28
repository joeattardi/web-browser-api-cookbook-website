const popover = document.querySelector('#greeting');
const trigger = document.querySelector('#trigger');

trigger.addEventListener('click', () => {
  popover.togglePopover();
});
