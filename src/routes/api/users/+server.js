import { json } from '@sveltejs/kit';

const users = [
  { firstName: "John", lastName: "Smith", department: "Sales" },
  { firstName: "Emily", lastName: "Johnson", department: "Marketing" },
  { firstName: "Michael", lastName: "Davis", department: "Human Resources" },
  { firstName: "Sarah", lastName: "Thompson", department: "Finance" },
  { firstName: "David", lastName: "Wilson", department: "Engineering" }
];   

export function GET() {
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
