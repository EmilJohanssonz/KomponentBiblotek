import React from "react";

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="hidden"
      />
      <div
        className={`w-5 h-5 border-2 flex items-center justify-center ${checked ? "bg-blue-500 border-blue-500" : "border-gray-400"}`}
      >
        {checked && <span className="text-white text-lg font-bold">✔</span>}
      </div>
      <span className="text-gray-800 dark:text-gray-300">{label}</span>
    </label>
  );
};

export default Checkbox;
