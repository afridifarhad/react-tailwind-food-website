import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          MyWebsite
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
        <ul className={`md:flex md:space-x-6 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <li className="border-b border-gray-400 md:border-none">
            <a href="#" className="text-white hover:text-gray-300 block py-2 md:py-0 md:inline">
              Home
            </a>
          </li>
          <li className="border-b border-gray-400 md:border-none">
            <a href="#" className="text-white hover:text-gray-300 block py-2 md:py-0 md:inline">
              About
            </a>
          </li>
          <li className="border-b border-gray-400 md:border-none">
            <a href="#" className="text-white hover:text-gray-300 block py-2 md:py-0 md:inline">
              Item
            </a>
          </li>
          <li className="border-b border-gray-400 md:border-none">
            <a href="#" className="text-white hover:text-gray-300 block py-2 md:py-0 md:inline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
