import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
          My Information
        </h1>
        <div className="space-y-4">
          <div>
            <p className="text-gray-600 text-lg font-medium">Contact Number:</p>
            <p className="text-gray-800 text-base font-semibold">9307240899</p>
          </div>
          <div>
            <p className="text-gray-600 text-lg font-medium">Email:</p>
            <p className="text-blue-600 text-base font-semibold hover:underline">
              <a href="mailto:ankitpatil9307@gmail.com">ankitpatil9307@gmail.com</a>
            </p>
          </div>
          <div>
            <p className="text-gray-600 text-lg font-medium">Location:</p>
            <p className="text-gray-800 text-base font-semibold">Jalgaon, Maharashtra</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
