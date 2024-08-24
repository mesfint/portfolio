import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  demoLink: string;
  codeLink: string;
}

export const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const { theme } = useTheme();
  const borderColor = 'dark' ? 'border-gray-600' : 'border-gray-300';

  useEffect(() => {
    fetch('/projects.json')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  return (
    
     <section id="projects" className={`projects py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`}>
    <div className="container mx-auto">
         <h2 className={`text-4xl font-bold text-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-12`}>Projects</h2>
         <p className={`mx-auto text-lg leading-relaxed max-w-prose text-center mb-8  ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-12`}>
         These are the projects I have recently developed. You can view live demos of each project and also review the code on GitHub to see how they were built. Each project showcases my skills in different areas of web application development.
    </p>
      <div className="space-y-16">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
          >
            <div className={`md:w-1/2 p-6 ${borderColor} border rounded-lg`}>
            <h3 className={`text-xl text-gray-600font-bold  ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{project.title}</h3>
                 <p className={`text-gray-600 mt-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{project.description}</p>
            <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className={`inline-block px-3 py-1 mt-2 rounded-full text-sm ${
                      theme === 'dark' ? 'bg-white text-gray-900' : 'bg-gray-900 text-white'

                    }`}
                  >
                    {tech}
                  </span>
                ))}
                 <div className="mt-6 flex space-between ">
                   <a
                     href={project.demoLink}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-blue-500 hover:underline"
                   >
                     Live Demo
                     <svg
                       className="ml-2 w-4 h-4 inline-block transform rotate-45"
                       fill="none"
                       stroke="currentColor"
                       strokeWidth="2"
                       viewBox="0 0 24 24"
                       xmlns="http://www.w3.org/2000/svg"
                     >
                       <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l5-5m0 0l5 5m-5-5v12"></path>
                     </svg>
                   </a>
                   <a
                 href={project.codeLink}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-blue-500 hover:underline"
                   >
                     Code Repository
                     <svg
                       className="ml-2 w-4 h-4 inline-block transform rotate-45"
                       fill="none"
                       stroke="currentColor"
                       strokeWidth="2"
                       viewBox="0 0 24 24"
                       xmlns="http://www.w3.org/2000/svg"
                     >
                       <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l5-5m0 0l5 5m-5-5v12"></path>
                     </svg>
                   </a>
                 </div>
              </div>

            </div>
            <div className="md:w-1/2 p-6">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto rounded-lg relative transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};
