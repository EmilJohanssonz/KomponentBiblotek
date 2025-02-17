import React, { useState } from "react";

interface ModalProps {
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => setIsOpen(true)}
      >
        Öppna modal
      </button>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white p-5 rounded-lg shadow-lg w-96 dark:bg-gray-800"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold">{title}</h2>
            <div className="mt-3">{children}</div>
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
              onClick={() => setIsOpen(false)}
            >
              Stäng
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
