const orientationLabel = document.querySelector('#orientation');
const angleLabel = document.querySelector('#angle');

orientationLabel.textContent = screen.orientation.type;
angleLabel.textContent = screen.orientation.angle;

screen.orientation.addEventListener('change', () => {
  orientationLabel.textContent = screen.orientation.type;
  angleLabel.textContent = screen.orientation.angle;
});
