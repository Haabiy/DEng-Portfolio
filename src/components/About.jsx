import React, {useEffect, useRef} from 'react';
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
  const AboutRef = useRef(null);

  // Scroll into view when #AboutRef hash is present
  useEffect(() => {
    if (window.location.hash === '#about' && AboutRef.current) {
      AboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);
  return (
    <>
      {/* About Me Section */}
      <motion.section
      id='about'
      ref={AboutRef}
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
              <h5 className="font-bold text-xl text-orange-100 mb-1">Centrale Nantes</h5>
              <a href="https://www.ec-nantes.fr/english-version"><p className="text-md text-blue-300 font-semibold mb-1">Top 3 French School of Engineering(THE 2025)</p></a>
              <p className="mb-2">Group of Écoles Centrales (School of Engineering)</p>
              <p className="mb-1">BSc in Engineering</p>
              <p className="mb-2">Nantes, France</p>
            </div>
          </MotionCard>

          <MotionCard delay={0.4}>
            <h4 className="text-2xl font-semibold text-blue-300 mb-4 flex items-center">
              <FaCertificate className="mr-3 text-3xl text-blue-400" /> Side Project Certifications
            </h4>
            <ul className="space-y-2 text-gray-300">
              {[
                { name: "⦿ Web Development", issuer: "Udemy", date: "Oct 2024" },
                { name: "⦿ Data Engineering Essentials", issuer: "Udemy", date: "Feb 2024" },
                { name: "⦿ Django Backend Development", issuer: "Udemy", date: "Mar 2024" },
                { name: "⦿ Tailwind CSS", issuer: "Udemy", date: "May 2024" },
                { name: "⦿ Web Security with Django", issuer: "Udemy", date: "Jun 2024" },
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
                    description: 
                    [
                      "Developed dktbricks, Python library to enable the team to launch JAR files on Databricks via a terminal-based UI, with configurable options for cluster size and number of worker nodes.",
                      "Optimised Scala-based data pipelines for the core marketplace data product, enabling efficient processing of large datasets, improving performance and system scalability, and delivering benchmark POCs using Z-ordering and liquid clustering that reduced execution time by 15%.",
                      "Built a Spark-based ETL pipeline following the Medallion Architecture: implemented API data extraction via AWS Lambda into the Bronze layer, developed Scala-based transformations for Silver and Gold layers with Delta Tables on Databricks, and orchestrated workflows using Airflow for scheduling and triggering jobs across the cluster.",
                    ]
                },
                {
                  title: "Data │ Backend Engineer @ Mangabey",
                  location: "Paris, France",
                  date: "Jan 2023 – August 2024",
                  description: 
                    [
                      "Designed Python Django-based backend system for MINE application, a data marketplace, featuring APIs for three key components namely notification centre, update centre, and delivery system, tailored to meet end-user needs.",
                      "Engineered the backend architecture and core functionalities of the MINE application, optimising Spark-based ETL and non-Spark pipelines, which enhanced data processing speed by 40% on the Amazon EMR cluster.",
                      "Constructed Apache Spark ETL based data pipeline solution utilized by AstraZeneca for executing a comprehensive data quality assessment workflow. This included extracting data from Amazon S3, conducting in-depth analysis, storing the derived insights in Redshift, and establishing seamless real-time visualisation in POWER BI through direct query integration.",
                      "Implemented Apache NiFi workflow for real-time data ingestion, seamlessly transferring data from S3 to Redshift.",
                      "Completed a KPI analysis framework using Pandas, later optimising with Polars to achieve a remarkable ~ 90% reduction in execution time, while also orchestrating multiple data pipelines using Apache Airflow within Docker containers for streamlined and efficient data processing."
                    ]
                },
                {
                  title: "Growth │ Data Engineer @ Fifteen",
                  location: "Vanves, France",
                  date: "Jan 2023 – Jul 2024",
                  description: 
                  [
                    "Developed a robust data extraction pipeline using Python's Beautiful Soup and Selenium libraries, capturing essential LinkedIn profile details such as names, positions, and locations, resulting in faster targeting for 2500+ ad campaigns each month.",
                    "Launched a Twitter-Slack bot named Fiftweety, capable of monitoring recent tweets from specified Twitter accounts. It promptly sends notifications to a designated Slack channel whenever tweets meet our selected criteria, such as those containing specific keywords and posted within the last five minutes.",
                  ]
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
                        <p className="text-gray-400 text-sm mb-3">{exp.location} | {exp.date}</p>
                        <div className="mt-2 space-y-1 text-gray-300 text-sm">
                          {exp.description.map((desc, i) => (
                            <div key={i} className="pl-4 relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-1 before:rounded-full before:bg-blue-400">
                              {desc}
                            </div>
                          ))}
                        </div>
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