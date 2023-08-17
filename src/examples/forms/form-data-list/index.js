const data = new FormData(form);

for (const [key, value] of data.entries()) {
  console.log(key, value);
}
