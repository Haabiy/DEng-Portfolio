import React from 'react';

const Header = () => {
  return (
    <header className="fixed w-full z-10 bg-gray-800 shadow-md">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-3xl font-bold">My Portfolio</h1>
        <div className="space-x-6 hidden md:block">
          <a href="#about" className="hover:text-gray-400 transition-all duration-300">About</a>
          <a href="#projects" className="hover:text-gray-400 transition-all duration-300">Projects</a>
          <a href="#contact" className="hover:text-gray-400 transition-all duration-300">Contact</a>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="focus:outline-none text-gray-300 hover:text-white transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
