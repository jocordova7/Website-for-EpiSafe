'use client';

import React from 'react';
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import Script from "next/script";
import "./globals.css";

// Dynamically import components
const Navbar = dynamic(() => import('./components/layout/Navbar'));
const Footer = dynamic(() => import('./components/layout/Footer'));
const EmergencyButton = dynamic(() => import('./components/ui/EmergencyButton'));
const ToastProvider = dynamic(
  () => import('./context/ToastContext').then(mod => ({ default: mod.ToastProvider }))
);

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Get the basePath for GitHub Pages in production
  const basePath = process.env.NODE_ENV === 'production' ? '/Website-for-EpiSafe' : '';
  
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Force CSS reload by adding a version query parameter */}
        <link 
          rel="stylesheet" 
          href={`${basePath}/_next/static/css/app/layout.css?v=${new Date().getTime()}`} 
        />
      </head>
      <body
        className={`${inter.variable} antialiased bg-gray-50 dark:bg-gray-900 min-h-screen pt-16`}
      >
        <ToastProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <EmergencyButton />
        </ToastProvider>
        
        {/* Add a script to fix paths for assets */}
        <Script id="fix-paths">
          {`
            document.addEventListener('DOMContentLoaded', function() {
              // Fix paths for images
              const basePath = '${basePath}';
              const images = document.querySelectorAll('img[src^="/"]');
              images.forEach(img => {
                const src = img.getAttribute('src');
                if (src && !src.startsWith(basePath) && !src.startsWith('http')) {
                  img.setAttribute('src', basePath + src);
                }
              });
            });
          `}
        </Script>
      </body>
    </html>
  );
}
