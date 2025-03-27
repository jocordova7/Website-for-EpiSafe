'use client';

import React from 'react';
import Image from 'next/image';

export default function WhyEpiSave() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Why Choose EpiSave?</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how EpiSave is transforming epilepsy management through innovative Android wearable technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Early Detection Saves Lives</h2>
            <p className="text-lg text-gray-600 mb-6">
              Seizures can occur without warning, putting those with epilepsy at risk. EpiSave's advanced detection algorithm 
              continuously monitors for seizure activity, providing critical early alerts that can help prevent injuries and enable 
              timely assistance.
            </p>
            <ul className="space-y-3">
              {['Real-time seizure detection', 'Immediate caregiver notifications', 'Works with Android wearables you already own'].map((item) => (
                <li key={item} className="flex items-start">
                  <svg className="h-6 w-6 text-primary flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-[400px]">
            <Image 
              src="/images/detection-technology.jpg"
              alt="EpiSave's seizure detection technology"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 md:order-1 relative h-[400px]">
            <Image 
              src="/images/easy-integration.jpg"
              alt="Easy integration with Android smartwatches"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Seamless Integration with Android Devices</h2>
            <p className="text-lg text-gray-600 mb-6">
              EpiSave works with a wide range of Android smartwatches, making advanced seizure detection technology accessible 
              to more people. No need for expensive, specialized equipment—just download the app and connect it to your existing 
              Android wearable.
            </p>
            <ul className="space-y-3">
              {['Compatible with most Android smartwatches', 'Simple setup process', 'Affordable solution'].map((item) => (
                <li key={item} className="flex items-start">
                  <svg className="h-6 w-6 text-primary flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 