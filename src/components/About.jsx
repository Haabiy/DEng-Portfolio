import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaQuoteLeft, FaQuoteRight, FaBriefcase } from 'react-icons/fa';
import { ReactComponent as Python } from '../Assets/Skills/Python.svg';
import { ReactComponent as ApacheAirflow } from '../Assets/Skills/ApacheAirflow.svg';
import { ReactComponent as ApacheSpark } from '../Assets/Skills/ApacheSpark.svg';
import { ReactComponent as CPP } from '../Assets/Skills/CPP.svg';
import { ReactComponent as CSSName } from '../Assets/Skills/CSS.svg';
import { ReactComponent as Django } from '../Assets/Skills/Django.svg';
import { ReactComponent as EC2 } from '../Assets/Skills/EC2.svg';
import { ReactComponent as EMR } from '../Assets/Skills/EMR.svg';
import { ReactComponent as HTMLName } from '../Assets/Skills/HTML.svg';
import { ReactComponent as MATLAB } from '../Assets/Skills/MATLAB.svg';
import { ReactComponent as PBI } from '../Assets/Skills/PBI.svg';
import { ReactComponent as ReactJsName } from '../Assets/Skills/ReactJs.svg';
import { ReactComponent as SQL } from '../Assets/Skills/SQL.svg';
import { ReactComponent as VBA } from '../Assets/Skills/VBA.svg';
import { ReactComponent as Bootstrap } from '../Assets/Skills/Bootstrap.svg';
import { ReactComponent as FlaskName } from '../Assets/Skills/Flask.svg';
import { ReactComponent as ApacheNIFI } from '../Assets/Skills/ApacheNIFI.svg';
import { ReactComponent as Databricks } from '../Assets/Skills/Databricks.svg';
import { ReactComponent as MINIO } from '../Assets/Skills/MINIO.svg';
import { ReactComponent as Trino } from '../Assets/Skills/Trino.svg';

const MotionCard = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ scale: 1.05 }}
    className="bg-gray-800 p-6 rounded-lg shadow-lg will-change-transform"
  >
    {children}
  </motion.div>
);

const SkillIcon = ({ Icon, name }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    className="flex flex-col items-center"
  >
    <Icon className="w-16 h-16 mb-2" />
    <span className="text-sm text-gray-300">{name}</span>
  </motion.div>
);

