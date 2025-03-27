'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-xl font-semibold text-gray-900">
              EpiSave
            </Link>
            <p className="mt-4 text-gray-600 max-w-xs">
              Empowering individuals with epilepsy to live with greater confidence and peace of mind through innovative seizure detection.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Product</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/marketing/whyepisave" className="text-base text-gray-600 hover:text-gray-900">
                  Why EpiSave?
                </Link>
              </li>
              <li>
                <Link href="/marketing/howitworks" className="text-base text-gray-600 hover:text-gray-900">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/marketing/features" className="text-base text-gray-600 hover:text-gray-900">
                  Features
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Support</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/marketing/faq" className="text-base text-gray-600 hover:text-gray-900">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/marketing/contact" className="text-base text-gray-600 hover:text-gray-900">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-base text-gray-600 hover:text-gray-900">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-base text-gray-500 text-center">
            &copy; {new Date().getFullYear()} EpiSave. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 text-center mt-2">
            EpiSave is not a medical device and should not replace professional medical advice or treatment.
          </p>
        </div>
      </div>
    </footer>
  );
} 