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
  title: "SeizureGuard - Advanced Seizure Detection for Wearables",
  description: "Professional and accessible seizure detection application for android wearables providing real-time alerts and monitoring.",
  keywords: "seizure detection, epilepsy monitoring, wearable technology, healthcare app, real-time alerts",
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
