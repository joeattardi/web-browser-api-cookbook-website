const shareButton = document.querySelector('#share-button');

if (!('share' in navigator)) {
  shareButton.disabled = true;
  document.querySelector('#not-supported').classList.remove('d-none');
} else {
  shareButton.addEventListener('click', () => {
    navigator.share({
      title: 'Web Browser API Cookbook',
      url: 'browserapis.dev'
    });
  });
}
