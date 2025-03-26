'use client';

import { useState } from 'react';
import Image from 'next/image';

interface TechStep {
  id: number;
  title: string;
  description: string;
  image: string;
}

export default function TechnologyExplainer() {
  const [activeStepId, setActiveStepId] = useState(1);
  
  const techSteps: TechStep[] = [
    {
      id: 1,
      title: "Android Smartwatch Sensors",
      description: "EpiSave leverages the built-in sensors in your Android smartwatch, including accelerometers, gyroscopes, and heart rate monitors, to detect motion patterns and physiological changes. The app intelligently optimizes sensor usage to balance accuracy with battery life, enabling all-day monitoring without excessive drain.",
      image: "/tech-android-sensors.jpg"
    },
    {
      id: 2,
      title: "Real-Time Analysis",
      description: "EpiSave continuously analyzes sensor data directly on your Android device. Our lightweight algorithms are specially optimized for Android's processing capabilities, ensuring efficient performance even on older smartwatch models. This on-device processing means your watch can detect seizure patterns even when temporarily disconnected from your phone.",
      image: "/tech-real-time-analysis.jpg"
    },
    {
      id: 3,
      title: "Machine Learning Detection",
      description: "Our Android-optimized machine learning algorithms have been trained on thousands of seizure events to recognize the unique motion and physiological patterns that occur during different types of seizures. The algorithms are designed to distinguish between normal activities (like exercise or sleep) and actual seizure movements.",
      image: "/tech-machine-learning.jpg"
    },
    {
      id: 4,
      title: "Android Wear OS Integration",
      description: "EpiSave is seamlessly integrated with Android's Wear OS platform, providing intuitive notifications and vibration feedback directly on your wrist. The watch interface is designed to be easily accessible during a pre-seizure aura, allowing users to quickly confirm or cancel alerts before they're sent to caregivers.",
      image: "/tech-wear-os.jpg"
    },
    {
      id: 5,
      title: "Multi-Channel Alerts",
      description: "When a seizure is detected, EpiSave uses Android's robust notification system to alert caregivers through multiple channels. The app sends SMS messages, app notifications, and can even initiate phone calls with automated messages. The alert includes your GPS location from your Android device for quick locating in emergencies.",
      image: "/tech-android-alerts.jpg"
    },
    {
      id: 6,
      title: "Android Health Integration",
      description: "EpiSave works with Google Fit and other Android health platforms to provide a comprehensive view of your health. By correlating seizure events with sleep quality, activity levels, and other health metrics, you can identify potential triggers and share more complete information with your healthcare providers.",
      image: "/tech-health-integration.jpg"
    }
  ];
  
  const setActiveStep = (id: number) => {
    setActiveStepId(id);
  };

  return (
    <section id="how-it-works" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="section-title">EpiSave Technology</h2>
          <p className="max-w-3xl mx-auto text-[#6B7280] dark:text-gray-300">
            Discover how EpiSave transforms your Android smartwatch into a 
            powerful seizure detection device using advanced technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Visualization */}
          <div className="order-2 lg:order-1">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl mb-6">
              <Image
                src={techSteps.find(step => step.id === activeStepId)?.image || "/tech-placeholder.jpg"}
                alt={techSteps.find(step => step.id === activeStepId)?.title || "Technology visualization"}
                fill
                className="object-cover transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl font-bold mb-2">
                  {activeStepId}. {techSteps.find(step => step.id === activeStepId)?.title}
                </h3>
                <p className="text-sm text-gray-200">
                  {techSteps.find(step => step.id === activeStepId)?.description}
                </p>
              </div>
            </div>
            
            <div className="flex justify-between">
              <button 
                onClick={() => setActiveStep(Math.max(1, activeStepId - 1))}
                disabled={activeStepId === 1}
                className={`p-2 rounded-full ${
                  activeStepId === 1 
                    ? 'text-gray-400 cursor-not-allowed' 
                    : 'text-[#00A878] hover:bg-[#E6F7F3] dark:hover:bg-[#1A2F26]'
                } transition-colors`}
                aria-label="Previous step"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button 
                onClick={() => setActiveStep(Math.min(techSteps.length, activeStepId + 1))}
                disabled={activeStepId === techSteps.length}
                className={`p-2 rounded-full ${
                  activeStepId === techSteps.length 
                    ? 'text-gray-400 cursor-not-allowed' 
                    : 'text-[#00A878] hover:bg-[#E6F7F3] dark:hover:bg-[#1A2F26]'
                } transition-colors`}
                aria-label="Next step"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Step Navigation */}
          <div className="order-1 lg:order-2">
            <div className="space-y-4">
              {techSteps.map((step) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`w-full text-left p-4 rounded-lg transition-colors ${
                    activeStepId === step.id
                      ? 'bg-[#E6F7F3] dark:bg-[#1A2F26] border-l-4 border-[#00A878]'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                  aria-pressed={activeStepId === step.id}
                >
                  <div className="flex items-center">
                    <span className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full mr-3 ${
                      activeStepId === step.id
                        ? 'bg-[#00A878] text-white'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                    }`}>
                      {step.id}
                    </span>
                    <h3 className={`font-medium ${
                      activeStepId === step.id
                        ? 'text-[#2C3E50] dark:text-white'
                        : 'text-gray-700 dark:text-gray-300'
                    }`}>
                      {step.title}
                    </h3>
                  </div>
                  
                  <p className={`mt-2 text-sm ${
                    activeStepId === step.id
                      ? 'block text-[#6B7280] dark:text-gray-300'
                      : 'hidden'
                  }`}>
                    {step.description}
                  </p>
                </button>
              ))}
            </div>
            
            <div className="mt-8 bg-[#F9FAFB] dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-medium text-[#2C3E50] dark:text-white mb-3">
                Android Advantages
              </h3>
              <ul className="space-y-2 text-[#6B7280] dark:text-gray-300">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#00A878] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Works with a wide range of affordable Android smartwatches</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#00A878] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Seamless integration with Android's notification system</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#00A878] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Battery-optimized for all-day monitoring</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#00A878] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Frequent updates through Google Play Store</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Compatible Devices */}
        <div className="mt-20 text-center">
          <h3 className="text-xl font-semibold text-[#2C3E50] dark:text-white mb-6">
            Compatible with Popular Android Smartwatches
          </h3>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 mb-3 relative">
                <Image
                  src="/device-samsung.jpg"
                  alt="Samsung Galaxy Watch"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-sm text-[#6B7280] dark:text-gray-300">Samsung Galaxy Watch</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 mb-3 relative">
                <Image
                  src="/device-fossil.jpg"
                  alt="Fossil Gen 6"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-sm text-[#6B7280] dark:text-gray-300">Fossil Gen 6</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 mb-3 relative">
                <Image
                  src="/device-ticwatch.jpg"
                  alt="TicWatch Pro"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-sm text-[#6B7280] dark:text-gray-300">TicWatch Pro</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 mb-3 relative">
                <Image
                  src="/device-pixel.jpg"
                  alt="Google Pixel Watch"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-sm text-[#6B7280] dark:text-gray-300">Google Pixel Watch</span>
            </div>
          </div>
          
          <div className="mt-12">
            <a 
              href="#download" 
              className="btn-primary inline-flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0007.5511-.4482.9997-.9993.9997zm-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0007.5511-.4482.9997-.9993.9997z"/>
                <path d="M6.27 7.08l4.15 7.2c.82 1.42 1.18 2.05 1.83 2.05.65 0 1.03-.65 1.76-1.94l4.4-7.31H6.27z"/>
              </svg>
              Get EpiSave on Google Play
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 