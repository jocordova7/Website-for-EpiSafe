'use client';

import React from 'react';

export default function OnboardingPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Welcome to SeizureGuard</h1>
      <p className="mb-4">
        Thank you for choosing SeizureGuard. Let's get you set up with your wearable device and monitoring preferences.
      </p>
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Onboarding Process</h2>
        <p>This page will guide you through the process of:</p>
        <ul className="list-disc ml-6 mt-2 space-y-2">
          <li>Connecting your wearable device</li>
          <li>Setting up emergency contacts</li>
          <li>Configuring alert preferences</li>
          <li>Completing your medical profile</li>
        </ul>
      </div>
    </div>
  );
} 