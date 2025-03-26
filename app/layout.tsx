import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import EmergencyButton from "./components/EmergencyButton";
import { ToastProvider } from './context/ToastContext';

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
          {children}
          <EmergencyButton />
        </ToastProvider>
      </body>
    </html>
  );
}
