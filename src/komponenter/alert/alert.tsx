import React, { useState } from "react";

interface AlertProps {
  message: string;
  type: "success" | "error" | "info" | "warning";
}

const Alert: React.FC<AlertProps> = ({ message, type }) => {
  const [visible, setVisible] = useState<boolean>(true);

  const handleClose = () => {
    setVisible(false);
  };

  const alertClassNames = {
    success: "bg-green-500 text-white",
    error: "bg-red-500 text-white",
    info: "bg-blue-500 text-white",
    warning: "bg-yellow-500 text-white",
  };

  if (!visible) return null;

  return (
    <div
      className={`p-4 mb-4 rounded-md ${alertClassNames[type]} flex justify-between items-center`}
    >
      <span>{message}</span>
      <button onClick={handleClose} className="ml-4 text-lg font-bold">
        &times;
      </button>
    </div>
  );
};

export default Alert;
