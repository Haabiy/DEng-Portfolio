import React, {useEffect, useRef} from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const RecommendationCard = ({ quote, name, position, year }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-400/30 hover:-translate-y-1">
    <FaQuoteLeft className="text-blue-400 text-2xl mb-4" />
    <p className="text-gray-300 mb-4 min-h-[150px]">{quote}</p>
    <div className="mt-auto">
      <h5 className="text-lg font-semibold text-white">{name}</h5>
      <p className="text-sm text-gray-400">{position}</p>
      <p className="text-sm text-gray-400">© {year}</p>
    </div>
    <FaQuoteRight className="text-blue-400 text-2xl mt-4 float-right" />
  </div>
);

const Recommendations = () => {
    const recommRef = useRef(null);

    // Scroll into view when #skills hash is present
    useEffect(() => {
      if (window.location.hash === '#recommendations' && recommRef.current) {
        recommRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, []);
  const recommendations = [
    {
      quote: "I had the pleasure of managing Abiy as his team lead. Abiy is a motivated data engineer known for his quick learning and readiness to tackle challenges. His diverse skill set, ranging from Python and SQL to AWS data stack, showcases his adaptability and eagerness to learn and grow in any fast-paced environment.",
      name: "Hammad Aslam KHAN",
      position: "Data Engineering & Architecture at Mangabey",
      year: "2024"
    },
    {
      quote: "I had the pleasure of working with Abiy, a highly skilled Data Engineer who excelled in our fast-paced environment. His adaptability and ability to simplify complex issues made him indispensable during high-pressure situations. Abiy's collaborative spirit and knack for making data accessible significantly boosted our project success.",
      name: "Christelle Depierre-Barrault",
      position: "Program Director at Mangabey",
      year: "2023"
    },
    {
      quote: "We have been lucky to have Abiy on the Fifteen marketing team for his final year internship, where he successfully helped us identify more leads, and qualify them, using data scraping techniques. Abiy is easy to work with, he has good technical skills and a relentless motivation to learn new things.",
      name: "Damien Brunet",
      position: "CMO at Fifteen",
      year: "2022"
    },
    {
      quote: "Abiy produced stellar work throughout his internship, be it web-scraping complex websites or wrangling data to deliver value. He is very curious, and showed himself eager to learn new tools and technique to apply to his tasks. It has been a pleasure working and exchanging with him!",
      name: "Francesco Cusimano",
      position: "Data Scientist at Fifteen",
      year: "2022"
    },
  ];

  return (
    <section id="recommendations" ref={recommRef} className="py-20 px-6 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto">
        <h3 className="text-4xl font-bold text-center text-blue-400 mb-12 cursor-pointer">
          Recommendations
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {recommendations.map((rec, index) => (
            <RecommendationCard key={index} {...rec} />
          ))}
        </div>
        <div className="flex justify-center mt-16">
          <a 
            href="https://www.linkedin.com/in/abiy-dema/details/recommendations/?detailScreenTabIndex=0" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-10 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-400/50"
          >
            See More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Recommendations;