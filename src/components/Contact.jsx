import React from 'react';

const Contact = () => {
  return (
    <footer id='contact' className="bg-gray-800 py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Connect with Me</h2>
        <p className="text-lg text-gray-400 mb-6">
          Whether you have a question or just want to say hi, feel free to reach out!
        </p>
        
        {/* Contact Details */}
        <div className="space-y-4">
          <p className="text-gray-300">
            <strong>Email:</strong> youremail@example.com
          </p>
          <p className="text-gray-300">
            <strong>Phone:</strong> (123) 456-7890
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-8 mt-6">
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-blue-400 transition duration-300"
          >
            GitHub
          </a>
          <a 
            href="https://linkedin.com/in/yourusername" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-blue-400 transition duration-300"
          >
            LinkedIn
          </a>
          <a 
            href="https://twitter.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-blue-400 transition duration-300"
          >
            Twitter
          </a>
        </div>

        <p className="text-gray-500 text-sm mt-8">
          &copy; {new Date().getFullYear()} Abiy Dema. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Contact;
