import React, { useEffect, useState } from 'react';
import LazyLoad from 'react-lazyload';
import { projects } from '../../public/data';
import { useTheme } from '../context/ThemeContext';

interface Project {
  id: number;
  title: string;
  description: string;
  type: string;
  technologies: string[];
  image: string;
  demoLink: string;
  codeLink: string;
}

export const Projects: React.FC = () => {
  //const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [selectedTech, setSelectedTech] = useState<string>('');
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const { theme } = useTheme();
  const borderColor = theme === 'dark' ? 'border-gray-600' : 'border-gray-300';

  useEffect(() => {
   
        //setProjects(projects);
        setFilteredProjects(projects);
      
     
  }, []);

  const handleTechChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const tech = e.target.value;
    setSelectedTech(tech);
    applyFilters(tech, selectedTypes);
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const type = e.target.value;
    const isChecked = e.target.checked;

    let updatedTypes: string[];
    if (isChecked) {
      updatedTypes = [...selectedTypes, type];
    } else {
      updatedTypes = selectedTypes.filter(t => t !== type);
    }

    setSelectedTypes(updatedTypes);
    applyFilters(selectedTech, updatedTypes);
  };

  const applyFilters = (tech: string, types: string[]) => {
    let filtered = projects;

    if (tech) {
      filtered = filtered.filter(project => project.technologies.includes(tech));
    }

    if (types.length > 0) {
      filtered = filtered.filter(project => types.includes(project.type));
    }

    setFilteredProjects(filtered);
  };

  const uniqueTechnologies = Array.from(new Set(projects.flatMap(project => project.technologies))).sort();
  const uniqueTypes = Array.from(new Set(projects.map(project => project.type))).sort();

  return (
    <section id="projects" className={`py-10 ${theme === 'dark' ? 'bg-neutral-900' : 'bg-gray-100'}`}>
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className={`text-4xl font-bold text-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-12`}>
          Projects
        </h2>

        {/* Section Description */}
        <p className={`mx-auto text-lg leading-relaxed max-w-prose text-center mb-8 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
        Here are some of the projects I’ve recently developed. You can explore live demos and review the source code on GitHub to see how they were built.
        </p>
        
        {/* Filters */}
        <div className="flex flex-col items-center md:flex-row md:justify-center md:space-x-12 mb-12">
          {/* Filter by Technology */}
          <div className="w-full max-w-xs mb-6 md:mb-0">
            <label htmlFor="tech-select" className={` text-lg font-semibold mb-2 text-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Filter by Technology
            </label>
            <select
              id="tech-select"
              value={selectedTech}
              onChange={handleTechChange}
              className={`block w-full p-2 mt-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${theme === 'dark' ? 'bg-gray-800 text-white border-gray-600' : 'bg-white text-gray-900 border-gray-300'}`}
            >
              <option value="">All Technologies</option>
              {uniqueTechnologies.map(tech => (
                <option key={tech} value={tech}>{tech}</option>
              ))}
            </select>
          </div>

          {/* Filter by Type */}
          <div className="w-full max-w-md">
            <span className={`block text-lg font-semibold mb-2 text-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Filter by Type
            </span>
            <div className="flex flex-wrap justify-center gap-4">
              {uniqueTypes.map(type => (
                <label key={type} className={`flex items-center text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  <input
                    type="checkbox"
                    value={type}
                    onChange={handleTypeChange}
                    checked={selectedTypes.includes(type)}
                    className="mr-2"
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="flex flex-col border p-5 rounded-lg shadow-lg">
              {/* Project Image */}
              <LazyLoad height={100} offset={100} once>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                />
              </LazyLoad>

              {/* Project Info */}
              <div className={`p-4 ${borderColor} border-t`}>
                <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {project.title}
                </h3>
                <p className={`text-gray-600 mt-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map(tech => (
                    <span key={tech} className={`inline-block px-3 py-1 rounded-full text-sm ${theme === 'dark' ? 'bg-white text-gray-900' : 'bg-gray-900 text-white'}`}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex space-x-4">
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline flex items-center">
                    Live Demo
                    <svg className="ml-2 w-4 h-4 transform rotate-45" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l5-5m0 0l5 5m-5-5v12"></path>
                    </svg>
                  </a>
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline flex items-center">
                    Code Repository
                    <svg className="ml-2 w-4 h-4 transform rotate-45" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l5-5m0 0l5 5m-5-5v12"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
