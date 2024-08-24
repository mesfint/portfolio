import React from 'react';
import { useTheme } from '../context/ThemeContext'; // Adjust the import path

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full focus:outline-none"
      aria-label="Toggle Dark Mode"
    >
      {theme === 'light' ? '🌙 ' : '☀️ '}
    </button>
  );
};
