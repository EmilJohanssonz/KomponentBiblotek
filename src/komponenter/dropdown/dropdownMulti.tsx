import React, { useState } from "react";

interface MultiSelectDropdownProps {
  options: string[];
}

const MultiSelectDropdown: React.FC<MultiSelectDropdownProps> = ({
  options,
}) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleSelection = (option: string) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option],
    );
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-green-500 text-white px-4 py-2 rounded-md"
      >
        {selectedOptions.length > 0
          ? selectedOptions.join(", ")
          : "Select options"}
      </button>
      {isOpen && (
        <ul className="absolute left-0 mt-2 bg-white shadow-md rounded-md w-40">
          {options.map((option) => (
            <li
              key={option}
              className="px-4 py-2 flex items-center hover:bg-gray-200 cursor-pointer"
              onClick={() => toggleSelection(option)}
            >
              <input
                type="checkbox"
                checked={selectedOptions.includes(option)}
                onChange={() => toggleSelection(option)}
                className="mr-2"
              />
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MultiSelectDropdown;
