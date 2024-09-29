import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 text-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">My Portfolio</h1>

        {/* Hamburger Menu */}
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </div>

        {/* Navigation Links */}
        <div className={`md:flex md:items-center md:space-x-8 ${isOpen ? 'flex' : 'hidden'} absolute inset-0 bg-gray-900 md:bg-transparent transition-all duration-300`}>
          <ul className="flex flex-col md:flex-row md:mt-0 mt-16 md:space-x-8 text-lg">
            <li className="mx-4"><a href="#hero" className="hover:text-blue-400 transition duration-300" onClick={toggleMenu}>Home</a></li>
            <li className="mx-4"><a href="#about" className="hover:text-blue-400 transition duration-300" onClick={toggleMenu}>About</a></li>
            <li className="mx-4"><a href="#projects" className="hover:text-blue-400 transition duration-300" onClick={toggleMenu}>Projects</a></li>
            <li className="mx-4"><a href="#contact" className="hover:text-blue-400 transition duration-300" onClick={toggleMenu}>Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
