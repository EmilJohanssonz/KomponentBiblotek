import React, { useState } from "react";

const DarkModeSwitch: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={toggleDarkMode}
        className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full"
      >
        {darkMode ? "🌙" : "🌞"}
      </button>
      <span className="text-gray-700 dark:text-white">Dark Mode</span>
    </div>
  );
};

export default DarkModeSwitch;
