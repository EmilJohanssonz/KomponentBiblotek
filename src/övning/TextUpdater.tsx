import { useState } from "react";


const TextUpdater = () => {
  const [text, setText] = useState("")
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }
return (
  <>
    <input type="text" placeholder="Text" value={text} onChange={handleChange} className="bg-gray-300" />
    <p>Du skrev {text}</p>
  </>
);
}

export default TextUpdater;