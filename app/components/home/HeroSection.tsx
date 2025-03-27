'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import CTAButton from '../ui/CTAButton';

export default function HeroSection() {
  const [basePath, setBasePath] = useState('');
  
  useEffect(() => {
    // Set basePath for GitHub Pages in production environment
    setBasePath(process.env.NODE_ENV === 'production' ? '/Website-for-EpiSafe' : '');
  }, []);

  return (
    <section className="pt-24 pb-12 md:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-1 text-center md:text-left md:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Empower Yourself with Seizure Alerts on the Go
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl">
              EpiSave provides real-time seizure detection and alerts on your Android smartwatch, 
              giving you and your loved ones peace of mind and freedom.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <CTAButton href="/marketing/contact" variant="primary">
                Get EpiSave on Google Play
              </CTAButton>
              <CTAButton href="/marketing/howitworks" variant="outline">
                Learn How It Works
              </CTAButton>
            </div>
          </div>
          <div className="flex-1 mt-12 md:mt-0">
            <div className="relative h-[400px] w-full max-w-md mx-auto">
              <img 
                src={`${basePath}/logo.svg`}
                alt="EpiSave on Android Smartwatch"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 