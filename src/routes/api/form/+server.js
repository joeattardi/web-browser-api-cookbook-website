import { json } from '@sveltejs/kit';

async function getFromJson(request) {
  const json = await request.json();
  return json;
}

async function getFromFormData(request) {
  const body = await request.formData();

  const json = {};
  for (const [key, value] of body.entries()) {
    json[key] = value;
  }
  return json;
}

export async function POST({ request }) {
  const receivedData = await (request.headers.get('content-type') === 'application/json' ?
    getFromJson(request) :
    getFromFormData(request));

  return json(receivedData);
}
