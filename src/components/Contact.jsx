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
            href="mailto:abiy.dema@gmail.com"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg"
          >
            Send an Email
          </a>
        </div>

        {/* Decorative Divider */}
        <div className="my-12 w-full h-1 bg-blue-500 opacity-20"></div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 text-gray-400">
          <a
            href="https://github.com/Haabiy?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M12 .296C5.372.296 0 5.667 0 12.296c0 5.298 3.438 9.8 8.207 11.387.6.111.793-.261.793-.578 0-.287-.01-1.05-.016-2.06-3.338.725-4.042-1.613-4.042-1.613-.545-1.384-1.333-1.754-1.333-1.754-1.09-.746.083-.731.083-.731 1.204.084 1.838 1.237 1.838 1.237 1.07 1.834 2.809 1.304 3.492.996.108-.775.418-1.304.76-1.604-2.664-.302-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.522.117-3.176 0 0 1.009-.322 3.3 1.23a11.518 11.518 0 0 1 3.003-.403c1.018.004 2.043.137 3.003.403 2.292-1.552 3.299-1.23 3.299-1.23.654 1.654.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.804 5.624-5.474 5.92.43.37.823 1.102.823 2.222 0 1.606-.015 2.9-.015 3.293 0 .32.192.694.801.577C20.565 22.093 24 17.59 24 12.296c0-6.629-5.373-12-12-12" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/abiy-dema/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M20.447 20.452H16.91v-4.943c0-1.177-.025-2.692-1.641-2.692-1.641 0-1.892 1.282-1.892 2.605v5.03h-3.534v-10.174h3.393v1.39h.047c.472-.896 1.63-1.843 3.354-1.843 3.584 0 4.246 2.355 4.246 5.423v5.204zM5.337 8.433c-1.144 0-2.072-.929-2.072-2.072 0-1.144.928-2.072 2.072-2.072 1.145 0 2.072.928 2.072 2.072 0 1.144-.927 2.072-2.072 2.072zm1.771 12.019H3.566v-10.174h3.542v10.174zM22.225 0H1.771C.791 0 0 .792 0 1.771v20.457c0 .979.791 1.771 1.771 1.771h20.457c.978 0 1.771-.792 1.771-1.771V1.771c0-.979-.793-1.771-1.771-1.771z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
