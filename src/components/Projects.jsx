import React from 'react';
import ENIM from '../Assets/ENIM.png';
import Tailwind from '../Assets/Tailwind.png';


// Dummy project data
const projects = [
  {
    title: "ENIM ⦿ Marketplace",
    description: "React Js based UI where data is sold. React Js based UI where data is sold.",
    image: ENIM,
    link: "https://github.com/Haabiy/marketplace-fe"
  },
  {
    title: "ENIM ⦿ Marketplace",
    description: "Django backend backend platform where data is sold. Django backend backend platform where data is sold",
    image: ENIM,
    link: "https://github.com/Haabiy/marketplace-be"
  },
  {
    title: "Tailwind-Playground",
    description: "A cloud data warehouse architecture built with AWS Redshift for scalable big data analytics.",
    image: Tailwind,
    link: "https://github.com/Haabiy/Tailwind-Playground"
  },
  {
    title: "EMR Runner",
    description: "A cloud data warehouse architecture built with AWS Redshift for scalable big data analytics.",
    image: "https://via.placeholder.com/600x400",
    link: "https://github.com/Haabiy/EMRRunner"
  },
  {
    title: "Data Warehousing with AWS Redshift",
    description: "A cloud data warehouse architecture built with AWS Redshift for scalable big data analytics.",
    image: "https://via.placeholder.com/600x400",
    link: "https://github.com/yourproject"
  },
  {
    title: "Data Warehousing with AWS Redshift",
    description: "A cloud data warehouse architecture built with AWS Redshift for scalable big data analytics.",
    image: "https://via.placeholder.com/600x400",
    link: "https://github.com/yourproject"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-900 relative">
      <div className="container mx-auto">
        <h3 className="text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 animate-fade-in-up">
          Personal Projects
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-56 object-cover filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                />
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <span className="text-white text-lg font-semibold bg-blue-600 py-2 px-4 rounded-lg">
                    View Project
                  </span>
                </a>
              </div>

              <div className="p-6">
                <h4 className="text-2xl font-semibold text-white mb-3">{project.title}</h4>
                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-500 hover:underline"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-blue-700 opacity-20 animate-bounce-slow"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 rounded-full bg-purple-500 opacity-20 animate-bounce-slow"></div>
    </section>
  );
};

export default Projects;
