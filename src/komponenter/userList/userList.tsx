type User = {
  id : number;
  name : string;
}

const users: User [] = [
  {id: 0, name: "Emil"},
  {id: 1, name: "Sebb"},
  {id: 2, name: "Feli"},
];



const UserList = () => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};


export default UserList