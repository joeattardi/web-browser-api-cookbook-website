function updateUser(user) {
  // Log an error if the user id is null
  console.assert(user.id !== null, 'user.id must not be null');

  // Update the user.
  return fetch(`/api/users/${user.id}`, {
    method: 'PUT',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

updateUser({ id: null });
