window.performance.mark('render-start');
const dataView = new DataView();
dataView.render(data);
window.performance.mark('render-end');

const measure = window.performance.measure('render', 'render-start', 'render-end');
