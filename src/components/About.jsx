import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaBriefcase } from 'react-icons/fa';

import CEOTestimonial from './Testimonial.jsx'
import FeaturedSection from './Featured.jsx';
import Recommendations from './Recommendations.jsx';
import Skills from './Skills.jsx';

const MotionCard = ({ children, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="bg-gray-800 p-10 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
  >
    {children}
  </motion.div>
);

const About = () => {
  return (
    <>
      {/* About Me Section */}
      <motion.section
      id='about'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-20 px-6 bg-gray-900 text-white"
      >
      <div className="container mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-blue-400 mb-8"
        >
          About Me
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-lg text-gray-300 text-center mb-12 max-w-2xl mx-auto"
        >
          I specialize in transforming raw data into valuable insights through modern data engineering tools and techniques.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <MotionCard delay={0.3}>
            <h4 className="text-2xl font-semibold text-blue-300 mb-4 flex items-center">
              <FaGraduationCap className="mr-3 text-3xl text-blue-400" /> Education
            </h4>
            <div className="text-gray-300">
              <h5 className="font-bold text-xl mb-1">Centrale Nantes</h5>
              <p className="mb-1">BSc in Engineering</p>
              <p className="mb-2">Nantes, France</p>
              <p className="text-sm text-blue-300 font-semibold">Top 5 in France</p>
            </div>
          </MotionCard>

          <MotionCard delay={0.4}>
            <h4 className="text-2xl font-semibold text-blue-300 mb-4 flex items-center">
              <FaCertificate className="mr-3 text-3xl text-blue-400" /> Certifications
            </h4>
            <ul className="space-y-2 text-gray-300">
              {[
                { name: "⦿ Web Security with Django", issuer: "Udemy", date: "Jun 2024" },
                { name: "⦿ Tailwind CSS", issuer: "Udemy", date: "May 2024" },
                { name: "⦿ Django Backend Development", issuer: "Udemy", date: "Mar 2024" },
                { name: "⦿ Data Engineering Essentials", issuer: "Udemy", date: "Feb 2024" },
                { name: "⦿ Power BI", issuer: "Udemy", date: "Jun 2023" },
              ].map((cert, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <span className="font-semibold text-blue-300">{cert.name}</span>
                  <span className="text-sm text-gray-400 block"> – {cert.issuer} (Issued {cert.date})</span>
                </motion.li>
              ))}
            </ul>
          </MotionCard>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16"
        >
          <h4 className="text-4xl font-bold text-center text-blue-400 mb-12">Experience</h4>
          <div className="relative pl-8">
            <motion.div 
              className="absolute left-0 top-0 h-full w-0.5 bg-blue-400"
              initial={{ height: 0 }}
              animate={{ height: '100%' }}
              transition={{ delay: 0.8, duration: 1 }}
            ></motion.div>
            <div className="space-y-8">
              {[
                {
                  title: "Data Engineer @ Decathlon",
                  location: "Lille, France",
                  date: "Sep 2024 – Present",
                  description: "Working on improving data pipelines, and providing data-driven insights for product improvement.",
                },
                {
                  title: "Data Engineer @ Mangabey",
                  location: "Paris, France",
                  date: "Jan 2023 – August 2024",
                  description: "Instrumental in developing data products and building algorithms for seamless integration.",
                },
                {
                  title: "Growth/Data Engineer @ Fifteen",
                  location: "Vanves, France",
                  date: "Jan 2023 – Jul 2024",
                  description: "Architected data pipelines, built automation tools, and conducted competitive analysis for improved targeting and efficiency.",
                },
              ].map((exp, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-10 mt-1.5 w-4 h-4 rounded-full bg-blue-400"></div>
                  <MotionCard delay={0.7 + index * 0.1}>
                    <div className="flex items-start">
                      <div className="bg-blue-400 p-2 rounded-full mr-4 mt-1">
                        <FaBriefcase className="text-gray-900 text-lg" />
                      </div>
                      <div>
                        <h5 className="text-xl font-semibold text-blue-300">{exp.title}</h5>
                        <p className="text-gray-400 text-sm">{exp.location} | {exp.date}</p>
                        <p className="mt-2 text-gray-300 text-sm">{exp.description}</p>
                      </div>
                    </div>
                  </MotionCard>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
      {/* Skills */}
      <Skills />
      {/* Testimonial */}
      <CEOTestimonial />
      {/* Featured by Mangabey Section */}
      <FeaturedSection/>
      {/* Recommendations Section */}
      <Recommendations/>
      
    </>
  );
};

export default About;