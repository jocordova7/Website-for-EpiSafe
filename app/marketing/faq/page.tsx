'use client';

import React, { useState } from 'react';

export default function FAQ() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqs = [
    {
      question: 'What is EpiSave?',
      answer: 'EpiSave is an Android smartwatch application designed to detect seizures and alert caregivers in real-time.'
    },
    {
      question: 'Which Android smartwatches are compatible with EpiSave?',
      answer: 'Content will be added here about compatible devices.'
    },
    {
      question: 'How does EpiSave detect seizures?',
      answer: 'Content will be added here about the seizure detection technology.'
    },
    {
      question: 'Is EpiSave a medical device?',
      answer: 'EpiSave is not a medical device and should not replace professional medical advice or treatment. It is an assistive tool designed to complement existing care plans.'
    },
    {
      question: 'How do I set up caregiver alerts?',
      answer: 'Content will be added here about setting up alerts for caregivers.'
    }
  ];

  return (
    <div className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600">
            Find answers to common questions about EpiSave and seizure monitoring.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="flex justify-between items-center w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-all"
                onClick={() => toggleQuestion(index)}
              >
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                <svg
                  className={`h-5 w-5 text-gray-500 transform ${openQuestion === index ? 'rotate-180' : ''} transition-transform`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div 
                className={`px-6 py-4 bg-gray-50 ${openQuestion === index ? 'block' : 'hidden'}`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 