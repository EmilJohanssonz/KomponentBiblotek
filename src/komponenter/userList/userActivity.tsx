type User = {
  id: number;
  name: string;
  active: boolean;
};

const users: User[] = [
  { id: 1, name: "Emil", active: true },
  { id: 2, name: "Sebb", active: false },
  { id: 3, name: "Feli", active: true },
];

const ActiveUsers = () => {
  const activeUsers = users.filter((user) => user.active);

  return (
    <ul>
      {activeUsers.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default ActiveUsers;
