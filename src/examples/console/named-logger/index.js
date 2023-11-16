function createLogger(name, color) {
  return (...args) => {
    console.log(`%c${name}`, `color: ${color};`, ...args);
  };
}

const rendererLogger = createLogger('renderer', 'blue');
const dataLogger = createLogger('data', 'green');

rendererLogger('Rendering component');
dataLogger('Fetching data');