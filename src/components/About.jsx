import React from 'react';
import { FaPython, FaAws, FaDatabase, FaDocker } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="bg-gray-800 py-20 px-6 text-center relative">
      <div className="container mx-auto">
        <h3 className="text-4xl font-bold mb-6 text-blue-400">About Me</h3>
        <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
          I specialize in transforming raw data into valuable insights through modern data engineering tools and techniques. Below are the technologies I use to "transform" data:
        </p>

        <div className="flex justify-center space-x-12 flex-wrap">
          {/* Skill Icons */}
          <div className="flex flex-col items-center text-gray-400 transition-transform hover:scale-110">
            <FaPython className="text-5xl mb-2"/>
            <p>Python</p>
          </div>
          <div className="flex flex-col items-center text-gray-400 transition-transform hover:scale-110">
            <FaAws className="text-5xl mb-2"/>
            <p>AWS</p>
          </div>
          <div className="flex flex-col items-center text-gray-400 transition-transform hover:scale-110">
            <FaDatabase className="text-5xl mb-2"/>
            <p>SQL/NoSQL</p>
          </div>
          <div className="flex flex-col items-center text-gray-400 transition-transform hover:scale-110">
            <FaDocker className="text-5xl mb-2"/>
            <p>Docker</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
