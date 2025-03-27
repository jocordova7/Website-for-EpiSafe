import React from 'react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import "./globals.css";

// Dynamically import components with no SSR
const Navbar = dynamic(() => import('./components/layout/Navbar'), { ssr: false });
const Footer = dynamic(() => import('./components/layout/Footer'), { ssr: false });
const EmergencyButton = dynamic(() => import('./components/ui/EmergencyButton'), { ssr: false });
const ToastProvider = dynamic(
  () => import('./context/ToastContext').then(mod => ({ default: mod.ToastProvider })),
  { ssr: false }
);

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "EpiSave - Advanced Seizure Detection for Android Wearables",
  description: "Reliable, life-improving seizure detection solution for Android smartwatches providing real-time alerts and peace of mind for patients and caregivers.",
  keywords: "seizure detection, epilepsy monitoring, android wearables, smartwatch, healthcare app, real-time alerts",
};

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
