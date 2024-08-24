import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useTheme } from '../context/ThemeContext';


export const About: React.FC = () => {
  // const bgColor = '#ffffff '; // Consistent dark gray background
  // const textColor = '#1f2937'; // Consistent white text color
  // const iconBgColor = '#2563eb'; // Blue color for the icons
  const { theme } = useTheme();
  const bgColor = theme === 'dark' ? '#1f2937' : '#ffffff'; // Consistent dark gray background for dark mode, white for light mode
  const textColor = theme === 'dark' ? '#ffffff' : '#1f2937'; // White text for dark mode, dark text for light mode
  const iconBgColor = '#fff'; // Blue color for the icons


  return (
    <section id="about" className={`about py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`}>
    <div className="container mx-auto flex flex-col items-center">
      <img 
        src="../../public/mesfin.jpg" 
        alt="mesfin" 
        className="rounded-full w-48 h-48 object-cover object-top mb-6 mx-auto " 
      />
  
      <h2 className={`text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
        About Me
      </h2>
      
      <p className={`mx-auto text-lg leading-relaxed max-w-prose text-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
        This section provides an overview of my education, training, and skills. Here, you'll learn more about my background, the journey that led me into web development, and the key competencies I bring to every project.
      </p>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: bgColor, color: textColor }}
            contentArrowStyle={{ borderRight: `7px solid ${bgColor}` }}
            date="October 2021 - March 2022"
            iconStyle={{ background: iconBgColor, color: textColor }}
          >
            <h3 className="text-2xl font-bold">Full Stack Developer</h3>
            <h4 className="text-lg">Integrify | Helsinki, Finland</h4>
            <ul className="text-left text-base list-disc ml-6 mt-3">
              <li>Collaborated on diverse projects, focusing on full stack development.</li>
              <li>Specialized in front-end development with JavaScript, TypeScript, ReactJs, and Redux.</li>
              <li>Developed back-end systems using NodeJs and ExpressJs.</li>
              <li>Engaged in DevOps practices including Docker, CI/CD, and AWS cloud services.</li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: bgColor, color: textColor }}
            contentArrowStyle={{ borderRight: `7px solid ${bgColor}` }}
            date="June 2021 - August 2021"
            iconStyle={{ background: iconBgColor, color: textColor }}
          >
            <h3 className="text-2xl font-bold">Junior Front End Developer</h3>
            <h4 className="text-lg">CodingForAll | Espoo, Finland</h4>
            <ul className="text-left text-base list-disc ml-6 mt-3">
              <li>Designed and developed a quiz maker application.</li>
              <li>Implemented the prototype into a functional application using ReactJS.</li>
              <li>Authored project documentation and reports.</li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: bgColor, color: textColor }}
            contentArrowStyle={{ borderRight: `7px solid ${bgColor}` }}
            date="November 2020 - January 2021"
            iconStyle={{ background: iconBgColor, color: textColor }}
          >
            <h3 className="text-2xl font-bold">Front End Developer Trainee</h3>
            <h4 className="text-lg">Firma Informatyczna BigsonDev | Warsaw, Poland</h4>
            <ul className="text-left text-base list-disc ml-6 mt-3">
              <li>Supported the Lead Front-End Developer on various projects.</li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: bgColor, color: textColor }}
            contentArrowStyle={{ borderRight: `7px solid ${bgColor}` }}
            date="July 2016 - Present"
            iconStyle={{ background: iconBgColor, color: textColor }}
          >
            <h3 className="text-2xl font-bold">B.ENG, Business Information Technology</h3>
            <h4 className="text-lg">Laurea University of Applied Sciences | Espoo, Finland</h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: bgColor, color: textColor }}
            contentArrowStyle={{ borderRight: `7px solid ${bgColor}` }}
            date="July 2007 - May 2011"
            iconStyle={{ background: iconBgColor, color: textColor }}
          >
            <h3 className="text-2xl font-bold">B.ENG, Media Engineering</h3>
            <h4 className="text-lg">Metropolia University of Applied Sciences | Espoo, Finland</h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
};
