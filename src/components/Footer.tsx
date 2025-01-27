import React from 'react';
import { Link } from 'react-scroll';
import { useTheme } from '../context/ThemeContext';

export const Footer: React.FC = () => {
  const { theme } = useTheme();

  return (
    <footer
      className={`py-10 px-6 ${
        theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-300 text-gray-900'
      }`}
    >
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Navigation Links */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-lg font-bold">Navigate</h4>
          <div className="grid grid-cols-2 gap-4">
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
          </div>
        </div>

        {/* About Section */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-lg font-bold">About Me</h4>
          <p>
            I am a passionate developer specializing in full-stack development. I love creating web
            applications that solve real-world problems.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-lg font-bold">Get in touch with me</h4>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/mesfin/" className="hover:text-blue-500">
              LinkedIn
            </a>
            <a href="https://github.com/mesfint" className="hover:text-blue-500">
              GitHub
            </a>
            
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="text-sm">&copy; {new Date().getFullYear()} Mesfin. All rights reserved.</p>
      </div>
    </footer>
  );
};
