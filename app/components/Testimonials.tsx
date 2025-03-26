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
      name: "Melissa Thompson",
      role: "Mother of Jake, 14",
      relationship: "caregiver",
      quote: "EpiSave on my son's Android smartwatch has been a game-changer for our family. I receive immediate alerts when Jake has a seizure, even when he's at school or with friends. The peace of mind is invaluable.",
      image: "/testimonial-mother.jpg",
      story: "When Jake was diagnosed with epilepsy at age 11, I was constantly worried about him having seizures when I wasn't around. His school couldn't provide one-on-one monitoring, and we couldn't afford specialized medical devices. Finding EpiSave was a blessing—it works perfectly with his affordable Android smartwatch. During a field trip last year, EpiSave detected a seizure and alerted both me and his teacher. I arrived at the hospital before the ambulance did! Jake loves that it looks like a normal smartwatch, and I love that I can check the app anytime to see he's okay. It's given him independence while giving me peace of mind."
    },
    {
      id: 2,
      name: "Dr. Anita Patel",
      role: "Neurologist",
      relationship: "healthcare",
      quote: "I recommend EpiSave to many of my patients who use Android devices. The data it provides helps me track seizure patterns and adjust treatments accordingly. It's a practical, affordable solution for daily monitoring.",
      image: "/testimonial-doctor.jpg",
      story: "As a neurologist specializing in epilepsy, I've seen how challenging it can be for patients to accurately track their seizures and identify triggers. EpiSave addresses this problem brilliantly for Android users. The detailed reports show seizure frequency, duration, and even potential correlations with sleep, activity, and stress levels. One of my patients experienced a significant reduction in seizures after we identified a connection between seizures and her sleep patterns through EpiSave data. For medical professionals, it provides objective information that complements patient reports, leading to more personalized and effective treatment plans. The affordability of the Android platform makes this technology accessible to many more of my patients than previous solutions."
    },
    {
      id: 3,
      name: "Marcus Wilson",
      role: "Living with epilepsy for 10 years",
      relationship: "patient",
      quote: "After trying various monitoring devices, EpiSave on my Samsung Galaxy Watch has been the most reliable. It's discreet, comfortable for all-day wear, and the battery lasts through my workday. Most importantly, it gives me the confidence to live independently.",
      image: "/testimonial-patient.jpg",
      story: "Epilepsy took away my confidence to do everyday things most people take for granted. I was afraid to use public transportation, go hiking with friends, or even stay home alone. Since installing EpiSave on my Galaxy Watch, I've regained much of my independence. The watch detected a major seizure while I was grocery shopping last year, immediately alerting my brother who arrived within minutes. The store staff told me they wouldn't have recognized it as a seizure without the alert. I particularly appreciate how seamlessly EpiSave works with other Android apps I use daily. The interface is intuitive, and I can easily share my seizure history with my neurologist through the app. It's not just the seizure detection that's helpful—the daily health insights have helped me identify that stress and poor sleep often trigger my episodes."
    },
    {
      id: 4,
      name: "Sophia Rodriguez",
      role: "College student",
      relationship: "patient",
      quote: "My Android smartwatch with EpiSave helps me navigate college life with epilepsy. It's affordable on a student budget and connects with my roommates' phones so they're notified if I need help. I can focus on my studies instead of my condition.",
      image: "/testimonial-student.jpg",
      story: "Being a first-year student is stressful enough without managing epilepsy. EpiSave on my TicWatch has made the transition so much easier. During orientation week, I was able to share my condition with my roommates and quickly set them up as emergency contacts in the EpiSave app. The app's educational resources helped me explain to them what to do if I have a seizure. Three months into the semester, EpiSave detected a seizure while I was studying in my dorm room and immediately alerted my roommate who was just down the hall. The automatic GPS feature meant she found me right away, even though I had wandered into the bathroom during the preictal phase. I've also been using the seizure diary to discover that my seizures often coincide with all-nighters before exams, which has helped me develop better study habits. As a student on a tight budget, the affordability of using EpiSave with my existing Android watch instead of purchasing a specialized medical device has been a huge plus."
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
    <section id="testimonials" className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="section-title">Real Stories from EpiSave Users</h2>
          <p className="max-w-3xl mx-auto text-[#6B7280] dark:text-gray-300">
            Discover how EpiSave for Android wearables is transforming lives 
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
            <p className="text-[#00A878] text-4xl font-bold mb-2">10,000+</p>
            <p className="text-[#6B7280] dark:text-gray-300">Android Users</p>
          </div>
          <div>
            <p className="text-[#00A878] text-4xl font-bold mb-2">97%</p>
            <p className="text-[#6B7280] dark:text-gray-300">User Satisfaction</p>
          </div>
          <div>
            <p className="text-[#00A878] text-4xl font-bold mb-2">85%</p>
            <p className="text-[#6B7280] dark:text-gray-300">Detection Accuracy</p>
          </div>
          <div>
            <p className="text-[#00A878] text-4xl font-bold mb-2">30+</p>
            <p className="text-[#6B7280] dark:text-gray-300">Compatible Watches</p>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-[#2C3E50] dark:text-white mb-4">
            Join Our Growing Community
          </h3>
          <p className="max-w-2xl mx-auto text-[#6B7280] dark:text-gray-300 mb-8">
            Experience the peace of mind that comes with EpiSave on your Android smartwatch.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#download" 
              className="btn-primary"
            >
              Download EpiSave
            </a>
            <a 
              href="#faqs" 
              className="btn-secondary"
            >
              Learn More
            </a>
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
              
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>{selectedStory.story}</p>
              </div>
              
              <div className="mt-8 flex justify-end">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-[#4B5563] dark:text-gray-300 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
} 