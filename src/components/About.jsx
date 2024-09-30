import React from 'react';
import { FaCertificate, FaSchool, FaBriefcase } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="bg-gray-800 py-20 px-6 text-center">
      <div className="container mx-auto">
        <h3 className="text-4xl font-bold mb-6 text-blue-400">About Me</h3>
        <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
          I specialize in transforming raw data into valuable insights through modern data engineering tools and techniques. Below are my education, certifications, and experiences:
        </p>

        <div className="flex justify-center space-x-8">
          {/* Education & Certifications Section */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-1/2">
            <h4 className="text-2xl font-semibold text-blue-400 mb-4 flex items-center">
              <FaSchool className="mr-2" /> Education & Certifications
            </h4>
            <div className="text-gray-400 mb-4">
              <h5 className="font-bold">Centrale Nantes</h5>
              <p>BSc in Engineering</p>
              <p>Location: Nantes, France</p>
              <p className="text-sm">Top 5 grande école – a French engineering school</p>
            </div>
            <div className="relative">
              <div className="flex items-center justify-between mb-2">
                <div className="flex-1 border-t border-gray-600"></div>
                <span className="mx-2 text-gray-400">Certifications</span>
                <div className="flex-1 border-t border-gray-600"></div>
              </div>
              <ul className="list-none space-y-2 text-gray-400">
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-gray-600 rounded-full mr-2"></span>
                  Web Security with Django
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-gray-600 rounded-full mr-2"></span>
                  Tailwind CSS
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-gray-600 rounded-full mr-2"></span>
                  Backend Development with Django
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-gray-600 rounded-full mr-2"></span>
                  Data Engineering Essentials using SQL, Python, and PySpark
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-gray-600 rounded-full mr-2"></span>
                  Introduction to Apache NiFi | Cloudera DataFlow - HDF 2.0
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-gray-600 rounded-full mr-2"></span>
                  Data Analysis with Polars
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-gray-600 rounded-full mr-2"></span>
                  Analyzing and Visualizing Data with Microsoft Power BI
                </li>
              </ul>
            </div>
          </div>

          {/* Experiences Section */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-1/2">
            <h4 className="text-2xl font-semibold text-blue-400 mb-4 flex items-center">
              <FaBriefcase className="mr-2" /> Experiences
            </h4>
            <div className="text-gray-400">
              <h5 className="font-bold">Decathlon</h5>
              <p>Location: Lille, France</p>
              <p>Data Engineer</p>
              <p>August 2024 - Present</p>
              <hr className="my-4 border-gray-600" />

              <h5 className="font-bold">Mangabey</h5>
              <p>Location: Paris, France</p>
              <p>Data Engineer</p>
              <p>January 2023 - August 2024</p>
              <hr className="my-4 border-gray-600" />

              <h5 className="font-bold">Fifteen - Augmented Bike Networks</h5>
              <p>Location: Vanves, France</p>
              <p>Growth/Data Engineer</p>
              <p>March 2022 - September 2022</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
