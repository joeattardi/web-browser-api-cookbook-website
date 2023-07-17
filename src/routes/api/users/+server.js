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
