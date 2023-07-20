/**
 * Opens a WebSocket connection to a given URL.
 * @param url the target URL
 * @returns the WebSocket object
 */
function openWebSocket(url) {
  // Open the WebSocket connection (the URL scheme should be ws: or wss:)
  const socket = new WebSocket(url);

  socket.addEventListener('open', onSocketOpened);
  socket.addEventListener('message', handleMessage);
  socket.addEventListener('error', handleError);
  socket.addEventListener('close', onSocketClosed);

  function onSocketOpened() {
    console.log('Socket ready for messages');
  }

  function handleMessage(event) {
    console.log('Received message:', event.data);
  }

  function handleError(event) {
    console.log('Socket error:', event);
  }

  function onSocketClosed() {
    console.log('Connection was closed');
  }

  return socket;
}

/**
 * Sends an object as a WebSocket message.
 * @param socket an established WebSocket connection
 * @param message The message to send
 */
function sendMessage(socket, message) {
  // The object is stringified before sending
  socket.send(JSON.stringify(message));
}
