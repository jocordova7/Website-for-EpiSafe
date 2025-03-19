'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  relationship: 'patient' | 'caregiver' | 'healthcare';
  quote: string;
  image: string;
  story?: string;
}

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedStory, setSelectedStory] = useState<Testimonial | null>(null);
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Mother of Alex, 12",
      relationship: "caregiver",
      quote: "The alerts have been life-changing for our family. Before using Embrace2, we had to check on Alex multiple times each night. Now we can all sleep better knowing we'll be alerted if he has a seizure.",
      image: "/testimonial-sarah.jpg",
      story: "Our son Alex was diagnosed with epilepsy at age 7. His seizures often occurred at night, leaving us exhausted from constant checking and worry. The first night Alex wore his Embrace2, it detected a seizure we would have missed, allowing us to provide immediate care. Since then, the device has given our entire family peace of mind and better quality of life. Alex also loves that the watch looks like a normal smartwatch, unlike other medical devices that made him feel different from his peers."
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      role: "Neurologist",
      relationship: "healthcare",
      quote: "As a neurologist, I've seen how Empatica's devices have transformed epilepsy management. The objective data helps me make better treatment decisions, and my patients report feeling more secure in their daily lives.",
      image: "/testimonial-doctor.jpg",
      story: "I've prescribed Empatica devices to over 50 patients in my practice. The accuracy of seizure detection and the quality of the data has significantly improved my ability to provide personalized care. The detailed seizure logs and physiological data help me track medication effectiveness and make adjustments with greater precision. My patients consistently report that the devices have reduced anxiety about having undetected seizures, which has led to improved quality of life and better adherence to treatment plans."
    },
    {
      id: 3,
      name: "James Wilson",
      role: "Living with epilepsy for 15 years",
      relationship: "patient",
      quote: "After years of unpredictable seizures affecting my career and relationships, this technology has given me back my independence. My colleagues and family receive alerts when I need help, and the data helps my doctor optimize my treatment.",
      image: "/testimonial-james.jpg",
      story: "I was forced to quit my job as a software engineer after a seizure at work led to a serious injury. My seizures were unpredictable and often occurred without warning, making it dangerous for me to be alone. Since I started wearing the Embrace2, I've been able to return to full-time work, live independently, and even travel alone again. The device detected a major seizure during a business trip and automatically alerted both local emergency services and my emergency contacts. This quick response prevented complications and gave me confidence to continue pursuing my career goals."
    },
    {
      id: 4,
      name: "Emma Rodriguez",
      role: "College student",
      relationship: "patient",
      quote: "Starting college with epilepsy was terrifying until I got my Embrace2. It alerts my roommate if I have a seizure, and the app helps me track potential triggers like missed sleep or stress during exams.",
      image: "/testimonial-emma.jpg",
      story: "When I left home for college, both my parents and I were incredibly anxious about how I would manage my epilepsy on my own. The Embrace2 has been my constant companion, giving me the freedom to have a normal college experience while maintaining peace of mind. During freshman year, it detected a seizure while I was studying late in the library and alerted my designated contacts. A fellow student was able to help me until medical assistance arrived. I've also been using the seizure diary to identify patterns, which has helped me recognize that sleep deprivation and exam stress are major triggers for me."
    }
  ];
  
  const openStory = (testimonial: Testimonial) => {
    setSelectedStory(testimonial);
    setModalOpen(true);
  };
  
  const closeModal = () => {
    setModalOpen(false);
  };
  
  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  const goToTestimonial = (index: number) => {
    setActiveTestimonial(index);
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="section-title">Real Stories, Real Impact</h2>
          <p className="max-w-3xl mx-auto text-[#6B7280] dark:text-gray-300">
            Discover how our seizure detection technology is transforming lives 
            and providing peace of mind for patients and their loved ones.
          </p>
        </div>
        
        {/* Featured Testimonial */}
        <div className="bg-[#E6F7F3] dark:bg-[#1A2F26] rounded-2xl overflow-hidden shadow-xl mb-16">
          <div className="md:flex">
            <div className="md:w-1/2">
              <div className="relative h-64 md:h-full">
                <Image
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    testimonials[activeTestimonial].relationship === 'patient'
                      ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300'
                      : testimonials[activeTestimonial].relationship === 'caregiver'
                      ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300'
                      : 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300'
                  }`}>
                    {testimonials[activeTestimonial].relationship === 'patient'
                      ? 'Patient'
                      : testimonials[activeTestimonial].relationship === 'caregiver'
                      ? 'Caregiver'
                      : 'Healthcare Professional'}
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-between">
              <div>
                <blockquote className="text-xl text-[#2C3E50] dark:text-white italic mb-6">
                  "{testimonials[activeTestimonial].quote}"
                </blockquote>
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-[#2C3E50] dark:text-white">
                    {testimonials[activeTestimonial].name}
                  </h3>
                  <p className="text-[#6B7280] dark:text-gray-400">
                    {testimonials[activeTestimonial].role}
                  </p>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <button
                  onClick={() => openStory(testimonials[activeTestimonial])}
                  className="text-[#00A878] hover:text-[#008F63] font-medium inline-flex items-center"
                >
                  Read full story
                  <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
                
                <div className="flex items-center space-x-4">
                  <button
                    onClick={prevTestimonial}
                    className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <svg className="w-6 h-6 text-[#2C3E50] dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    aria-label="Next testimonial"
                  >
                    <svg className="w-6 h-6 text-[#2C3E50] dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Testimonial Navigation */}
        <div className="flex justify-center space-x-2 mb-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === activeTestimonial
                  ? 'bg-[#00A878]'
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
              aria-current={index === activeTestimonial ? 'true' : 'false'}
            ></button>
          ))}
        </div>
        
        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-16">
          <div>
            <p className="text-[#00A878] text-4xl font-bold mb-2">15,000+</p>
            <p className="text-[#6B7280] dark:text-gray-300">Active Users</p>
          </div>
          <div>
            <p className="text-[#00A878] text-4xl font-bold mb-2">98%</p>
            <p className="text-[#6B7280] dark:text-gray-300">User Satisfaction</p>
          </div>
          <div>
            <p className="text-[#00A878] text-4xl font-bold mb-2">93%</p>
            <p className="text-[#6B7280] dark:text-gray-300">Detection Accuracy</p>
          </div>
          <div>
            <p className="text-[#00A878] text-4xl font-bold mb-2">45</p>
            <p className="text-[#6B7280] dark:text-gray-300">Countries Worldwide</p>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-[#2C3E50] dark:text-white mb-4">
            Join Thousands of Satisfied Users
          </h3>
          <p className="max-w-2xl mx-auto text-[#6B7280] dark:text-gray-300 mb-8">
            Experience the peace of mind that comes with advanced seizure detection technology.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="btn-primary">
              Explore Devices
            </button>
            <button className="btn-secondary">
              Read More Stories
            </button>
          </div>
        </div>
      </div>
      
      {/* Full Story Modal */}
      {modalOpen && selectedStory && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#2C3E50] dark:text-white">
                    {selectedStory.name}'s Story
                  </h3>
                  <p className="text-[#6B7280] dark:text-gray-400">
                    {selectedStory.role}
                  </p>
                </div>
                <button 
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="relative h-64 rounded-lg overflow-hidden mb-6">
                <Image
                  src={selectedStory.image}
                  alt={selectedStory.name}
                  fill
                  className="object-cover"
                />
              </div>
              
              <blockquote className="text-lg italic text-[#2C3E50] dark:text-white mb-6 border-l-4 border-[#00A878] pl-4">
                "{selectedStory.quote}"
              </blockquote>
              
              <div className="text-[#6B7280] dark:text-gray-300 space-y-4">
                <p>{selectedStory.story}</p>
              </div>
            </div>
            
            <div className="p-6 border-t border-gray-200 dark:border-gray-700 flex justify-end">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-[#2C3E50] dark:text-white rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
} 