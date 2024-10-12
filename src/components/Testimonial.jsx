import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaPause, FaQuoteLeft, FaQuoteRight, FaTrophy, FaForward, FaBackward } from 'react-icons/fa';
import videoSource from '../Assets/Achievement/CEO-Mangabey.mp4';
import AwardImage from '../Assets/Achievement/Award.png';
import Certificate from '../Assets/Achievement/Certificate.pdf';

const CEOTestimonial = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVideoClick = () => {
    handlePlayPause();
  };

  const handleForward = () => {
    videoRef.current.currentTime += 10;
  };

  const handleBackward = () => {
    videoRef.current.currentTime -= 10;
  };

  return (
    <motion.section
      id='award'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-20 px-6 bg-gray-900 text-white min-h-screen"
    >
      <div className="container mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-blue-400 mb-16"
        >
          Recognition & Achievement
        </motion.h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-800 p-10 rounded-2xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
          >
            <div className="flex items-center mb-8">
              <FaTrophy className="text-yellow-400 text-5xl mr-6" />
              <h4 className="text-2xl font-semibold text-blue-300">Outstanding Contribution Award</h4>
            </div>
            <div className="relative">
              <FaQuoteLeft className="text-blue-400 text-3xl absolute top-0 left-0" />
              <p className="text-gray-300 italic ml-10 mr-10 mb-6 text-center text-lg leading-relaxed">
                That person has been with the organisation for a year, and while many of us are learning and taking Udemy courses to gain new knowledge, 
                he consistently goes the extra mile by earning certifications. He's perhaps a <span className='text-blue-400 font-bold'>GENIUS</span> in those areas (Data/Software Engineering), and 
                I've heard his manager say that he's consistently exceeding expectations and accomplishing more than what was expected of him, and beyond that, he's truly a gentleman.
              </p>
              <FaQuoteRight className="text-blue-400 text-3xl absolute bottom-0 right-0" />
            </div>
            <motion.div 
              className="mt-8 text-right"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-blue-300 font-semibold text-xl">Moktar Diallo</p>
              <p className="text-gray-400">CEO, Mangabey</p>
              <p className="text-gray-500 mt-2">Data Architecture and Business Intelligence Specialist</p>
              <p className="text-gray-500">Helping Global 500 Companies Innovate & Save through Data Solutions</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gray-800 p-10 rounded-2xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
          >
            <h4 className="text-2xl font-semibold text-blue-300 mb-8">Award Ceremony Highlights</h4>
            <div 
              onClick={handleVideoClick}
              className="relative aspect-w-16 aspect-h-9 mb-6 rounded-lg overflow-hidden cursor-pointer"
            >
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                src={videoSource}
                type="video/mp4"
                poster={AwardImage}
              >
                Your browser does not support the video tag.
              </video>
              <div 
                className={`absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 ${isPlaying ? 'opacity-0' : 'opacity-100'} transition-opacity duration-200`}
              >
                <div 
                  className="flex space-x-4"
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent click event from bubbling up to container
                      handleBackward();
                    }}
                    className="text-white p-2 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors duration-200"
                  >
                    <FaBackward />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent click event from bubbling up to container
                      handlePlayPause();
                    }}
                    className="text-white p-2 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors duration-200"
                  >
                    {isPlaying ? <FaPause /> : <FaPlay />}
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent click event from bubbling up to container
                      handleForward();
                    }}
                    className="text-white p-2 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors duration-200"
                  >
                    <FaForward />
                  </motion.button>
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-lg">
              Watch the highlights from the award ceremony where our CEO recognizes outstanding contributions to the company.
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h4 className="text-3xl font-semibold text-blue-300 mb-6">My Certification</h4>
          <p className="text-gray-300 mb-8 text-lg">
            I have also received a certification during Spring Award 2024. You can review it below.
          </p>
          <motion.a
            href={Certificate}
            className="inline-block bg-blue-500 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-300"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Certificate
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CEOTestimonial;
