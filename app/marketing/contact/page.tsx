'use client';

import React from 'react';
import Image from 'next/image';
import CTAButton from '../../components/ui/CTAButton';

export default function Contact() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get EpiSave Today</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Download the app and start your journey to a more confident life with epilepsy.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Download EpiSave</h2>
            <div className="mb-8">
              <div className="flex justify-center">
                <div className="bg-gray-100 p-4 rounded-lg inline-block">
                  {/* Google Play badge would go here */}
                  <div className="w-48 h-16 bg-gray-300 rounded flex items-center justify-center">
                    <p className="text-gray-600 text-sm">Google Play Badge</p>
                  </div>
                </div>
              </div>
              <p className="text-center text-gray-600 mt-4">
                EpiSave is available on the Google Play Store for Android devices.
              </p>
            </div>
            
            <h3 className="text-xl font-semibold mb-4">System Requirements</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Android 8.0 or higher</li>
              <li>• Compatible Android smartwatch</li>
              <li>• Bluetooth connectivity</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
            <p className="text-gray-600 mb-6">
              Have questions about EpiSave? We're here to help. Fill out the form below and our team will get back to you.
            </p>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <button
                type="button"
                className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-all"
                onClick={(e) => {
                  e.preventDefault();
                  alert('This is a demo form. In a real application, this would submit your inquiry.');
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 