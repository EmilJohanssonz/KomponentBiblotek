import React, { useState } from "react";

const Slider: React.FC = () => {
  const [value, setValue] = useState<number>(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };

  return (
    <div className="flex items-center space-x-4">
      <span className="text-gray-700 dark:text-white">Value: {value}</span>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleSliderChange}
        className="w-32"
      />
    </div>
  );
};

export default Slider;
