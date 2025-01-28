import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experience } from '../../public/data';
import { useTheme } from '../context/ThemeContext';

export const About: React.FC = () => {
  // const bgColor = '#ffffff '; // Consistent dark gray background
  // const textColor = '#1f2937'; // Consistent white text color
  // const iconBgColor = '#2563eb'; // Blue color for the icons
  const { theme } = useTheme();
  const bgColor = theme === 'dark' ? '#171717' : '#ffffff'; // Consistent dark gray background for dark mode, white for light mode
  const textColor = theme === 'dark' ? '#ffffff' : '#171717'; // White text for dark mode, dark text for light mode
  const iconBgColor = '#fff'; // Blue color for the icons


  return (
    <section id="about" className={`about py-20 ${theme === 'dark' ? 'bg-gray-950  ' : 'bg-gray-100'}`}>
    <div className="container mx-auto flex flex-col items-center">
      <img 
        src="/mesfin.jpg" 
        alt="mesfin" 
        className="rounded-full w-48 h-48 object-cover object-top mb-6 mx-auto " 
      />
  
      <h2 className={`text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
        About Me
      </h2>
      
      <p className={`mx-auto text-lg leading-relaxed max-w-prose text-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
      This section highlights my  training, and skills. Discover my background, the journey that led me into web development, and the key competencies I bring to every project.
      </p>
      {/* <ResumeDownload /> */}
        <VerticalTimeline>
          {experience.map((exp) => (
            <VerticalTimelineElement
              key={exp.id}
              className="vertical-timeline-element--work"
              contentStyle={{ background: bgColor, color: textColor }}
              contentArrowStyle={{ borderRight: `7px solid ${bgColor}` }}
              date={`${exp.startDate} - ${exp.endDate}`}
              iconStyle={{ background: iconBgColor, color: textColor }}
            >
              <h3 className="text-2xl font-bold">{exp.title}</h3>
              <h4 className="text-lg">{exp.company} | {exp.location}</h4>
              <ul className="text-left text-base list-disc ml-6 mt-3">
                {exp.responsibilities.map((resp) => (
                  <li key={resp}>{resp}</li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
         
        </VerticalTimeline>
      </div>
    </section>
  );
};
