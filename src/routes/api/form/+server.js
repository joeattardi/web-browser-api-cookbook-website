import { json } from '@sveltejs/kit';

export async function POST({ request }) {
  const body = await request.formData();

  const receivedData = {};
  for (const [key, value] of body.entries()) {
    receivedData[key] = value;
  }
  
  return json(receivedData);
}
