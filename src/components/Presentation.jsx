import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaPause, FaForward, FaBackward, FaExpand, FaCompress } from 'react-icons/fa';
import videoSource from '../Assets/Achievement/LL.mp4';
import LLM from '../Assets/Achievement/LLM.png';
import EMRRunnerImage from '../Assets/EMRRunner.png';
import EMRRunnerVideo from '../Assets/Achievement/EMRRunner.mp4';
import PIP from '../Assets/Achievement/pip.mp4';
import PIP_POSTER from '../Assets/Achievement/pip_poster.png';


const Presentation = () => {
  const PresentationRef = useRef(null);

  useEffect(() => {
    if (window.location.hash === '#presentation' && PresentationRef.current) {
      PresentationRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handlePlayPause = (videoRef, setPlayingState) => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setPlayingState(true);
    } else {
      videoRef.current.pause();
      setPlayingState(false);
    }
  };

  const handleForward = (videoRef) => {
    videoRef.current.currentTime += 10;
  };

  const handleBackward = (videoRef) => {
    videoRef.current.currentTime -= 10;
  };

  const VideoPlayer = ({ source, poster, title, description }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);

    const toggleFullscreen = () => {
      setIsFullscreen(!isFullscreen);
    };

    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className={`${
            isFullscreen
              ? 'fixed inset-0 z-50 bg-black'
              : 'bg-gray-800 p-6 rounded-3xl shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 border border-gray-700 flex-1 min-w-[300px] max-w-[600px] m-4'
          }`}
        >
          <h4 className={`text-2xl font-bold text-blue-400 mb-4 ${isFullscreen ? 'p-4' : ''}`}>{title}</h4>
          <div 
            onClick={() => handlePlayPause(videoRef, setIsPlaying)}
            className={`relative mb-4 rounded-xl overflow-hidden cursor-pointer ${
              isFullscreen ? 'w-full h-[calc(100vh-120px)]' : 'w-full aspect-video'
            }`}
          >
            <video
              ref={videoRef}
              className={`${isFullscreen ? 'w-full h-full' : 'w-full h-full object-cover'}`}
              src={source}
              type="video/mp4"
              poster={poster}
            >
              Your browser does not support the video tag.
            </video>
            <motion.div 
              className={`absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 ${isPlaying ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
              initial={{ opacity: 0 }}
              animate={{ opacity: isPlaying ? 0 : 1 }}
            >
              <div className="flex space-x-4">
                {[
                  { icon: FaBackward, onClick: () => handleBackward(videoRef) },
                  { icon: isPlaying ? FaPause : FaPlay, onClick: () => handlePlayPause(videoRef, setIsPlaying) },
                  { icon: FaForward, onClick: () => handleForward(videoRef) },
                  { icon: isFullscreen ? FaCompress : FaExpand, onClick: toggleFullscreen }
                ].map((button, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.1, backgroundColor: '#3B82F6' }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      button.onClick();
                    }}
                    className="text-white p-3 rounded-full bg-blue-600 bg-opacity-80 hover:bg-opacity-100 transition-colors duration-200 shadow-lg"
                  >
                    <button.icon size={20} />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>
          {!isFullscreen && (
            <p className="text-gray-300 text-base leading-relaxed">{description}</p>
          )}
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <motion.section
      id='presentation'
      ref={PresentationRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-24 px-6 bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen"
    >
      <div className="container mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-blue-400 mb-12"
        >
          Sharing Session
        </motion.h3>
        <div className="flex flex-wrap justify-center text-center">
          <VideoPlayer 
            source={videoSource}
            poster={LLM}
            title="Large Language Models"
            description="Watch key highlights from my presentation on Large Language Models and their applications."
          />
          <VideoPlayer 
            source={EMRRunnerVideo}
            poster={EMRRunnerImage}
            title="ENIM ⦿ Marketplace "
            description="Explore the web application built with a React.js frontend and Django backend"
          />
          <VideoPlayer 
            source={PIP}
            poster={PIP_POSTER}
            title="Python Package "
            description="pip install emrrunner - A powerful CLI tool and API for managing Spark jobs on Amazon EMR clusters."
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Presentation;