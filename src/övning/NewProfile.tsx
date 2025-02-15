import { useState } from "react";

const NewProfile = () => {
  const [profile, setProfile] = useState({ name: "", age: 0 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setProfile((prev) => ({
      ...prev,
      [name]: name === "age" ? Math.max(0, Number(value)) : value, 
    }));
  };

  const resetProfile = () => {
    setProfile({ name: "", age: 0 });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Profil sparad:", profile);
  };

  return (
    <div className="my-4 flex flex-col items-center justify-center">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Namn"
          value={profile.name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="age"
          placeholder="Ålder"
          value={profile.age}
          onChange={handleChange}
        />
        <button type="submit">Skicka</button>
        <button type="button" onClick={resetProfile}>
          Reset
        </button>
      </form>
      <p>
        Du skrev: {profile.name}, {profile.age} år
      </p>
    </div>
  );
};

export default NewProfile;
