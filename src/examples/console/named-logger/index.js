function createLogger(name, color) {
  return console.log.bind(console, `%c${name}`, `color: ${color};`);
}

const rendererLogger = createLogger('renderer', 'blue');
const dataLogger = createLogger('data', 'green');

rendererLogger('Rendering component');
dataLogger('Fetching data');