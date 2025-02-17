import React from "react";

interface CardProps {
  title: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white dark:bg-gray-800">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="text-gray-700 dark:text-gray-300">{children}</div>
    </div>
  );
};

export default Card;
