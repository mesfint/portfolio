import React from 'react';
import { useTheme } from '../context/ThemeContext';

export const ResumeDownload: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="resume-download text-center mt-8">
      <a
        href="/resume.pdf"
        download="Mesfin_Resume.pdf"
        className={`inline-block px-6 py-3 text-lg font-semibold rounded-lg transition-colors duration-300 ${
          theme === 'dark'
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-blue-500 text-white hover:bg-blue-600'
        }`}
      >
        Download My Resume
        <svg
          className="ml-2 w-5 h-5 inline-block"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v16h16V4H4zm4 8v8m0-8L12 8l4 4" />
        </svg>
      </a>
    </div>
  );
};