const About = () => {
  return (
    <>
      {/* About Me Section */}
      <section id="about" className="py-20 px-6 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-blue-400 mb-8 cursor-pointer"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <MotionCard delay={0.3}>
            <h4 className="text-2xl font-semibold text-blue-400 mb-4 flex items-center">
              <FaGraduationCap className="mr-2" /> Education
            </h4>
            <div className="text-gray-300">
              <h5 className="font-bold text-lg">Centrale Nantes</h5>
              <p>BSc in Engineering</p>
              <p>Nantes, France</p>
              <p className="text-sm text-blue-300 mt-2">Top 5 in France</p>
            </div>
          </MotionCard>

          <MotionCard delay={0.4}>
            <h4 className="text-2xl font-semibold text-blue-400 mb-4 flex items-center">
              <FaCertificate className="mr-2" /> Certifications
            </h4>
            <ul className="space-y-2 text-gray-300">
              {[
                { name: "Web Security with Django", issuer: "Udemy", date: "Jun 2024" },
                { name: "Tailwind CSS", issuer: "Udemy", date: "May 2024" },
                { name: "Backend Development with Django", issuer: "Udemy", date: "Mar 2024" },
                { name: "Data Engineering Essentials", issuer: "Udemy", date: "Feb 2024" },
                { name: "Analyzing and Visualizing Data with Power BI", issuer: "Udemy", date: "Jun 2023" },
              ].map((cert, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <span className="font-semibold text-blue-300">{cert.name}</span>
                  <span className="text-sm text-gray-400"> – {cert.issuer} (Issued {cert.date})</span>
                </motion.li>
              ))}
            </ul>
          </MotionCard>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-16"
        >
          <h4 className="text-4xl font-bold text-center text-blue-400 mb-12 cursor-pointer">Experience</h4>
          <div className="relative pl-12">
            <div className="absolute w-1 h-full bg-blue-400 left-0 transform -translate-x-1/2 rounded-full"></div>

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
              <div className="mb-8" key={index}>
              <MotionCard key={index} delay={0.7 + index * 0.1}>
                <div className="flex items-start">
                  <div className="bg-blue-400 p-2 relative rounded-full mr-4 mt-1">
                    <FaBriefcase className="text-gray-900" />
                  </div>
                  <div>
                    <h5 className="text-xl font-semibold text-blue-300">{exp.title}</h5>
                    <p className="text-gray-400">{exp.location} | {exp.date}</p>
                    <p className="mt-2 text-gray-300">{exp.description}</p>
                  </div>
                </div>
              </MotionCard>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gray-800 text-white">
        <div className="container mx-auto">
        <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center text-blue-400 mb-12"
          >
            Skills
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            <SkillIcon Icon={Python} name="Python" />
            <SkillIcon Icon={SQL} name="SQL" />
            <SkillIcon Icon={ApacheSpark} name="Pyspark ⦿ SQL ⦿ Scala" />
            <SkillIcon Icon={ApacheAirflow} name="Apache Airflow" />
            <SkillIcon Icon={ApacheNIFI} name="Apache NiFi" />
            <SkillIcon Icon={EC2} name="Amazon EC2" />
            <SkillIcon Icon={EMR} name="Amazon EMR" />
            <SkillIcon Icon={Databricks} name="Databricks" />
            <SkillIcon Icon={MINIO} name="MINIO" />
            <SkillIcon Icon={Trino} name="Trino" />
            <SkillIcon Icon={HTMLName} name="HTML" />
            <SkillIcon Icon={CSSName} name="Tailwind CSS" />
            <SkillIcon Icon={Bootstrap} name="Bootstrap" />
            <SkillIcon Icon={ReactJsName} name="React JS" />
            <SkillIcon Icon={Django} name="Django" />
            <SkillIcon Icon={FlaskName} name="Flask" />
            <SkillIcon Icon={PBI} name="Power BI" />
            <SkillIcon Icon={CPP} name="C++" />
            <SkillIcon Icon={MATLAB} name="MATLAB" />
            <SkillIcon Icon={VBA} name="Excel VBA" />
          </div>
          </div>
      </section>
      {/* Featured by Mangabey Section */}
      <section id="featured" className="py-20 px-6 bg-gray-800 relative text-white">
        <div className="container mx-auto relative z-10">
          <h3 className="text-4xl font-bold text-center text-blue-400 hover:cursor-pointer mb-12">Featured by Mangabey</h3>
          <div className="relative p-8 bg-opacity-90 bg-gray-900 rounded-lg shadow-lg text-center">
            {/* Featured Text */}
            <p className="text-lg italic z-10 relative mb-5">
              "🎉 Meet Abiy DEMA, our talented Data Engineer at Mangabey 🚀 Since joining our team in January 2023, Abiy has been instrumental in crafting the backbone of our data product development. 
              🏆 His expertise in building strong algorithms ensures seamless integration and robust pipelines, guaranteeing top-notch data quality for informed decision-making. 
              📊 But it’s not just about technical prowess – Abiy brings a refreshing blend of professionalism, passion, and a delightful sense of humor to our data-driven world every single day! 😄"
            </p>

            {/* See More Button */}
            <a
              href="https://www.linkedin.com/posts/mangabey_consulting_services_mangabey-healthdata-pharma-activity-7176127782748344320-IB5G?utm_source=share&utm_medium=member_desktop"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300"
            >
              See More on LinkedIn
            </a>
          </div>
        </div>
      </section>



      {/* Recommendations Section */}
      <section id="recommendations" className="py-20 px-6 bg-gray-900">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center text-white mb-8 hover:text-blue-400 transition duration-300 hover:cursor-pointer">Recommendations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Recommendation 1 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <FaQuoteLeft className="text-white text-2xl mb-4" />
              <p className="text-gray-300 mb-4">
                "I had the pleasure of managing Abiy as his team lead. Abiy is a motivated data engineer known for his quick learning 
                and readiness to tackle challenges. His diverse skill set, ranging from Python and SQL to AWS data stack, 
                showcases his adaptability and eagerness to learn and grow in any fast-paced environment."
              </p>
              <h5 className="text-lg font-semibold text-white">Hammad Aslam KHAN</h5>
              <p className="text-sm text-gray-400">Data Engineering & Architecture at Mangabey</p>
              <p className="text-sm text-gray-400">© 2024</p>
              <FaQuoteRight className="text-white text-2xl mt-4" />
            </div>

            {/* Recommendation 2 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <FaQuoteLeft className="text-white text-2xl mb-4" />
              <p className="text-gray-300 mb-4">
                "I had the pleasure of working with Abiy, a highly skilled Data Engineer who excelled in our fast-paced environment. 
                His adaptability and ability to simplify complex issues made him indispensable during high-pressure situations. 
                Abiy’s collaborative spirit and knack for making data accessible significantly boosted our project success."
              </p>
              <h5 className="text-lg font-semibold text-white">Christelle Depierre-Barrault</h5>
              <p className="text-sm text-gray-400">Program Director at Mangabey</p>
              <p className="text-sm text-gray-400">© 2023</p>
              <FaQuoteRight className="text-white text-2xl mt-4" />
            </div>

            {/* Recommendation 3 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <FaQuoteLeft className="text-white text-2xl mb-4" />
              <p className="text-gray-300 mb-4">
                "We have been lucky to have Abiy on the Fifteen marketing team for his final year internship, where he successfully helped us identify more leads, and qualify them, using data scraping techniques. 
                Abiy is easy to work with, he has good technical skills and a relentless motivation to learn new things."
              </p>
              <h5 className="text-lg font-semibold text-white">Damien Brunet</h5>
              <p className="text-sm text-gray-400">CMO at Fifteen</p>
              <p className="text-sm text-gray-400">© 2022</p>
              <FaQuoteRight className="text-white text-2xl mt-4" />
            </div>

            {/* Recommendation 4 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <FaQuoteLeft className="text-white text-2xl mb-4" />
              <p className="text-gray-300 mb-10">
                "Abiy produced stellar work throughout his internship, be it web-scraping complex websites or wrangling data to deliver value. 
                He is very curious, and showed himself eager to learn new tools and technique to apply to his tasks. 
                It has been a pleasure working and exchanging with him!"
              </p>
              <h5 className="text-lg font-semibold text-white">Francesco Cusimano</h5>
              <p className="text-sm text-gray-400">Data Scientist at Fifteen</p>
              <p className="text-sm text-gray-400">© 2022</p>
              <FaQuoteRight className="text-white text-2xl mt-4" />
            </div>

            {/* Add more recommendations as needed */}
          </div>
          <div className="flex justify-center mt-16">
          <a 
            href="https://www.linkedin.com/in/abiy-dema/details/recommendations/?detailScreenTabIndex=0" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-10 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            See More
          </a>
        </div>
        </div>
      </section>
    </>
  );
};

export default About;