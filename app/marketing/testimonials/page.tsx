'use client';

import React from 'react';

export default function Testimonials() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">User Stories</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from real people who use EpiSave to monitor seizures and improve quality of life.
          </p>
        </div>
        
        {/* Testimonials content will go here */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <blockquote className="italic text-gray-600 mb-4">
              "Testimonial content will be added here. This is a sample placeholder for a user story."
            </blockquote>
            <p className="font-semibold">- Sample User</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <blockquote className="italic text-gray-600 mb-4">
              "Testimonial content will be added here. This is a sample placeholder for a user story."
            </blockquote>
            <p className="font-semibold">- Sample User</p>
          </div>
        </div>
      </div>
    </div>
  );
} 