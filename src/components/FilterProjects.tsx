import React, { useState } from 'react';

const technologies = ['JavaScript', 'ReactJs', 'ExpressJs', 'mongoDB', 'Redux', 'TypeScript'];
const projectTypes = ['Frontend', 'Fullstack', 'API-development'];

export const ProjectFilter: React.FC<{
onTechChange: (selectedTech: string) => void;
  onTypeChange: (selectedTypes: string[]) => void;
}> = ({ onTechChange, onTypeChange }) => {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const handleTechChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onTechChange(e.target.value);
  };

  const handleTypeCheckboxChange = (type: string) => {
    const updatedSelection = selectedTypes.includes(type)
      ? selectedTypes.filter(t => t !== type)
      : [...selectedTypes, type];

    setSelectedTypes(updatedSelection);
    onTypeChange(updatedSelection);
  };

  return (
    <div className="flex flex-col space-y-4">
      {/* Technology Dropdown */}
      <div>
        <label htmlFor="tech-select" className="block text-lg font-bold mb-2">Filter by Technology</label>
        <select
          id="tech-select"
          onChange={handleTechChange}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Technologies</option>
          {technologies.map(tech => (
            <option key={tech} value={tech}>{tech}</option>
          ))}
        </select>
      </div>

      {/* Project Type Checkboxes */}
      <div>
        <label className="block text-lg font-bold mb-2">Filter by Type</label>
        {projectTypes.map(type => (
          <label key={type} className="block">
            <input
              type="checkbox"
              value={type}
              onChange={() => handleTypeCheckboxChange(type)}
              className="mr-2"
            />
            {type}
          </label>
        ))}
      </div>
    </div>
  );
};
