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
              Empower Yourself with 
              <span className="text-[#00A878] dark:text-[#00A878]"> Seizure Alerts</span> on the Go
            </h1>
            <p className="text-lg text-[#6B7280] dark:text-gray-300">
              EpiSave provides reliable, life-improving seizure detection for Android smartwatches, giving you and your loved ones peace of mind wherever you go.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#download" 
                className="btn-primary text-center flex items-center justify-center"
              >
                <span className="mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0007.5511-.4482.9997-.9993.9997zm-11.046 0c-.5511 0-.9993-.4486-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0007.5511-.4482.9997-.9993.9997zm11.4045-6.7224l-1.8903-3.2724c-.1353-.2139-.3767-.3556-.6433-.3708-.2667-.0158-.5233.0873-.6881.2798-.1648.1877-.2264.4444-.1676.6784.0588.2341.2148.4314.4298.5428l1.3219 2.1465zm-9.3637-1.209l1.3214-2.2685c.0969-.1768.1176-.3894.0572-.5841-.0605-.1954-.1948-.3574-.3727-.4489-.1778-.092-.3888-.1-.5798-.0248-.1919.0752-.3465.2268-.427.4207L6.226 7.3823zm-1.4308 1.209l-1.8903-3.2724c-.1354-.2139-.3768-.3556-.6434-.3708-.2665-.0374-.5233.0873-.688.2798-.1654.1877-.2264.4444-.1676.6784.0582.2341.2148.4314.4298.5428l1.3219 2.1465zm5.3202 0h3.1556v-3.5012c-.0006-.2998-.1662-.574-.4303-.7138-.2647-.1391-.5843-.1218-.8336.0467-.2493.1691-.399.4539-.3918.7603v2.1435h-1.4999zm-2.1706 0h.77v-3.4582c-.001-.3006-.1666-.5752-.4311-.7146-.2639-.1394-.5835-.1221-.8328.046-.2487.1687-.3984.4531-.3917.7595v3.3673zm0 7.9312c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0006.5511-.4482.9997-.9993.9997zm5.6668-7.9312h.77V7.386c.0061-.3058-.1438-.5898-.3917-.7595-.2493-.1681-.5689-.1854-.8328-.046-.2645.1394-.4301.414-.4311.7146v2.1435zm.77 7.9312c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0007.5511-.4482.9997-.9993.9997zm4.6078-7.9312h.7695v-3.4557c.0067-.3064-.143-.5908-.3917-.7595-.2493-.1687-.5689-.1854-.8336-.046-.2641.1394-.4297.414-.4303.7146v3.5466h-3.1555v.6982h4.5416v-.7982z"/>
                  </svg>
                </span>
                Get on Google Play
              </a>
              <Link 
                href="#why-episave" 
                className="btn-secondary text-center"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/hero-android-watch.jpg"
              alt="Android smartwatch with EpiSave seizure detection app"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Why EpiSave Section */}
      <section id="why-episave" className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <h2 className="section-title text-center mb-12">
            Why Choose EpiSave?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-[#2C3E50] dark:text-white">A Reliable Companion for Epilepsy Management</h3>
              <p className="text-[#6B7280] dark:text-gray-300 mb-4">
                Living with epilepsy presents unique challenges, but technology can help provide peace of mind. EpiSave transforms your Android smartwatch into a powerful seizure detection device.
              </p>
              <p className="text-[#6B7280] dark:text-gray-300 mb-4">
                Our advanced algorithms continuously monitor for seizure activity, instantly alerting caregivers when help might be needed.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#00A878] mr-2">✓</span>
                  <span className="text-[#6B7280] dark:text-gray-300">Works with most Android smartwatches</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00A878] mr-2">✓</span>
                  <span className="text-[#6B7280] dark:text-gray-300">Designed with input from neurologists and patients</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00A878] mr-2">✓</span>
                  <span className="text-[#6B7280] dark:text-gray-300">Privacy-focused with secure data handling</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/why-episave.jpg"
                alt="Person wearing Android smartwatch with EpiSave"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 bg-[#E6F7F3] dark:bg-[#1A2F26]">
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <h2 className="section-title text-center mb-12">
            How EpiSave Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#00A878] rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2 text-[#2C3E50] dark:text-white">Install & Connect</h3>
              <p className="text-[#6B7280] dark:text-gray-300">Download EpiSave from Google Play and connect it to your Android smartwatch. Setup takes less than 5 minutes.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#00A878] rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2 text-[#2C3E50] dark:text-white">Wear & Monitor</h3>
              <p className="text-[#6B7280] dark:text-gray-300">Wear your smartwatch as usual. EpiSave works quietly in the background, monitoring for seizure activity 24/7.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#00A878] rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2 text-[#2C3E50] dark:text-white">Get Alerts</h3>
              <p className="text-[#6B7280] dark:text-gray-300">When a potential seizure is detected, EpiSave alerts both you and your designated caregivers immediately.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <h2 className="section-title text-center mb-12">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              title="Android Wearable Compatibility"
              description="Works with a wide range of Android smartwatches, making advanced seizure detection accessible and affordable."
              icon="android"
            />
            <FeatureCard 
              title="Real-time Alerts"
              description="Immediate notifications sent to both the wearer and designated caregivers when seizure-like activity is detected."
              icon="alert"
            />
            <FeatureCard 
              title="Caregiver App"
              description="Dedicated companion app for family members and caregivers to receive alerts and monitor status remotely."
              icon="care"
            />
            <FeatureCard 
              title="Battery Optimized"
              description="Designed to minimize battery consumption while maintaining continuous monitoring on your smartwatch."
              icon="battery"
            />
            <FeatureCard 
              title="Privacy First"
              description="Your health data stays private with end-to-end encryption and secure storage practices."
              icon="security"
            />
            <FeatureCard 
              title="User-Friendly Design"
              description="Intuitive interface designed for users of all ages and technical abilities."
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

      {/* Download CTA */}
      <section id="download" className="py-16 bg-[#00A878] dark:bg-[#008F63]">
        <div className="container mx-auto px-6 md:px-10 lg:px-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Take Control?
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto mb-8">
            Join thousands of users who trust EpiSave for advanced seizure detection on their Android smartwatches.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <a 
              href="https://play.google.com/store" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black hover:bg-gray-900 text-white font-medium py-3 px-8 rounded-md transition-colors inline-flex items-center justify-center"
            >
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.609 1.796c-.285.149-.51.375-.659.653A1.73 1.73 0 002.7 3.299v17.344c0 .303.087.6.25.849.15.278.374.504.66.653l9.165-10.14L3.61 1.796zm10.897 10.37l2.6-2.878-9.4-5.221 6.8 8.1zm.942 1.043l2.522 3.005c.936-.492 1.231-1.704.543-2.592l-.225-.245-2.84-0.168zm-2.232 2.394l-9.043 5.023c.237.334.602.551 1.004.599a1.74 1.74 0 001.248-.31l9.787-5.437-2.996-3.323z" />
              </svg>
              Download on Google Play
            </a>
            <a 
              href="#contact" 
              className="bg-white hover:bg-gray-100 text-[#00A878] font-medium py-3 px-8 rounded-md transition-colors inline-block"
            >
              Contact Us
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
    <div className="card hover:shadow-lg transition-shadow">
      <div className="w-12 h-12 bg-[#E6F7F3] dark:bg-[#1A2F26] rounded-full flex items-center justify-center mb-4">
        <span className="text-[#00A878] text-xl">
          {/* Icon placeholder - in a real app would use actual icons */}
          {icon === "android" && "📱"}
          {icon === "alert" && "🔔"}
          {icon === "care" && "👨‍👩‍👧"}
          {icon === "battery" && "🔋"}
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
