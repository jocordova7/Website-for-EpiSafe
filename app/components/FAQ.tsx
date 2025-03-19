'use client';

import { useState } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: 'technology' | 'usage' | 'medical' | 'subscription';
}

export default function FAQ() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: "How does the seizure detection technology work?",
      answer: "Our technology uses advanced sensors in wearable devices to continuously monitor physiological signals including electrodermal activity (EDA), motion patterns, and heart rate. These sensors detect the subtle changes that occur during a seizure. Machine learning algorithms analyze these patterns in real-time to identify seizure activity with high accuracy and minimize false alarms.",
      category: 'technology'
    },
    {
      id: 2,
      question: "What types of seizures can the device detect?",
      answer: "The device is primarily designed to detect generalized tonic-clonic seizures, which involve convulsions and loss of consciousness. It can also detect some focal seizures with motor symptoms. It may not reliably detect absence seizures, myoclonic seizures, or seizures without motor symptoms. Our ongoing research aims to improve detection capabilities for a wider range of seizure types.",
      category: 'medical'
    },
    {
      id: 3,
      question: "Is the device FDA-cleared?",
      answer: "Yes, our seizure detection devices have received FDA clearance as medical devices for epilepsy monitoring. They meet all regulatory requirements for safety and effectiveness. The devices are also CE marked for use in Europe and approved by regulatory bodies in multiple countries worldwide.",
      category: 'medical'
    },
    {
      id: 4,
      question: "How accurate is the seizure detection?",
      answer: "Clinical studies have shown our devices achieve greater than 90% sensitivity in detecting generalized tonic-clonic seizures. The false alarm rate is typically less than 1-2 per day, and ongoing algorithm improvements continue to enhance accuracy. Individual results may vary based on seizure types and patterns.",
      category: 'technology'
    },
    {
      id: 5,
      question: "Will the watch work with my smartphone?",
      answer: "Our devices are compatible with both iOS (iPhone 6S and above with iOS 12+) and Android (version 8.0+) smartphones. The companion app requires Bluetooth connectivity and internet access for full functionality. Device compatibility is regularly updated to support newer smartphone models.",
      category: 'technology'
    },
    {
      id: 6,
      question: "How long does the battery last?",
      answer: "Battery life depends on the specific device model. The Embrace2 typically lasts 48 hours on a single charge, while the Empatica E4 lasts approximately 24 hours with continuous monitoring. Charging time is about 2 hours for a full charge. We recommend charging your device daily during periods when seizures are less likely to occur, such as during sedentary activities.",
      category: 'usage'
    },
    {
      id: 7,
      question: "Can I wear the device while showering or swimming?",
      answer: "The Embrace2 is water-resistant (IPX7 rated) and can be worn in the shower or during brief immersion in water up to 1 meter deep for 30 minutes. The Empatica E4 is splash-resistant but should not be submerged. Neither device is recommended for swimming or prolonged water exposure. Always follow the specific care instructions for your device model.",
      category: 'usage'
    },
    {
      id: 8,
      question: "How do I set up emergency contacts?",
      answer: "Emergency contacts can be set up through the companion smartphone app. You can add multiple contacts who will receive alerts via phone call, SMS, or app notification when a seizure is detected. Each contact can customize their notification preferences. We recommend adding at least 3 emergency contacts to ensure someone is available to respond when needed.",
      category: 'usage'
    },
    {
      id: 9,
      question: "Can my doctor access the seizure data?",
      answer: "Yes, with your permission, your healthcare provider can access your seizure data through our secure healthcare portal. The system generates detailed reports including seizure frequency, duration, time of day patterns, and physiological data. These reports can help your medical team make more informed treatment decisions and track your response to medications or other interventions.",
      category: 'medical'
    },
    {
      id: 10,
      question: "What is the subscription cost?",
      answer: "Our monitoring service requires a subscription that includes alert services, data storage, and access to the companion app. Monthly plans start at $9.90/month, while annual plans offer savings at $99/year. Discounts are available for families managing multiple devices. Some insurance providers offer partial or full coverage - we recommend checking with your insurance provider about eligibility.",
      category: 'subscription'
    },
    {
      id: 11,
      question: "Does insurance cover the device or subscription?",
      answer: "Many insurance providers now cover seizure detection devices and monitoring services as durable medical equipment. Coverage varies by provider and plan. We can provide documentation and assistance for insurance claims. Some patients may also qualify for coverage through Medicaid, Medicare, or private foundations supporting epilepsy management. Contact our support team for guidance specific to your situation.",
      category: 'subscription'
    },
    {
      id: 12,
      question: "What happens if a seizure is detected?",
      answer: "When a seizure is detected, the system sends immediate alerts to designated caregivers through the methods they've selected (calls, SMS, app notifications). The alert includes the user's GPS location to help responders find them quickly. The system also logs the event with detailed data for later review. If enabled, the REST API can trigger smart home integrations like turning on lights or unlocking doors.",
      category: 'usage'
    }
  ];
  
  const toggleItem = (id: number) => {
    setActiveId(prevId => (prevId === id ? null : id));
  };
  
  const filterByCategory = (category: string) => {
    setActiveCategory(category);
  };
  
  const filteredFAQs = activeCategory === 'all' 
    ? faqItems 
    : faqItems.filter(item => item.category === activeCategory);

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="max-w-3xl mx-auto text-[#6B7280] dark:text-gray-300">
            Get answers to common questions about our seizure detection technology, 
            usage, medical applications, and subscription details.
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button 
            onClick={() => filterByCategory('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === 'all'
                ? 'bg-[#00A878] text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-[#4B5563] dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            All Questions
          </button>
          <button 
            onClick={() => filterByCategory('technology')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === 'technology'
                ? 'bg-[#00A878] text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-[#4B5563] dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            Technology
          </button>
          <button 
            onClick={() => filterByCategory('usage')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === 'usage'
                ? 'bg-[#00A878] text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-[#4B5563] dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            Usage & Care
          </button>
          <button 
            onClick={() => filterByCategory('medical')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === 'medical'
                ? 'bg-[#00A878] text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-[#4B5563] dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            Medical
          </button>
          <button 
            onClick={() => filterByCategory('subscription')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === 'subscription'
                ? 'bg-[#00A878] text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-[#4B5563] dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            Subscription
          </button>
        </div>
        
        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto divide-y divide-gray-200 dark:divide-gray-700">
          {filteredFAQs.map((item) => (
            <div key={item.id} className="py-5">
              <button
                onClick={() => toggleItem(item.id)}
                className="flex justify-between items-start w-full text-left focus:outline-none"
                aria-expanded={activeId === item.id}
                aria-controls={`faq-answer-${item.id}`}
              >
                <span className="text-lg font-medium text-[#2C3E50] dark:text-white">
                  {item.question}
                </span>
                <span className="ml-6 flex-shrink-0">
                  <svg
                    className={`w-6 h-6 text-[#00A878] transform ${activeId === item.id ? 'rotate-180' : ''} transition-transform duration-200`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <div
                id={`faq-answer-${item.id}`}
                className={`mt-2 ${activeId === item.id ? 'block' : 'hidden'}`}
                aria-hidden={activeId !== item.id}
              >
                <p className="text-base text-[#6B7280] dark:text-gray-300 pl-0 md:pl-6">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Support Info */}
        <div className="mt-16 bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg text-center max-w-xl mx-auto">
          <h3 className="text-xl font-semibold text-[#2C3E50] dark:text-white mb-4">
            Still have questions?
          </h3>
          <p className="text-[#6B7280] dark:text-gray-300 mb-6">
            Our support team is available 24/7 to assist with any questions about our seizure detection devices and services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#00A878] hover:bg-[#008F63] transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Support
            </a>
            <a
              href="#resources"
              className="inline-flex items-center justify-center px-5 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-[#4B5563] dark:text-white bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              View Resources
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 