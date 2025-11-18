import React, {useEffect, useRef} from 'react';
import ENIM from '../Assets/ENIM.png';
import Tailwind from '../Assets/Tailwind.png';
import EMR from '../Assets/EMR.png';
import Todox from '../Assets/Todox.png';
import FlaskStringify from '../Assets/FlaskStringify.png';
import selahx from '../Assets/selahx.png';

// Dummy project data
const projects = [
  {
    title: "selahx",
    description: "Remote Access Tool — Fast and lightweight CLI experience, enabling users to execute commands and manage files on remote systems seamlessly.",
    image: selahx,
    concepts: ["Python", "Socket Programming", "Computer Security", "CLI"],
    link: "https://github.com/Haabiy/selahx_client"
  },
  {
    title: "EMR Runner",
    description: "Terminal-based UI interface for testing data pipelines, enabling job triggers on Amazon EMR. Also available as a flask application to trigger jobs via Postman.",
    image: EMR,
    concepts: ["Python", "AWS EMR", "Flask", "CLI"],
    link: "https://github.com/Haabiy/EMRRunner"
  },
  {
    title: "ENIM ⦿ Marketplace",
    description: "React js-based UI designed for showcasing and offering data, providing integration with multiple data pipelines that can be triggered on Amazon EMR directly from the UI.",
    image: ENIM,
    concepts: ["React", "JavaScript", "AWS EMR", "Data Pipelines"],
    link: "https://github.com/Haabiy/marketplace-fe"
  },
  {
    title: "ENIM ⦿ Marketplace",
    description: "Django backend platform designed for managing data showcasing and interactions, integrating with multiple data pipelines that can be triggered directly from the React UI.",
    image: ENIM,
    concepts: ["Django", "Python", "REST API", "AWS EMR"],
    link: "https://github.com/Haabiy/marketplace-be"
  },
  {
    title: "Tailwind-Playground",
    description: "A testing environment to explore the Tailwind CSS framework and become familiar with utilizing utility classes, in contrast to component-based classes.(E.g: Bootstrap)",
    image: Tailwind,
    concepts: ["Tailwind CSS", "Frontend Development"],
    link: "https://github.com/Haabiy/Tailwind-Playground"
  },
  {
    title: "To-doX",
    description: "A to-do list application designed to understand backend development, focusing on mastering CRUD operation tasks, database management and user authentication.",
    image: Todox,
    concepts: ["Django", "Python", "PostgreSQL", "CRUD"],
    link: "https://github.com/Haabiy/To-doX"
  },
  {
    title: "FlaskStringify",
    description: "A string processing API designed for extensibility to various scenarios, particularly in data engineering pipelines. It focuses on implementing Pythonic tests.",
    image: FlaskStringify,
    concepts: ["Flask", "Python"],
    link: "https://github.com/Haabiy/FlaskStringify"
  }
];

const Projects = () => {
  const ProjectsRef = useRef(null);

  useEffect(() => {
    if (window.location.hash === '#projects' && ProjectsRef.current) {
      ProjectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);
  return (
    <section id="projects" ref={ProjectsRef} className="py-20 px-6 bg-gray-900 relative">
      <div className="container mx-auto">
        <h3 className="text-4xl font-bold text-blue-400 text-center mb-12 hover:cursor-pointer">
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
                <p className="text-sm text-gray-500 mb-4">
                  {project.concepts.join(", ")}
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

        {/* See More Button */}
        <div className="flex justify-center mt-12">
          <a 
            href="https://github.com/Haabiy?tab=repositories" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-10 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            See More
          </a>
        </div>
      </div>

      <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-blue-700 opacity-20 animate-bounce-slow"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 rounded-full bg-purple-500 opacity-20 animate-bounce-slow"></div>
    </section>
  );
};

export default Projects;
