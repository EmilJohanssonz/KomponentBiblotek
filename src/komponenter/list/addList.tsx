import { useState } from "react";

export default function AnimalList() {
  const [animals, setAnimals] = useState<string[]>([""]);
  const [inputAnimal, setInputAnimal] = useState("");

  const editAnimal = (animal: string) => {
    setAnimals(animals.map((a) => (a === animal ? inputAnimal : a)));
  };

  const deleteAnimal = (animal: string) => {
    setAnimals(animals.filter((a) => a !== animal));
  };

  const addAnimal = () => {
    setAnimals([...animals, inputAnimal]);
  };

  return (
    <>
      <h1 className="mt-2.5">Animal List</h1>
      <input
        className="bg-gray-400"
        type="text"
        placeholder="Animal..."
        value={inputAnimal}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setInputAnimal(e.target.value);
        }}
      />
      <button onClick={addAnimal}>Add Animal</button>
      <ul>
        {animals.map((animal) => (
          <li key={animal}>
            {animal}{" "}
            <button
              onClick={() => {
                deleteAnimal(animal);
              }}
            >
              Delete
            </button>{" "}
            <button onClick={() => editAnimal(animal)}>Change me</button>
          </li>
        ))}
      </ul>
    </>
  );
}
