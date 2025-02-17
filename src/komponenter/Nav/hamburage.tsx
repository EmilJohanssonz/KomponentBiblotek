import React, { useState } from "react";

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Min App</h1>
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        <ul
          className={`md:flex md:space-x-6 absolute md:static bg-blue-500 md:bg-transparent top-14 left-0 w-full md:w-auto transition-transform ${isOpen ? "block" : "hidden"}`}
        >
          <li>
            <a href="/" className="block px-4 py-2 hover:underline">
              Hem
            </a>
          </li>
          <li>
            <a href="/about" className="block px-4 py-2 hover:underline">
              Om oss
            </a>
          </li>
          <li>
            <a href="/contact" className="block px-4 py-2 hover:underline">
              Kontakt
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default HamburgerMenu;
