'use client';

import Image from "next/image";
import Link from "next/link";
import ProductShowcase from "./components/ProductShowcase";
import Testimonials from "./components/Testimonials";
import ResearchEvidence from "./components/ResearchEvidence";
import FAQ from "./components/FAQ";
import TechnologyExplainer from "./components/TechnologyExplainer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-[#E6F7F3] dark:from-gray-900 dark:to-[#1A2F26] py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-10 lg:px-16 grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2C3E50] dark:text-white">
              Advanced Seizure
              <span className="text-[#00A878] dark:text-[#00A878]"> Detection</span> for Smartwatches
            </h1>
            <p className="text-lg text-[#6B7280] dark:text-gray-300">
              SeizureGuard provides real-time monitoring and alerts for epilepsy patients using advanced AI and smartwatch technology. Get peace of mind for yourself and your loved ones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="#features" 
                className="btn-primary text-center"
              >
                Explore Features
              </Link>
              <Link 
                href="#download" 
                className="btn-secondary text-center"
              >
                Download App
              </Link>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/hero-wearable.jpg"
              alt="Smart watch with seizure detection app"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <h2 className="section-title text-center">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              title="Real-time Monitoring"
              description="Advanced sensors continuously track vital signs and motion patterns to detect seizure activity."
              icon="monitor"
            />
            <FeatureCard 
              title="Instant Alerts"
              description="Immediate notifications to caregivers and family members when a seizure is detected."
              icon="alert"
            />
            <FeatureCard 
              title="Medical History"
              description="Comprehensive seizure logs and reports to share with healthcare providers."
              icon="medical"
            />
            <FeatureCard 
              title="Emergency Response"
              description="One-touch emergency calling to connect with emergency services or designated contacts."
              icon="emergency"
            />
            <FeatureCard 
              title="Secure Data"
              description="End-to-end encryption and HIPAA-compliant data storage for your privacy and security."
              icon="security"
            />
            <FeatureCard 
              title="Easy to Use"
              description="Intuitive interface designed for patients of all ages and their caregivers."
              icon="accessibility"
            />
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <ProductShowcase />

      {/* Technology Explainer */}
      <TechnologyExplainer />

      {/* Research Evidence */}
      <ResearchEvidence />

      {/* Enhanced Testimonials */}
      <Testimonials />

      {/* FAQ Component */}
      <FAQ />

      {/* Call to Action */}
      <section id="download" className="py-16 bg-[#00A878] dark:bg-[#008F63]">
        <div className="container mx-auto px-6 md:px-10 lg:px-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto mb-8">
            Download the SeizureGuard app today and experience advanced seizure detection and monitoring.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#" 
              className="bg-white hover:bg-gray-100 text-[#00A878] font-medium py-3 px-8 rounded-md transition-colors inline-flex items-center justify-center"
            >
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.6,11.8l-8-5C9.4,6.7,9,6.8,8.8,7.1C8.7,7.3,8.7,7.6,8.8,7.8l3,5.2l-3,5.2c-0.2,0.3-0.1,0.7,0.2,0.9 C9,19.1,9.1,19.1,9.2,19.1c0.2,0,0.4-0.1,0.5-0.2l8-5c0.2-0.1,0.3-0.4,0.3-0.6C17.9,12.1,17.8,11.9,17.6,11.8z"/>
                <path d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M12,20c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8 S16.4,20,12,20z"/>
              </svg>
              Download for Android
            </a>
            <a 
              href="#" 
              className="bg-white hover:bg-gray-100 text-[#00A878] font-medium py-3 px-8 rounded-md transition-colors inline-flex items-center justify-center"
            >
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.8,1.4C15.4,2.1,14,3,12.5,3c-1.3,0-2.7-0.8-4.1-1.4C7.2,1,5.9,0.5,4.7,0.5C4.1,0.5,3.5,0.6,3,0.9 C2.1,1.3,1.4,2.1,1,3C0.9,3.6,0.8,4.2,0.8,4.8c0,1.3,0.4,2.5,0.9,3.7c0.4,1,0.9,2,1.4,3c0.2,0.4,0.5,0.8,0.9,1.6 c0.7,1.2,1.3,2.4,2.2,3.3c0.6,0.6,1.3,1.2,2.1,1.5c0.6,0.2,1.2,0.4,1.8,0.2c0.4-0.1,0.9-0.4,1.3-0.7c0.3-0.3,0.6-0.5,0.9-0.6 c0.5-0.1,1.1,0.1,1.5,0.4c0.4,0.3,0.8,0.7,1.3,0.9c0.5,0.2,1.1,0.3,1.6,0.1c1-0.2,1.8-0.9,2.5-1.5c1-1,1.7-2.2,2.3-3.4 c0.4-0.7,0.7-1.3,0.9-1.6c0.2-0.3,0.3-0.5,0.5-0.8c0.6-1,1.1-2,1.4-3c0.4-1.1,0.7-2.4,0.7-3.6c0-1-0.2-2-0.7-2.8 c-0.4-0.7-1-1.3-1.7-1.6c-0.6-0.3-1.2-0.4-1.9-0.4C19.1,0.5,17.9,0.9,16.8,1.4z"/>
              </svg>
              Download for iOS
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

// Feature card component
function FeatureCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 flex flex-col h-full">
      <div className="mb-4">
        {icon === "monitor" && (
          <svg className="w-12 h-12 text-[#00A878]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        )}
        {icon === "alert" && (
          <svg className="w-12 h-12 text-[#00A878]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        )}
        {icon === "medical" && (
          <svg className="w-12 h-12 text-[#00A878]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
        )}
        {icon === "emergency" && (
          <svg className="w-12 h-12 text-[#00A878]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        )}
        {icon === "security" && (
          <svg className="w-12 h-12 text-[#00A878]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        )}
        {icon === "accessibility" && (
          <svg className="w-12 h-12 text-[#00A878]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        )}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-[#2C3E50] dark:text-white">{title}</h3>
      <p className="text-[#6B7280] dark:text-gray-300 flex-grow">{description}</p>
    </div>
  );
}

// Testimonial card component
function TestimonialCard({ quote, name, title }: { quote: string; name: string; title: string }) {
  return (
    <div className="card">
      <div className="mb-4">
        {/* Quote icon */}
        <svg className="h-8 w-8 text-[#00A878] mb-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="text-[#6B7280] dark:text-gray-300 italic mb-4">{quote}</p>
      </div>
      <div className="flex items-center">
        <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full mr-3"></div>
        <div>
          <p className="font-semibold text-[#2C3E50] dark:text-white">{name}</p>
          <p className="text-[#6B7280] dark:text-gray-400 text-sm">{title}</p>
        </div>
      </div>
    </div>
  );
}

// FAQ Item component
function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="mb-6 border-b border-[#E6F7F3] dark:border-[#1A2F26] pb-6 last:border-b-0">
      <h3 className="text-xl font-semibold mb-2 text-[#2C3E50] dark:text-white">{question}</h3>
      <p className="text-[#6B7280] dark:text-gray-300">{answer}</p>
    </div>
  );
}
