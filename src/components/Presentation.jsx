import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaPause, FaForward, FaBackward } from 'react-icons/fa';
import videoSource from '../Assets/Achievement/LL.mp4';
import LLM from '../Assets/Achievement/LLM.png';

const Presentation = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const PresentationRef = useRef(null);

  useEffect(() => {
    if (window.location.hash === '#presentation' && PresentationRef.current) {
      PresentationRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

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
      id='presentation'
      ref={PresentationRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-24 px-6 bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen flex items-center justify-center"
    >
      <div className="container mx-auto max-w-5xl">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-blue-400 mb-12"
        >
          Sharing Session
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gray-800 p-6 rounded-3xl shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 border border-gray-700"
        >
          <div 
            onClick={handleVideoClick}
            className="relative mb-8 rounded-xl overflow-hidden cursor-pointer w-full aspect-video"
          >
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              src={videoSource}
              type="video/mp4"
              poster={LLM}
            >
              Your browser does not support the video tag.
            </video>
            <motion.div 
              className={`absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 ${isPlaying ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
              initial={{ opacity: 0 }}
              animate={{ opacity: isPlaying ? 0 : 1 }}
            >
              <div className="flex space-x-6">
                {[
                  { icon: FaBackward, onClick: handleBackward },
                  { icon: isPlaying ? FaPause : FaPlay, onClick: handlePlayPause },
                  { icon: FaForward, onClick: handleForward }
                ].map((button, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.1, backgroundColor: '#3B82F6' }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      button.onClick();
                    }}
                    className="text-white p-4 rounded-full bg-blue-600 bg-opacity-80 hover:bg-opacity-100 transition-colors duration-200 shadow-lg"
                  >
                    <button.icon size={24} />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>
          <motion.p 
            className="text-gray-300 text-xl text-center leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Watch key highlights from my presentation on Large Language Models. Get a quick overview of LLMs and their game-changing potential across industries.
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Presentation;