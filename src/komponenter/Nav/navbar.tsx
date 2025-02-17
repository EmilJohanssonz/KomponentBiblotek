import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Min App</h1>
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="/" className="hover:underline">
              Hem
            </a>
          </li>
          <li>
            <a href="/about" className="hover:underline">
              Om oss
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:underline">
              Kontakt
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
