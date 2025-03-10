import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-[#fff] p-4 flex items-center justify-between h-16 shadow-md">
      <div className="flex items-center space-x-4">
        <h1 className=" text-2xl text-gray-800">My site</h1>
      </div>
      <div className="flex items-center justify-end">
        {/* Logo */}
        {/* Hamburger button  */}
        <h2 className="pr-3  text-xl">Home</h2>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-black focus:outline-none relative"
        >
          {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-10 w-14" />}
          {/* Dropdown menu */}
          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-[#fff] rounded-md shadow-lg z-50">
              <ul className="flex flex-col text-black font-ravi">
                <li className="p-4 hover:bg-gray-700">
                  <a href="#">Home</a>
                </li>
                <li className="p-4 hover:bg-gray-700">
                  <a href="#">Home</a>
                </li>
                <li className="p-4 hover:bg-gray-700">
                  <a href="#">Home</a>
                </li>
              </ul>
            </div>
          )}
        </button>
      </div>
    </nav>
  );
}
