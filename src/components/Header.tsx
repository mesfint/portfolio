import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { useTheme } from '../context/ThemeContext';

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  

  return (
    <header
      className={`py-4 px-6 fixed w-full z-50 ${
        theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'
      } shadow-md`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold cursor-pointer">
          <Link to="home" smooth={true}>
            Mesfin <span className="text-l">.</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link to="home" smooth={true} className="hover:text-blue-500 cursor-pointer">
            Home
          </Link>
          <Link to="about" smooth={true} className="hover:text-blue-500 cursor-pointer">
            About
          </Link>
          <Link to="projects" smooth={true} className="hover:text-blue-500 cursor-pointer">
            Projects
          </Link>
          <Link to="blogs" smooth={true} className="hover:text-blue-500 cursor-pointer">
            Blogs
          </Link>
          <Link to="contact" smooth={true} className="hover:text-blue-500 cursor-pointer">
            Contact
          </Link>
        </nav>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className={`ml-4 p-2 rounded-full ${
            theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'
          }`}
        >
          {theme === 'dark' ? 
          <>
           <img
      src="https://cdn.prod.website-files.com/63edd6d4291b030b472abf35/63ede9b3f7f0e7ff68848031_lvng-menu-moon.svg"
      alt="Moon Icon"
      className="w-6 h-6"
    />
          </>
          : '☀️'}
        </button>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={handleMenuToggle}
            className={`text-3xl focus:outline-none ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
            aria-label="Toggle Menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'} bg-opacity-95 md:hidden`}
      >
        <div className="flex justify-end p-6">
          <button
            onClick={handleMenuToggle}
            className={`text-3xl focus:outline-none ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
            aria-label="Close Menu"
          >
            ✕
          </button>
        </div>

        <nav className="flex flex-col items-center space-y-6">
          <Link to="home" smooth={true} className="text-2xl hover:text-blue-500 cursor-pointer" onClick={handleMenuToggle}>
            Home
          </Link>
          <Link to="about" smooth={true} className="text-2xl hover:text-blue-500 cursor-pointer" onClick={handleMenuToggle}>
            About
          </Link>
          <Link to="projects" smooth={true} className="text-2xl hover:text-blue-500 cursor-pointer" onClick={handleMenuToggle}>
            Projects
          </Link>
          <Link to="blogs" smooth={true} className="text-2xl hover:text-blue-500 cursor-pointer" onClick={handleMenuToggle}>
            Blogs
          </Link>
          <Link to="contact" smooth={true} className="text-2xl hover:text-blue-500 cursor-pointer" onClick={handleMenuToggle}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};
