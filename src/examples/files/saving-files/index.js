function requestPermission() {
  console.log()
}

document.querySelector('#save-button').addEventListener('click', async event => {
  const outputFile = await window.showSaveFilePicker();
  console.log(await outputFile.queryPermission({ mode: 'readwrite' }));
  const stream = await outputFile.createWritable();
  await stream.write('hello world');
  await stream.close();
});
