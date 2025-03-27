'use client';

import React from 'react';

export default function Features() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">EpiSave Features</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our innovative Android smartwatch app helps monitor and detect seizures.
          </p>
        </div>
        
        {/* Feature content will go here */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">Real-Time Monitoring</h3>
            <p className="text-gray-600">
              Content will be added here about the real-time monitoring features.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">Instant Alert System</h3>
            <p className="text-gray-600">
              Content will be added here about the alert system for caregivers.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">Android Compatibility</h3>
            <p className="text-gray-600">
              Content will be added here about device compatibility.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 