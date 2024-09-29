import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative">
      <div className="container mx-auto px-6 text-center">
        {/* Title */}
        <h1 className="text-7xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 animate-fade-in-up">
          Abiy Dema
        </h1>

        {/* Subtitle */}
        <p className="text-2xl md:text-3xl text-gray-300 mb-6 animate-fade-in-up delay-200">
          Data Engineer | Turning Data into Actionable Insights
        </p>

        {/* Intro Text */}
        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-xl mx-auto animate-fade-in-up delay-400">
          Passionate about building scalable data pipelines, optimizing performance, and delivering insightful solutions for data-driven decision making.
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-10 animate-fade-in-up delay-600">
          <a href="https://www.linkedin.com/in/abiy-dema/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500 transition duration-300 text-3xl">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Haabiy" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500 transition duration-300 text-3xl">
            <FaGithub />
          </a>
          <a href="mailto:abiy.dema@gmail.com" className="text-gray-300 hover:text-blue-500 transition duration-300 text-3xl">
            <FaEnvelope />
          </a>
        </div>

        {/* Call to Action */}
        <a href="#projects" className="mt-10 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-10 rounded-lg transition-all duration-300 transform hover:scale-105 animate-fade-in-up delay-800">
          Explore My Work
        </a>
      </div>

      {/* Decorative Circles */}
      <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-blue-700 opacity-20 animate-bounce-slow"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 rounded-full bg-purple-500 opacity-20 animate-bounce-slow"></div>
    </section>
  );
};

export default Hero;
