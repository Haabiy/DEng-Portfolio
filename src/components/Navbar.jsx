import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggles the hamburger menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl text-white font-bold cursor-pointer">
          <Link to="hero" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
            Data 🫰🏾 Engineering
          </Link>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none relative"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-8 h-8 transition-transform duration-300 rotate-90"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Menu Links with Horizontal Bar Effect */}
        <ul className="hidden md:flex space-x-8 text-white text-lg relative">
          <div className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-blue-400 via-purple-600 to-blue-500 transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></div>
          <li className="group">
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className="hover:text-blue-400 transition duration-300 hover:cursor-pointer relative"
            >
              Home
              <div className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-blue-400 via-purple-600 to-blue-500 transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></div>
            </Link>
          </li>
          <li className="group">
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="hover:text-blue-400 transition duration-300 hover:cursor-pointer relative"
            >
              About
              <div className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-blue-400 via-purple-600 to-blue-500 transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></div>
            </Link>
          </li>
          <li className="group">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="hover:text-blue-400 transition duration-300 hover:cursor-pointer relative"
            >
              Projects
              <div className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-blue-400 via-purple-600 to-blue-500 transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></div>
            </Link>
          </li>
          <li className="group">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="hover:text-blue-400 transition duration-300 hover:cursor-pointer relative"
            >
              Contact Me
              <div className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-blue-400 via-purple-600 to-blue-500 transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></div>
            </Link>
          </li>
        </ul>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-95 z-40 flex flex-col items-center justify-center space-y-6 py-6 transition-all duration-500 ease-in-out transform ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="text-white text-2xl hover:text-blue-400 transition duration-300 hover:cursor-pointer"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="text-white text-2xl hover:text-blue-400 transition duration-300 hover:cursor-pointer"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="text-white text-2xl hover:text-blue-400 transition duration-300 hover:cursor-pointer"
            onClick={toggleMenu}
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="text-white text-2xl hover:text-blue-400 transition duration-300 hover:cursor-pointer"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
