'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Helper function to determine if a link is active
  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and brand name */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center" aria-label="Home">
              <img 
                src="/logo.svg" 
                alt="EpiSave Logo" 
                className="h-8 w-auto mr-2" 
              />
              <span className="text-xl font-semibold text-[#2C3E50] dark:text-white">
                EpiSave
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link 
                href="/" 
                className={`${isActive('/') ? 'text-primary font-bold' : 'text-gray-700'} hover:text-primary px-3 py-2 rounded-md text-sm font-medium`}
              >
                Home
              </Link>
              <Link 
                href="/marketing/whyepisave" 
                className={`${isActive('/marketing/whyepisave') ? 'text-primary font-bold' : 'text-gray-700'} hover:text-primary px-3 py-2 rounded-md text-sm font-medium`}
              >
                Why EpiSave?
              </Link>
              <Link 
                href="/marketing/howitworks" 
                className={`${isActive('/marketing/howitworks') ? 'text-primary font-bold' : 'text-gray-700'} hover:text-primary px-3 py-2 rounded-md text-sm font-medium`}
              >
                How It Works
              </Link>
              <Link 
                href="/marketing/features" 
                className={`${isActive('/marketing/features') ? 'text-primary font-bold' : 'text-gray-700'} hover:text-primary px-3 py-2 rounded-md text-sm font-medium`}
              >
                Features
              </Link>
              <Link 
                href="/marketing/testimonials" 
                className={`${isActive('/marketing/testimonials') ? 'text-primary font-bold' : 'text-gray-700'} hover:text-primary px-3 py-2 rounded-md text-sm font-medium`}
              >
                Testimonials
              </Link>
              <Link 
                href="/marketing/faq" 
                className={`${isActive('/marketing/faq') ? 'text-primary font-bold' : 'text-gray-700'} hover:text-primary px-3 py-2 rounded-md text-sm font-medium`}
              >
                FAQ
              </Link>
              <Link 
                href="/marketing/contact" 
                className="text-white bg-primary hover:bg-opacity-90 px-3 py-2 rounded-md text-sm font-medium"
              >
                Download
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-primary hover:bg-gray-100"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link 
            href="/" 
            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/') ? 'text-primary font-bold' : 'text-gray-700'} hover:text-primary hover:bg-gray-100`}
          >
            Home
          </Link>
          <Link 
            href="/marketing/whyepisave" 
            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/marketing/whyepisave') ? 'text-primary font-bold' : 'text-gray-700'} hover:text-primary hover:bg-gray-100`}
          >
            Why EpiSave?
          </Link>
          <Link 
            href="/marketing/howitworks" 
            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/marketing/howitworks') ? 'text-primary font-bold' : 'text-gray-700'} hover:text-primary hover:bg-gray-100`}
          >
            How It Works
          </Link>
          <Link 
            href="/marketing/features" 
            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/marketing/features') ? 'text-primary font-bold' : 'text-gray-700'} hover:text-primary hover:bg-gray-100`}
          >
            Features
          </Link>
          <Link 
            href="/marketing/testimonials" 
            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/marketing/testimonials') ? 'text-primary font-bold' : 'text-gray-700'} hover:text-primary hover:bg-gray-100`}
          >
            Testimonials
          </Link>
          <Link 
            href="/marketing/faq" 
            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/marketing/faq') ? 'text-primary font-bold' : 'text-gray-700'} hover:text-primary hover:bg-gray-100`}
          >
            FAQ
          </Link>
          <Link 
            href="/marketing/contact" 
            className="block px-3 py-2 rounded-md text-base font-medium text-white bg-primary hover:bg-opacity-90"
          >
            Download
          </Link>
        </div>
      </div>
    </nav>
  );
} 