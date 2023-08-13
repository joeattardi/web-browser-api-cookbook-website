import { json } from '@sveltejs/kit';
import { faker } from '@faker-js/faker';

export function GET() {
  const users = [];

  for (let i = 0; i < 10; i++) {
    users.push({ 
      firstName: faker.person.firstName(), 
      lastName: faker.person.lastName(), 
      department: faker.commerce.department(),
      jobTitle: faker.person.jobTitle()
    });
  }

  return new Response(JSON.stringify(users));
}

export async function POST({ request }) {
  const user = await request.json();

  const headers = {};
  request.headers.forEach((value, key) => {
    headers[key] = value;
  });

  return json({
    headers,
    body: user
  });
}
