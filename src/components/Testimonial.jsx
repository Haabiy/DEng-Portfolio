import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaPause, FaQuoteLeft, FaQuoteRight, FaTrophy } from 'react-icons/fa';
import videoSource from '../Assets/Achievement/CEO-Mangabey.mp4';
import AwardImage from '../Assets/Achievement/Award.png'
import Certificate from '../Assets/Achievement/Certificate.pdf'

const CEOTestimonial = () => {
  const videoRef = useRef(null); // Reference to the video element
  const [isPlaying, setIsPlaying] = React.useState(false);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="py-20 px-6 bg-gray-900 text-white">
      <div className="container mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-blue-400 mb-12"
        >
          Recognition & Achievement
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center mb-6">
              <FaTrophy className="text-yellow-400 text-4xl mr-4" />
              <h4 className="text-2xl font-semibold text-blue-300">Outstanding Contribution Award</h4>
            </div>
            <div className="relative">
              <FaQuoteLeft className="text-blue-400 text-2xl absolute top-0 left-0" />
              <p className="text-gray-300 italic ml-8 mr-8 mb-4 text-justify">
              "That person has been with the organisation for a year, and while many of us are learning and taking Udemy courses to gain new knowledge, 
               he consistently goes the extra mile by earning certifications. He’s perhaps a <span className='text-blue-400 font-bold'>GENIUS</span>  in those areas (Data/Software Engineering), and 
               I’ve heard his manager say that he’s consistently exceeding expectations and accomplishing more than what was expected of him, and beyond that, he’s truly a gentleman."
              </p>
              <FaQuoteRight className="text-blue-400 text-2xl absolute bottom-0 right-0" />
            </div>
            <div className="mt-6 text-right">
              <p className="text-blue-300 font-semibold">Moktar Diallo</p>
              <p className="text-sm text-gray-400">CEO, Mangabey</p>
              <p className="text-xs text-gray-500 mt-1">Data Architecture and Business Intelligence Specialist</p>
              <p className="text-xs text-gray-500">Helping Global 500 Companies Innovate and Save through Data Solutions</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <h4 className="text-2xl font-semibold text-blue-300 mb-6">Award Ceremony Highlights</h4>
            <div className="relative aspect-w-16 aspect-h-9 mb-4">
              <video
                ref={videoRef} // Attach the video ref here
                className="w-full h-full object-cover rounded-lg"
                src={videoSource}
                type="video/mp4"
                poster={AwardImage}
                controls
              >
                Your browser does not support the video tag.
              </video>
              <button
                onClick={handlePlayPause}
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 hover:bg-opacity-30"
              >
                {isPlaying ? (
                  <FaPause className="text-white text-4xl" />
                ) : (
                  <FaPlay className="text-white text-4xl" />
                )}
              </button>
            </div>
            <p className="text-gray-400 text-sm">
              Watch the highlights from the award ceremony where our CEO recognizes outstanding contributions to the company.
            </p>
          </motion.div>
        </div>
                {/* New Section for Certificate */}
                <div className="mt-12 text-center">
          <h4 className="text-2xl font-semibold text-blue-300 mb-4">My Certification</h4>
          <p className="text-gray-300 mb-4">
            I have also received a certification during Spring Award 2024. You can review it below.
          </p>
          <a
            href={Certificate}
            className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
            target="_blank"
            rel="noreferrer"
          >
            Download Certificate
          </a>
        </div>
      </div>
    </section>
  );
};


export default CEOTestimonial;
