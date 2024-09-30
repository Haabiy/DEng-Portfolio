import React from 'react';

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-gray-900 to-black text-white py-20"
    >
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-4xl font-bold text-blue-400 mb-8">Get in Touch</h3>

        <p className="text-gray-400 text-lg mb-12 max-w-3xl mx-auto">
          Whether you have a question or just want to say hi, my inbox is always open. 
          Drop me a line, and let's start a conversation. I'd love to hear from you.
        </p>

        {/* Call to Action */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12">
          {/* Email Button */}
          <a
            href="mailto:youremail@example.com"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg"
          >
            Send an Email
          </a>

          {/* LinkedIn Button */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg"
          >
            Connect on LinkedIn
          </a>
        </div>

        {/* Decorative Divider */}
        <div className="my-12 w-full h-1 bg-blue-500 opacity-20"></div>

        {/* Footer Links */}
        <div className="flex justify-center space-x-6 text-gray-400">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300"
          >
            LinkedIn
          </a>
          <a
            href="mailto:youremail@example.com"
            className="hover:text-white transition duration-300"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
