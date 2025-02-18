import React, { useState } from "react";

interface DropdownProps {
  options: string[];
  onSelect: (option: string) => void;
}

const DropdownEz: React.FC<DropdownProps> = ({ options, onSelect }) => {
  const [selected, setSelected] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: string) => {
    setSelected(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="inline-block mt-2.5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        {selected}
      </button>
      {isOpen && (
        <ul className="absolute left-0 mt-2 bg-white shadow-md rounded-md w-40">
          {options.map((option) => (
            <li
              key={option}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownEz;
