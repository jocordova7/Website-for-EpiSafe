'use client';

import { useState } from 'react';
import Image from 'next/image';

const EmergencyButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCallActive, setIsCallActive] = useState(false);
  
  const handleEmergencyClick = () => {
    setIsModalOpen(true);
  };
  
  const startEmergencyCall = () => {
    setIsCallActive(true);
    // In a real implementation, this would initiate an emergency call
    // or notification to emergency services or designated contacts
  };
  
  const endEmergencyCall = () => {
    setIsCallActive(false);
    setIsModalOpen(false);
  };
  
  // Accessible color scheme with high contrast
  const buttonBgColor = isCallActive ? 'bg-[#FF6B6B]' : 'bg-[#FF6B6B]';
  const buttonHoverColor = isCallActive ? 'hover:bg-[#FF5252]' : 'hover:bg-[#FF5252]';
  
  return (
    <>
      {/* Floating emergency button */}
      <button
        className={`fixed bottom-8 right-8 ${buttonBgColor} ${buttonHoverColor} text-white p-4 rounded-full shadow-lg z-50 focus:outline-none focus:ring-4 focus:ring-[#FF6B6B]/30 transition-all duration-200 transform hover:scale-105`}
        onClick={handleEmergencyClick}
        aria-label="Emergency Call Button"
      >
        <span className="sr-only">Emergency Call</span>
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
            d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" 
          />
        </svg>
      </button>

      {/* Emergency call modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-labelledby="emergency-modal-title"
          aria-modal="true"
        >
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full p-6 transform transition-all">
            <h2 
              id="emergency-modal-title"
              className="text-2xl font-bold text-[#2C3E50] dark:text-white mb-4"
            >
              {isCallActive ? 'Emergency Call Active' : 'Confirm Emergency Call'}
            </h2>
            
            {!isCallActive ? (
              <>
                <p className="text-[#6B7280] dark:text-gray-300 mb-6">
                  Are you sure you want to initiate an emergency call?
                  This will alert emergency services and your designated contacts.
                </p>
                <div className="flex justify-end space-x-3">
                  <button
                    className="px-4 py-2 bg-[#E6F7F3] dark:bg-[#1A2F26] text-[#2C3E50] dark:text-white rounded hover:bg-[#D1EFE7] dark:hover:bg-[#2A3F35] transition-colors"
                    onClick={() => setIsModalOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="px-4 py-2 bg-[#FF6B6B] text-white rounded hover:bg-[#FF5252] transition-colors"
                    onClick={startEmergencyCall}
                  >
                    Confirm Emergency
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center justify-center mb-6">
                  <div className="relative h-24 w-24 animate-pulse">
                    <Image 
                      src="/emergency-icon.png" 
                      alt="Emergency call in progress"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <p className="text-[#FF6B6B] font-semibold text-center mb-6">
                  Emergency call in progress...
                </p>
                <p className="text-[#6B7280] dark:text-gray-300 text-center mb-6">
                  Help is on the way. Stay with the patient and follow any
                  instructions from emergency services.
                </p>
                <div className="flex justify-center">
                  <button
                    className="px-4 py-2 bg-[#E6F7F3] dark:bg-[#1A2F26] text-[#2C3E50] dark:text-white rounded hover:bg-[#D1EFE7] dark:hover:bg-[#2A3F35] transition-colors"
                    onClick={endEmergencyCall}
                  >
                    End Emergency Call
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default EmergencyButton; 