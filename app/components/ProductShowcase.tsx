'use client';

import Image from 'next/image';
import { useState } from 'react';

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState<'smartwatch' | 'app'>('smartwatch');
  
  const deviceFeatures: Record<string, Feature[]> = {
    'smartwatch': [
      {
        title: "Medical-Grade Seizure Detection",
        description: "Our FDA-cleared wrist-worn wearable provides clinical-grade seizure monitoring in a stylish and comfortable form factor.",
        icon: (
          <svg className="w-6 h-6 text-[#00A878]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
      },
      {
        title: "10-Day Battery Life",
        description: "Enjoy 10+ days of continuous monitoring on a single charge, reducing the stress of daily charging routines.",
        icon: (
          <svg className="w-6 h-6 text-[#00A878]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        )
      },
      {
        title: "Water Resistant",
        description: "IP67 water resistant design allows for worry-free wear during daily activities including hand washing and showering.",
        icon: (
          <svg className="w-6 h-6 text-[#00A878]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        )
      },
      {
        title: "Discreet Design",
        description: "Sleek, modern design that looks like a regular smartwatch, removing stigma and providing discreet medical monitoring.",
        icon: (
          <svg className="w-6 h-6 text-[#00A878]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
          </svg>
        )
      },
    ],
    'app': [
      {
        title: "Real-Time Alerts",
        description: "Receive immediate notifications when seizure activity is detected, enabling timely intervention and care.",
        icon: (
          <svg className="w-6 h-6 text-[#00A878]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        )
      },
      {
        title: "Caregiver Monitoring",
        description: "Allow family members and caregivers to remotely monitor seizure activity and receive emergency alerts.",
        icon: (
          <svg className="w-6 h-6 text-[#00A878]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        )
      },
      {
        title: "Seizure Diary",
        description: "Automatically log seizure events, track patterns, and generate reports to share with healthcare providers.",
        icon: (
          <svg className="w-6 h-6 text-[#00A878]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
        )
      },
      {
        title: "Data Insights",
        description: "Advanced analytics provide patterns and trends to help identify seizure triggers and optimize treatment.",
        icon: (
          <svg className="w-6 h-6 text-[#00A878]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        )
      },
    ]
  };

  return (
    <section id="features" className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Products</h2>
          <p className="max-w-3xl mx-auto text-[#6B7280] dark:text-gray-300">
            Advanced wearable technology and companion applications designed to provide 
            peace of mind for epilepsy patients and their caregivers.
          </p>
        </div>

        {/* Product Tab Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('smartwatch')}
            className={`px-6 py-3 rounded-full transition-colors ${
              activeTab === 'smartwatch'
                ? 'bg-[#00A878] text-white'
                : 'bg-gray-100 text-[#2C3E50] hover:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600'
            }`}
          >
            SeizureGuard Smartwatch
          </button>
          <button
            onClick={() => setActiveTab('app')}
            className={`px-6 py-3 rounded-full transition-colors ${
              activeTab === 'app'
                ? 'bg-[#00A878] text-white'
                : 'bg-gray-100 text-[#2C3E50] hover:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600'
            }`}
          >
            SeizureGuard App
          </button>
        </div>

        {/* Product Display */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Product Image */}
          <div className="bg-[#E6F7F3] dark:bg-[#1A2F26] rounded-2xl p-8 flex items-center justify-center">
            <div className="relative w-full h-[400px]">
              <Image
                src={`/${activeTab === 'app' ? 'app-mockup' : 'smartwatch'}.jpg`}
                alt={activeTab === 'app' 
                  ? "SeizureGuard App" 
                  : "SeizureGuard Smartwatch"}
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Product Features */}
          <div>
            <h3 className="text-2xl font-bold text-[#2C3E50] dark:text-white mb-6">
              {activeTab === 'app' 
                ? "SeizureGuard Companion App" 
                : "SeizureGuard Smartwatch"}
            </h3>
            
            <p className="text-[#6B7280] dark:text-gray-300 mb-8">
              {activeTab === 'app' 
                ? "Our companion app transforms data from the SeizureGuard Smartwatch into actionable insights, alerts, and reports." 
                : "Our FDA-cleared smartwatch designed specifically for epilepsy monitoring with a focus on everyday wearability."}
            </p>
            
            <div className="space-y-6">
              {deviceFeatures[activeTab].map((feature, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0 mt-1">
                    {feature.icon}
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-[#2C3E50] dark:text-white">
                      {feature.title}
                    </h4>
                    <p className="text-[#6B7280] dark:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10">
              <button className="btn-primary mr-4">
                Learn More
              </button>
              <button className="btn-secondary">
                {activeTab === 'app' ? 'Download Now' : 'Pre-Order'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 