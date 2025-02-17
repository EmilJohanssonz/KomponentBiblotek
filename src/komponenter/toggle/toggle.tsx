import { useState } from "react";

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  return <button className="cursor-pointer text-sky-600"onClick={() => setIsOn(!isOn)}>{isOn ? "ON" : "OFF"}</button>;
};

export default Toggle;
