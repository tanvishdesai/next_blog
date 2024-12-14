import React from 'react';

const ContactMe = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">Contact Me</h1>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Instagram</label>
            <a
              href="https://www.instagram.com/tanvish.desai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              @tanvish.desai
            </a>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Archive Instagram</label>
            <a
              href="https://www.instagram.com/this.is.tanvish"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              @this.is.tanvish
            </a>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <a
              href="mailto:tanvishdesai.05@gmailcom"
              className="text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              tanvishdesai.05@gmail.com
            </a>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">GitHub</label>
            <a
              href="https://github.com/tanvishdesai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              tanvishdesai
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
