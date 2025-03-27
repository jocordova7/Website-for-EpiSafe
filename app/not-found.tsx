'use client';

import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h1 className="text-9xl font-bold text-gray-900">404</h1>
      <h2 className="mb-8 text-2xl font-medium text-gray-800">Page Not Found</h2>
      <p className="mb-8 text-gray-600 max-w-md">
        We couldn't find the page you're looking for. It might have been moved or doesn't exist.
      </p>
      <Link 
        href="/" 
        className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-all"
      >
        Return to Home
      </Link>
    </div>
  );
} 