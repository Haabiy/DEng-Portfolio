import React from 'react';
import { motion } from 'framer-motion';

const FeaturedSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      id="featured"
      className="py-20 px-6 bg-gray-900 text-white"
    >
      <div className="container mx-auto text-center">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-blue-400 mb-12"
        >
          Featured by Mangabey
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
        >
          <p className="text-lg md:text-center italic mb-8 text-gray-300">
            "🎉 Meet Abiy DEMA, our talented Data Engineer at Mangabey 🚀 Since joining our team in January 2023, Abiy has been instrumental in crafting the backbone of our data product development. 
            🏆 His expertise in building strong algorithms ensures seamless integration and robust pipelines, guaranteeing top-notch data quality for informed decision-making. 
            📊 But it's not just about technical prowess – Abiy brings a refreshing blend of professionalism, passion, and a delightful sense of humor to our data-driven world every single day! 😄"
          </p>

          <motion.a
            href="https://www.linkedin.com/posts/mangabey_consulting_services_mangabey-healthdata-pharma-activity-7176127782748344320-IB5G?utm_source=share&utm_medium=member_desktop"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            See More on LinkedIn
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FeaturedSection;