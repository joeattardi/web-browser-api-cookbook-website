function getUserListString(users) {
  const listFormat = new Intl.ListFormat();
  return listFormat.format(users.map(user => user.username));
}

const users = [
  { username: 'user1', name: 'Joe' },
  { username: 'user2', name: 'Bob' },
  { username: 'user3', name: 'Ben' }
];

console.log(getUserListString(users));
