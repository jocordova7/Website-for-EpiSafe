'use client';

import { useState } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: 'technology' | 'usage' | 'android' | 'support';
}

export default function FAQ() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: "How does EpiSave detect seizures?",
      answer: "EpiSave utilizes the sensors in your Android smartwatch to monitor motion patterns, heart rate, and other biometrics. Our proprietary algorithm analyzes these signals in real-time to identify seizure-like activity with high accuracy while minimizing false alarms.",
      category: 'technology'
    },
    {
      id: 2,
      question: "Which Android smartwatches are compatible with EpiSave?",
      answer: "EpiSave is compatible with most Android smartwatches running Wear OS 2.0 or higher. This includes devices from Samsung, Fossil, Mobvoi TicWatch, and many others. For the best experience, we recommend watches with heart rate monitoring and accelerometer sensors.",
      category: 'android'
    },
    {
      id: 3,
      question: "Is EpiSave a medical device?",
      answer: "EpiSave is designed as an assistive tool to help detect potential seizure activity, but it is not a replacement for medical supervision or treatment. While our technology is based on scientific research, EpiSave should be used as part of a comprehensive epilepsy management plan developed with healthcare professionals.",
      category: 'support'
    },
    {
      id: 4,
      question: "How accurate is EpiSave's seizure detection?",
      answer: "Our internal testing shows EpiSave can detect generalized tonic-clonic seizures with approximately 85-90% accuracy. The system is continuously improving through machine learning. However, no detection system is perfect, and EpiSave should be used as a supportive tool, not as the sole means of seizure monitoring.",
      category: 'technology'
    },
    {
      id: 5,
      question: "What Android version does my phone need to use EpiSave?",
      answer: "EpiSave requires Android 8.0 (Oreo) or higher on your smartphone. The app is optimized for the latest Android versions and receives regular updates to maintain compatibility and add new features.",
      category: 'android'
    },
    {
      id: 6,
      question: "How does EpiSave affect my smartwatch battery life?",
      answer: "EpiSave is designed to be battery-efficient, but continuous monitoring will impact battery life. Most users report their smartwatch lasting 12-18 hours with EpiSave running, depending on the watch model and other apps in use. We recommend charging your watch nightly.",
      category: 'usage'
    },
    {
      id: 7,
      question: "Is EpiSave water-resistant? Can I wear it while swimming?",
      answer: "EpiSave is software that runs on your smartwatch, so water resistance depends on your specific watch model. While many Android smartwatches are water-resistant, we don't recommend swimming with EpiSave as movement patterns in water may affect detection accuracy.",
      category: 'usage'
    },
    {
      id: 8,
      question: "How do I set up caregiver alerts?",
      answer: "In the EpiSave app, navigate to 'Alert Settings' and add your caregivers' contact information. Caregivers will receive an invitation to download the companion app. You can customize alert types (call, SMS, app notification) and set up multiple caregivers to ensure someone is always available to respond.",
      category: 'usage'
    },
    {
      id: 9,
      question: "Can I share my seizure history with my doctor?",
      answer: "Yes! EpiSave generates detailed reports of detected events that you can easily share with healthcare providers. From the app, go to 'History,' select the date range, and use the 'Share' option to export a PDF report or grant your doctor direct access through our secure portal.",
      category: 'support'
    },
    {
      id: 10,
      question: "Is there a subscription fee for EpiSave?",
      answer: "EpiSave operates on a freemium model. Basic features are available for free, while our Premium plan ($7.99/month or $79.99/year) unlocks advanced features like unlimited caregiver alerts, detailed seizure analytics, and cloud storage of your seizure history.",
      category: 'support'
    },
    {
      id: 11,
      question: "How is my data protected?",
      answer: "We take your privacy seriously. All data is encrypted both in transit and at rest. We comply with HIPAA and GDPR requirements for health data protection. You maintain ownership of your data, and we never share it with third parties without your explicit consent.",
      category: 'technology'
    },
    {
      id: 12,
      question: "What if I don't have an Android device?",
      answer: "Currently, EpiSave is only available for Android smartwatches and phones. We're actively exploring options to expand to other platforms in the future. Sign up for our newsletter to be notified when EpiSave becomes available for your device.",
      category: 'android'
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
    <section id="faqs" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="max-w-3xl mx-auto text-[#6B7280] dark:text-gray-300">
            Get answers to common questions about EpiSave for Android wearables, 
            from device compatibility to usage tips.
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
            onClick={() => filterByCategory('android')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === 'android'
                ? 'bg-[#00A878] text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-[#4B5563] dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            Android Compatibility
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
            onClick={() => filterByCategory('support')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === 'support'
                ? 'bg-[#00A878] text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-[#4B5563] dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            Support
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
            Have more questions about EpiSave?
          </h3>
          <p className="text-[#6B7280] dark:text-gray-300 mb-6">
            Our support team is here to help you get the most out of EpiSave on your Android device.
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
              href="#download"
              className="inline-flex items-center justify-center px-5 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-[#4B5563] dark:text-white bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0007.5511-.4482.9997-.9993.9997zm-11.046 0c-.5511 0-.9993-.4486-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0007.5511-.4482.9997-.9993.9997z" />
                <path d="M6.27 7.08l4.15 7.2c.82 1.42 1.18 2.05 1.83 2.05.65 0 1.03-.65 1.76-1.94l4.4-7.31H6.27z" />
              </svg>
              Get EpiSave
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 