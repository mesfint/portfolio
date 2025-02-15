import React from 'react';
import { ReactTyped } from "react-typed";
import { useTheme } from '../context/ThemeContext';


export const Home: React.FC = () => {
  const { theme } = useTheme();
  
    return (
        <main className={`home py-60  text-center ${theme === 'dark' ? 'bg-gray-950' : 'bg-gray-100'}`}>
          <h1 className={`text-5xl font-bold text-gray-90 ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-12}`}>
            Welcome to My Portfolio
          </h1>
          <ReactTyped
            strings={[
              "I'm a Frontend Developer",
              "A Web Performance Engineer",
              "& A FullStack Developer",
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
            className={`text-2xl text-gray-600 mt-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-12}`}
          />
        </main>
      );
};
