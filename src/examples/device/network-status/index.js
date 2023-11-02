if (navigator.connection) {
  const network = navigator.connection;

  if (network.effectiveType) {
    document.querySelector('#network-speed').textContent = network.effectiveType;
  }

  if (network.downlink) {
    document.querySelector('#network-bandwidth').textContent = `${network.downlink}Mbps`;
  }
} else {
  document.querySelector('#supported').classList.add('d-none');
  document.querySelector('#not-supported').classList.remove('d-none');
}