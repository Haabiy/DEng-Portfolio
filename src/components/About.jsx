import React from 'react';
import { FaGraduationCap, FaCertificate, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const About = () => {
  return (
    <>
      {/* About Me Section */}
      <section id="about" className="py-20 px-6 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center text-white hover:text-blue-400 transition duration-300 hover:cursor-pointer mb-8">About Me</h3>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            I specialize in transforming raw data into valuable insights through modern data engineering tools and techniques.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Education Section */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h4 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <FaGraduationCap className="mr-2" /> Education
              </h4>
              <div className="text-gray-300">
                <h5 className="font-bold text-lg">Centrale Nantes</h5>
                <p>BSc in Engineering</p>
                <p>Nantes, France</p>
                <p className="text-sm text-gray-400">Top 5 in France</p>
              </div>
            </div>

            {/* Certifications Section */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h4 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <FaCertificate className="mr-2" /> Certifications
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li><span className="font-semibold">Web Security with Django</span> – Udemy (Issued Jun 2024)</li>
                <li><span className="font-semibold">Tailwind CSS</span> – Udemy (Issued May 2024)</li>
                <li><span className="font-semibold">Backend Development with Django</span> – Udemy (Issued Mar 2024)</li>
                <li><span className="font-semibold">Data Engineering Essentials</span> – Udemy (Issued Feb 2024)</li>
                <li><span className="font-semibold">Analyzing and Visualizing Data with Power BI</span> – Udemy (Issued Jun 2023)</li>
                {/* Add more certifications as needed */}
              </ul>
            </div>
          </div>

          {/* Experiences Section */}
          <div className="mt-12">
            <h4 className="text-4xl font-bold text-center text-white hover:text-blue-400 transition duration-300 hover:cursor-pointer mb-8">Experience</h4>
            <div className="relative pl-6">
              <div className="absolute w-1 h-full bg-white left-0 transform -translate-x-1/2"></div>

              {/* Experience 1 */}
              <div className="mb-8">
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                  <h5 className="text-xl font-semibold text-white">Data Engineer @ Decathlon</h5>
                  <p className="text-gray-300">Lille, France | Sep 2024 – Present</p>
                  <p className="mt-2 text-gray-400">Working on improving data pipelines, and providing data-driven insights for product improvement.</p>
                </div>
              </div>

              {/* Experience 2 */}
              <div className="mb-8">
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                  <h5 className="text-xl font-semibold text-white">Data Engineer @ Mangabey</h5>
                  <p className="text-gray-300">Paris, France | Jan 2023 – August 2024</p>
                  <p className="mt-2 text-gray-400">Instrumental in developing data products and building algorithms for seamless integration.</p>
                </div>
              </div>

              {/* Experience 3 */}
              <div className="mb-8">
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                  <h5 className="text-xl font-semibold text-white">Growth/Data Engineer @ Fifteen</h5>
                  <p className="text-gray-300">Vanves, France | Jan 2023 – Jul 2024</p>
                  <p className="mt-2 text-gray-400">Architected data pipelines, built automation tools, and conducted competitive analysis for improved targeting and efficiency..</p>
                </div>
              </div>

              {/* Add more experiences as needed */}
            </div>
          </div>
        </div>
      </section>

{/* Featured by Mangabey Section */}
<section id="featured" className="py-20 px-6 bg-gray-800 relative text-white">
  <div className="container mx-auto relative z-10">
    <h3 className="text-4xl font-bold text-center text-white hover:text-blue-400 transition duration-300 hover:cursor-pointer mb-12">Featured by Mangabey</h3>
    <div className="relative p-8 bg-opacity-90 bg-gray-900 rounded-lg shadow-lg text-center">
      {/* Featured Text */}
      <p className="text-lg italic z-10 relative mb-5">
        "Meet Abiy DEMA, our talented Data Engineer at Mangabey 🚀 Since joining our team in January 2023, Abiy has been instrumental in crafting the backbone of our data product development..."
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
              <p className="text-gray-300 mb-4">
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
        </div>
      </section>
    </>
  );
};

export default About;
