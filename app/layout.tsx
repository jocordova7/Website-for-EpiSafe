'use client';

import React from 'react';
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
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
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} antialiased bg-gray-50 dark:bg-gray-900 min-h-screen pt-16`}
      >
        <ToastProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <EmergencyButton />
        </ToastProvider>
      </body>
    </html>
  );
}
