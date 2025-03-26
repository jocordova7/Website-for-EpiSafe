'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and brand name */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center" aria-label="Home">
              <div className="h-10 w-10 relative">
                <Image 
                  src="/logo.png"
                  alt="EpiSave Logo" 
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="ml-3 text-xl font-semibold text-[#2C3E50] dark:text-white">
                EpiSave
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink href="/" text="Home" />
              <NavLink href="#why-episave" text="Why EpiSave?" />
              <NavLink href="#how-it-works" text="How It Works" />
              <NavLink href="#features" text="Features" />
              <NavLink href="#testimonials" text="Testimonials" />
              <NavLink href="#faqs" text="FAQs" />
              <NavLink href="#download" text="Download" />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-[#6B7280] hover:text-[#2C3E50] hover:bg-[#E6F7F3] dark:text-gray-400 dark:hover:text-white dark:hover:bg-[#1A2F26] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#00A878]"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
              {/* Icon when menu is closed */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div
        className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <MobileNavLink href="/" text="Home" />
          <MobileNavLink href="#why-episave" text="Why EpiSave?" />
          <MobileNavLink href="#how-it-works" text="How It Works" />
          <MobileNavLink href="#features" text="Features" />
          <MobileNavLink href="#testimonials" text="Testimonials" />
          <MobileNavLink href="#faqs" text="FAQs" />
          <MobileNavLink href="#download" text="Download" />
        </div>
      </div>
    </nav>
  );
};

// Desktop navigation link component
const NavLink = ({ href, text }: { href: string; text: string }) => (
  <Link 
    href={href}
    className="text-[#6B7280] hover:text-[#2C3E50] hover:bg-[#E6F7F3] dark:text-gray-300 dark:hover:text-white dark:hover:bg-[#1A2F26] px-3 py-2 rounded-md text-sm font-medium transition-colors"
    aria-current={href === '/' ? 'page' : undefined}
  >
    {text}
  </Link>
);

// Mobile navigation link component
const MobileNavLink = ({ href, text }: { href: string; text: string }) => (
  <Link
    href={href}
    className="text-[#6B7280] hover:text-[#2C3E50] hover:bg-[#E6F7F3] dark:text-gray-300 dark:hover:text-white dark:hover:bg-[#1A2F26] block px-3 py-2 rounded-md text-base font-medium transition-colors"
    aria-current={href === '/' ? 'page' : undefined}
  >
    {text}
  </Link>
);

export default Navbar; 