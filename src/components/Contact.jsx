import React from 'react';
import { FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-gray-900 to-black text-white py-20"
    >
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-4xl font-bold text-blue-400 mb-8">Get in Touch</h3>

        <p className="text-gray-400 text-lg mb-12 max-w-3xl mx-auto">
            Have a question or want to connect? I'm just a message away! 
            Let’s chat on LinkedIn;
            <div>I’d love to hear from you.</div>
        </p>

        {/* Call to Action */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12">
          {/* LinkedIn Button */}
          <a
            href="https://www.linkedin.com/in/abiy-dema/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg"
          >
            Connect on LinkedIn
          </a>
        </div>

        {/* Decorative Divider */}
        <div className="my-12 w-full h-0.5 bg-blue-500 opacity-20"></div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 text-gray-400">
          <a
            href="https://github.com/Haabiy?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="mailto:abiy.dema@gmail.com"
            className="hover:text-white transition duration-300"
          >
            <FaEnvelope className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
