import { useState } from "react";


export default function InputDemo() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <>
    <input className="placeholder-gray-300 bg-gray-600 " type="text" onChange={handleChange} value={inputValue} />
    <p>You Wrote: {inputValue}</p>
    </>
  );
};