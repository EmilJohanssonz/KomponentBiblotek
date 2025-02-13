import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center h-28 bg-gray-200">
      <p className="text-2xl font-bold mb-4">Antal klick {count}</p>
      <button  className="bg-blue-500 text-white p-2 rounded shadow-md hover:bg-blue-700 transition duration-300"onClick={() => setCount(count + 1)}>Öka</button>
    </div>
  );
}


export default Counter
