'use client';

import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          Welcome to EpiSave
        </h1>
        <p className="text-xl text-center mb-8">
          Your trusted companion for seizure monitoring
        </p>
        <div className="flex justify-center">
          <a
            href="/monitoring"
            className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all"
          >
            Get Started
          </a>
        </div>
      </div>
    </main>
  );
} 