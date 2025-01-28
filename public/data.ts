 const projects = [
  {
    id: 1,
    title: "Country API",
    description: "A web project where a list of countries are collected from an open API endpoint.",
    type: "FrontEnd",
    technologies: ["JavaScript", "ReactJs", "Redux", "TypeScript", "Material-UI"],
    image: "/countriesRestAPI.png",
    demoLink: "https://responsive-countries-rest-api.netlify.app/",
    codeLink: "https://github.com/mesfint/frontend-challenges/tree/main/rest-countries-api"
  },
  {
    id: 2,
    title: "Task Manager",
    description: "CRUD Application to manage personal tasks.",
    type: "FrontEnd",
    technologies: ["TypeScript", "ReactJs", "MUI", "Jest", "RTL"],
    image: "/taskMgt.png",
    demoLink: "https://task-mgt-dashboard.vercel.app/",
    codeLink: "https://github.com/mesfint/task-mgt-dashboard"
  },
  {
    id: 3,
    title: "PhoneBook",
    description: "A full-stack application for managing contacts, allowing users to store and retrieve names and phone numbers efficiently.",
    type: "FullStack",
    technologies: ["JavaScript", "ReactJs", "MongoDB", "ExpressJS", "API"],
    image: "/phoneBook.png",
    demoLink: "https://fullstackopen-2024-phonebook.onrender.com/",
    codeLink: "https://github.com/mesfin-2/Fullstackopen-2024/tree/main/part3/phonebook"
  },
  {
    id: 4,
    title: "Portfolio Project",
    description: "A modern, responsive portfolio website showcasing my web development skills and projects. Built with React, TypeScript, and Tailwind CSS, it emphasizes clean design and seamless user experience.",
    type: "FrontEnd",
    technologies: ["ReactJs", "Tailwind CSS", "TypeScript"],
    image: "/portfolioDesign.png",
    demoLink: "https://mesfin-git-main-mesfints-projects.vercel.app/",
    codeLink: "https://github.com/mesfint/portfolio"
  }
];


//education
 const education = [
  {
    id: 1,
    year: "Expected 2025",
    degree: "Business Information Technology (BIT)",
    institution: "Laurea University of Applied Sciences",
    notes: "Thesis in Progress"
  },
  {
    id: 2,
    year: "2022",
    degree: "Fullstack Development Bootcamp (5-month Training)",
    institution: "Integrify OY"
  },
  {
    id: 3,
    year: "2011",
    degree: "Media Engineering (BSc)",
    institution: "Metropolia University of Applied Sciences"
  }
];

//experience
 const experience = [
  {
    id: 1,
    startDate: "October 2021",
    endDate: "February 2022",
    title: "Fullstack Trainee",
    company: "Integrify",
    location: "Helsinki, Finland",
    responsibilities: [
      "Completed an intensive full-stack development training program.",
      "Built full-stack applications using React.js, Node.js, Express, and MongoDB.",
      "Learned best coding practices and modern development workflows.",
      "Worked in agile teams and participated in code reviews."
    ],
    technologies: ["React.js", "Node.js", "Express", "MongoDB", "JavaScript", "Git", "Agile"]
  },
  {
    id: 2,
    startDate: "June 2021",
    endDate: "August 2021",
    title: "Frontend Developer Intern",
    company: "CodeForAll",
    location: "Remote",
    responsibilities: [
      "Developed a React.js-based quiz generator web app.",
      "Improved performance and accessibility.",
      "Implemented reusable components."
    ],
    technologies: ["React.js", "JavaScript", "HTML", "CSS", "Git"]
  },
  {
    id: 3,
    startDate: "December 2016",
    endDate: "February 2017",
    title: "Intern as Web Designer",
    company: "Espoo Kaupunki Varhaiskasvatuksen Tulosyksikkö",
    location: "Espoo, Finland",
    responsibilities: [
      "Designed and prototyped a website to provide integrated information about autism and related issues.",
      "Developed a responsive and user-friendly web interface.",
      "Implemented a chatbot for improved accessibility and engagement."
    ],
    technologies: ["Bootstrap", "HTML5", "CSS3", "WordPress", "Responsive Design"]
  }
];

export { education, experience, projects };
