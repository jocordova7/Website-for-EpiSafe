'use client';

import React, { useState } from 'react';

export default function EmergencyButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={toggleOpen}
        className="w-14 h-14 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-lg flex items-center justify-center transition-colors"
        aria-label="Emergency button"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 w-64">
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Emergency Options</h3>
          <div className="space-y-2">
            <button className="w-full py-2 bg-red-600 hover:bg-red-700 text-white rounded transition-colors">
              Call Emergency Services
            </button>
            <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors">
              Contact Caregiver
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 