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
      title: "Data Collection",
      description: "The SeizureGuard smartwatch continuously monitors multiple physiological signals including electrodermal activity (EDA), heart rate variability, temperature, and three-axis acceleration to detect motion patterns. These sensors collect data hundreds of times per second, creating a comprehensive physiological profile.",
      image: "/tech-data-collection.jpg"
    },
    {
      id: 2,
      title: "Signal Processing",
      description: "The raw sensor data is processed using advanced signal processing techniques to filter noise and extract meaningful features. Our algorithms identify specific patterns in these signals that correlate with seizure activity, such as sudden changes in heart rate, distinctive movement patterns, and the characteristic surge in electrodermal activity that occurs during convulsive seizures.",
      image: "/tech-signal-processing.jpg"
    },
    {
      id: 3,
      title: "Machine Learning Analysis",
      description: "Our proprietary machine learning algorithms, trained on extensive datasets of seizure events, analyze the processed signals in real-time. These algorithms can distinguish between normal activities (like exercise or sleep) and actual seizures by recognizing complex patterns across multiple biosignals simultaneously. The models are continuously improved as more data is collected.",
      image: "/tech-machine-learning.jpg"
    },
    {
      id: 4,
      title: "Seizure Detection",
      description: "When the algorithm identifies a pattern consistent with seizure activity, it triggers the detection system. The threshold for detection is carefully calibrated to maximize sensitivity (detecting actual seizures) while minimizing false alarms. The SeizureGuard technology achieves greater than 90% sensitivity for generalized tonic-clonic seizures in clinical studies.",
      image: "/tech-seizure-detection.jpg"
    },
    {
      id: 5,
      title: "Alert System",
      description: "Upon detecting a seizure, the smartwatch connects via Bluetooth to the user's smartphone, which immediately sends alerts to designated caregivers through multiple channels (calls, SMS, app notifications). The alerts include the user's GPS location and a timestamp of the event. The system is designed with redundancy to ensure alerts reach caregivers even if certain communication channels fail.",
      image: "/tech-alert-system.jpg"
    },
    {
      id: 6,
      title: "Data Analysis & Reporting",
      description: "Every detected seizure and the corresponding physiological data are securely stored for later review. The SeizureGuard smartphone app and web portal provide comprehensive reports showing seizure frequency, duration, time patterns, and potential correlations with other factors like sleep or medication changes. This data helps healthcare providers make more informed treatment decisions.",
      image: "/tech-data-analysis.jpg"
    }
  ];
  
  const setActiveStep = (id: number) => {
    setActiveStepId(id);
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="section-title">How Our Technology Works</h2>
          <p className="max-w-3xl mx-auto text-[#6B7280] dark:text-gray-300">
            The SeizureGuard app uses advanced seizure detection technology with multiple biosensors and 
            proprietary algorithms to provide accurate and timely seizure alerts.
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
                Key Performance Metrics
              </h3>
              <ul className="space-y-2 text-[#6B7280] dark:text-gray-300">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#00A878] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>93% sensitivity for generalized tonic-clonic seizures</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#00A878] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Average alert time under 20 seconds after seizure onset</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#00A878] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Less than 0.2 false alarms per day on average</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#00A878] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Battery life up to 48 hours of continuous monitoring</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Certifications and Partners */}
        <div className="mt-20 text-center">
          <h3 className="text-xl font-semibold text-[#2C3E50] dark:text-white mb-6">
            Clinically Validated & Certified
          </h3>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 mb-3 relative">
                <Image
                  src="/certification-fda.jpg"
                  alt="FDA Cleared"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-sm text-[#6B7280] dark:text-gray-300">FDA Cleared</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 mb-3 relative">
                <Image
                  src="/certification-ce.jpg"
                  alt="CE Mark"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-sm text-[#6B7280] dark:text-gray-300">CE Mark</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 mb-3 relative">
                <Image
                  src="/certification-hipaa.jpg"
                  alt="HIPAA Compliant"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-sm text-[#6B7280] dark:text-gray-300">HIPAA Compliant</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 mb-3 relative">
                <Image
                  src="/certification-iso.jpg"
                  alt="ISO 13485"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-sm text-[#6B7280] dark:text-gray-300">ISO 13485</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 