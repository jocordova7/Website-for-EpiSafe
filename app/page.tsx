'use client';

import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-[#E6F7F3] dark:from-gray-900 dark:to-[#1A2F26] py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-10 lg:px-16 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2C3E50] dark:text-white mb-6">
            Empower Yourself with 
            <span className="text-[#00A878] dark:text-[#00A878]"> Seizure Alerts</span> on the Go
          </h1>
          <p className="text-lg text-[#6B7280] dark:text-gray-300 max-w-3xl mx-auto mb-10">
            EpiSave provides reliable, life-improving seizure detection for Android smartwatches, giving you and your loved ones peace of mind wherever you go.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#download" 
              className="px-6 py-3 bg-[#00A878] hover:bg-[#008F63] text-white rounded-md shadow-md transition-colors"
            >
              Get on Google Play
            </a>
            <a 
              href="#features" 
              className="px-6 py-3 bg-white hover:bg-gray-100 text-[#2C3E50] border border-gray-300 rounded-md shadow-md transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <h2 className="text-3xl font-bold text-center text-[#2C3E50] dark:text-white mb-12">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#E6F7F3] dark:bg-[#1A2F26] rounded-full flex items-center justify-center mb-4">
                <span className="text-[#00A878] text-xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#2C3E50] dark:text-white">Android Compatibility</h3>
              <p className="text-[#6B7280] dark:text-gray-300">Works with a wide range of Android smartwatches, making advanced seizure detection accessible and affordable.</p>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#E6F7F3] dark:bg-[#1A2F26] rounded-full flex items-center justify-center mb-4">
                <span className="text-[#00A878] text-xl">🔔</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#2C3E50] dark:text-white">Real-time Alerts</h3>
              <p className="text-[#6B7280] dark:text-gray-300">Immediate notifications sent to both the wearer and designated caregivers when seizure-like activity is detected.</p>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#E6F7F3] dark:bg-[#1A2F26] rounded-full flex items-center justify-center mb-4">
                <span className="text-[#00A878] text-xl">🔋</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#2C3E50] dark:text-white">Battery Optimized</h3>
              <p className="text-[#6B7280] dark:text-gray-300">Designed to minimize battery consumption while maintaining continuous monitoring on your smartwatch.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section id="download" className="py-16 bg-[#00A878] dark:bg-[#008F63]">
        <div className="container mx-auto px-6 md:px-10 lg:px-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Take Control?
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto mb-8">
            Join thousands of users who trust EpiSave for advanced seizure detection on their Android smartwatches.
          </p>
          <a 
            href="#" 
            className="inline-flex items-center justify-center px-6 py-3 bg-black hover:bg-gray-900 text-white font-medium rounded-md shadow-md transition-colors"
          >
            Download on Google Play
          </a>
        </div>
      </section>
    </main>
  );
} 