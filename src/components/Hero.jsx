import React, {useEffect, useRef} from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Hero = () => {
  const HeroRef = useRef(null);

  // Scroll into view when #skills hash is present
  useEffect(() => {
    if (window.location.hash === '#hero' && HeroRef.current) {
      HeroRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);
  return (
    <section id="hero" ref={HeroRef} className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-50">
        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-7xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-gray-500 to-pink-500"
        >
          Abiy Dema
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-2xl md:text-3xl text-gray-300 mb-6"
        >
          Data Engineer | Designing Reliable, High-Performance Data Systems
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
        >
          Passionately interested in Software Engineering with a focus on data systems, and I enjoy building reliable platforms, 
          scalable pipelines, and efficient system architectures. I love working across the stack—from backend services to 
          data platforms—and continually improving how data flows through products.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center space-x-6 mb-10"
        >
          {[
            { href: "https://www.linkedin.com/in/abiy-dema/", icon: FaLinkedin },
            { href: "https://github.com/Haabiy", icon: FaGithub },
            { href: "mailto:abiy.dema@gmail.com", icon: FaEnvelope }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition duration-300 text-3xl"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <social.icon />
            </motion.a>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="mt-10 inline-block bg-gradient-to-r from-blue-400 to-gray-800 text-white font-semibold py-3 px-10 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer"
          >
            Explore My Work
          </Link>
        </motion.div>
      </div>

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
        className="absolute top-1/4 -right-16 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
      ></motion.div>

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 25,
          ease: "linear",
          repeat: Infinity,
        }}
        className="absolute bottom-1/4 -left-16 w-72 h-72 bg-gray-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
      ></motion.div>
    </section>
  );
};

export default Hero;