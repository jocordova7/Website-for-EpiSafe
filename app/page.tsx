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
              <span className="text-[#00A878] dark:text-[#00A878]"> Detection</span> for Wearables
            </h1>
            <p className="text-lg text-[#6B7280] dark:text-gray-300">
              SeizureGuard provides real-time monitoring and alerts for epilepsy patients using advanced AI and wearable technology. Get peace of mind for yourself and your loved ones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/monitoring" 
                className="btn-primary text-center"
              >
                Start Monitoring
              </Link>
              <Link 
                href="#features" 
                className="btn-secondary text-center"
              >
                Learn More
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
      <section className="py-16 bg-[#00A878] dark:bg-[#008F63]">
        <div className="container mx-auto px-6 md:px-10 lg:px-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto mb-8">
            Join thousands of users who trust SeizureGuard for advanced seizure detection and monitoring.
          </p>
          <Link 
            href="/monitoring" 
            className="bg-white hover:bg-gray-100 text-[#00A878] font-medium py-3 px-8 rounded-md transition-colors inline-block"
          >
            Start Your Free Trial
          </Link>
        </div>
      </section>
    </main>
  );
}

// Feature card component
function FeatureCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="card hover:shadow-lg transition-shadow">
      <div className="w-12 h-12 bg-[#E6F7F3] dark:bg-[#1A2F26] rounded-full flex items-center justify-center mb-4">
        <span className="text-[#00A878] text-xl">
          {/* Icon placeholder - in a real app would use actual icons */}
          {icon === "monitor" && "📊"}
          {icon === "alert" && "🔔"}
          {icon === "medical" && "📋"}
          {icon === "emergency" && "🚑"}
          {icon === "security" && "🔒"}
          {icon === "accessibility" && "👥"}
        </span>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-[#2C3E50] dark:text-white">{title}</h3>
      <p className="text-[#6B7280] dark:text-gray-300">{description}</p>
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
