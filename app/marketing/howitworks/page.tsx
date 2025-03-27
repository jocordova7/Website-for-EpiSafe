'use client';

import React from 'react';
import Image from 'next/image';
import CTAButton from '../../components/ui/CTAButton';

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: 'Download & Install',
      description: 'Get EpiSave from the Google Play Store and install it on your Android smartphone.',
      icon: (
        <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Connect Your Smartwatch',
      description: 'Pair your Android smartwatch with the EpiSave app following our simple setup instructions.',
      icon: (
        <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Add Emergency Contacts',
      description: 'Enter the contact information for caregivers or family members who should receive alerts.',
      icon: (
        <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857M19 7a2 2 0 11-4 0 2 2 0 014 0zm-7 3a2 2 0 11-4 0 2 2 0 014 0zm3-2a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      id: 4,
      title: 'Wear & Go About Your Day',
      description: 'Put on your smartwatch and live your life with confidence. EpiSave works silently in the background.',
      icon: (
        <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">How EpiSave Works</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our simple, intuitive process makes seizure detection accessible and easy to use.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Advanced Seizure Detection Technology</h2>
            <p className="text-lg text-gray-600 mb-4">
              EpiSave uses sophisticated algorithms to analyze motion patterns from your Android smartwatch sensors. 
              The app is specifically designed to identify the unique movements associated with tonic-clonic seizures.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              When the app detects patterns consistent with seizure activity, it immediately triggers an alert sequence, 
              notifying both the wearer (if conscious) and their designated emergency contacts.
            </p>
            <CTAButton href="/marketing/contact" variant="primary">
              Get Started Today
            </CTAButton>
          </div>
          <div className="order-1 md:order-2 relative h-[400px]">
            <Image 
              src="/images/technology-diagram.jpg"
              alt="EpiSave Technology Diagram"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Simple 4-Step Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.id} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div className="bg-primary bg-opacity-10 h-16 w-16 rounded-full flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Step {step.id}: {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 