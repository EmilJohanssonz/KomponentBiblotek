import { useState, useEffect } from "react";

type UserProps = {
  id: string;
  name: string;
};

function User() {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Laddar...</p>;

  return (
    <ul className="flex items-center justify-center flex-col border-2 rounded-lg border-amber-50 bg-amber-100 shadow-2xl shdaow">
      {users.map((user) => (
        <li className="text-stone-600 border-1 p-1 cursor-pointer mt-0.5 font-bold font-sans"key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default User;
