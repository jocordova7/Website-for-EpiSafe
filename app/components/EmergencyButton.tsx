'use client';

import { useState } from 'react';
import Image from 'next/image';

const CtaButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleCtaClick = () => {
    setIsModalOpen(true);
  };
  
  return (
    <>
      {/* Floating CTA button */}
      <button
        className="fixed bottom-8 right-8 bg-[#00A878] hover:bg-[#008F63] text-white p-4 rounded-full shadow-lg z-50 focus:outline-none focus:ring-4 focus:ring-[#00A878]/30 transition-all duration-200 transform hover:scale-105"
        onClick={handleCtaClick}
        aria-label="Download App Button"
      >
        <span className="sr-only">Download App</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor" 
          className="h-8 w-8"
          aria-hidden="true"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
          />
        </svg>
      </button>

      {/* App download modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-labelledby="download-modal-title"
          aria-modal="true"
        >
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full p-6 transform transition-all">
            <h2 
              id="download-modal-title"
              className="text-2xl font-bold text-[#2C3E50] dark:text-white mb-4"
            >
              Download SeizureGuard
            </h2>
            
            <p className="text-[#6B7280] dark:text-gray-300 mb-6">
              Get the SeizureGuard app on your preferred platform to start monitoring and protecting your loved ones.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <a 
                href="#" 
                className="bg-[#00A878] hover:bg-[#008F63] text-white p-4 rounded-lg flex items-center justify-center transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  // This would link to app store in production
                  alert('This would redirect to the App Store');
                }}
              >
                <div className="flex flex-col items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm">App Store</span>
                </div>
              </a>
              
              <a 
                href="#" 
                className="bg-[#00A878] hover:bg-[#008F63] text-white p-4 rounded-lg flex items-center justify-center transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  // This would link to google play in production
                  alert('This would redirect to Google Play');
                }}
              >
                <div className="flex flex-col items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm">Google Play</span>
                </div>
              </a>
            </div>
            
            <div className="flex justify-center mt-4">
              <button
                className="px-4 py-2 bg-[#E6F7F3] dark:bg-[#1A2F26] text-[#2C3E50] dark:text-white rounded hover:bg-[#D1EFE7] dark:hover:bg-[#2A3F35] transition-colors"
                onClick={() => setIsModalOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CtaButton; 