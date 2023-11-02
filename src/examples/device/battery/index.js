if ('getBattery' in navigator) {
  navigator.getBattery().then(battery => {
    const batteryIcon = document.querySelector('#battery-icon');
    if (battery.charging) {
      batteryIcon.classList.add('bi-battery-charging');
    } else {
      batteryIcon.classList.add('bi-battery-full');
    }

    document.querySelector('#battery-level').textContent = `${battery.level * 100}%`;
    document.querySelector('#battery-level-item').textContent = `Battery level: ${battery.level * 100}%`;
    document.querySelector('#battery-charging-item').textContent = `Charging: ${battery.charging}`;

    battery.addEventListener('chargingchange', () => {
      batteryIcon.classList.toggle('bi-battery-charging', battery.charging);
      batteryIcon.classList.toggle('bi-battery-full', !battery.charging);
      document.querySelector('#battery-charging-item').textContent = `Charging: ${battery.charging}`;
    });

    battery.addEventListener('levelchange', () => {
      document.querySelector('#battery-level').textContent = `${battery.level * 100}%`;
    })
  });
} else {
  document.querySelector('#not-supported').classList.remove('d-none');
}
