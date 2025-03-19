'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ResearchPaper {
  id: number;
  title: string;
  authors: string;
  journal: string;
  year: number;
  citation: string;
  keyFindings: string[];
}

export default function ResearchEvidence() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  
  const researchPapers: ResearchPaper[] = [
    {
      id: 1,
      title: "Automated detection of generalized tonic-clonic seizures using a wearable EMG device",
      authors: "Onorati F, Regalia G, Caborni C, et al.",
      journal: "Epilepsia",
      year: 2021,
      citation: "Epilepsia. 2021;62(10):2324-2338",
      keyFindings: [
        "93.8% sensitivity in detecting generalized tonic-clonic seizures",
        "0.7 false alarms per day on average",
        "Median detection latency of 9 seconds"
      ]
    },
    {
      id: 2,
      title: "Multicenter clinical assessment of improved wearable multimodal convulsive seizure detectors",
      authors: "Regalia G, Onorati F, Lai M, et al.",
      journal: "Epilepsia",
      year: 2019,
      citation: "Epilepsia. 2019;60(11):2216-2226",
      keyFindings: [
        "Detection algorithm achieved 94.6% sensitivity",
        "Successfully detected 135 out of 142 generalized tonic-clonic seizures",
        "Reduced false alarm rate compared to previous detection methods"
      ]
    },
    {
      id: 3,
      title: "Detecting focal seizures with wrist-worn biosensors",
      authors: "Yamada T, Onorati F, Marshall D, et al.",
      journal: "Epilepsy & Behavior",
      year: 2022,
      citation: "Epilepsy & Behavior. 2022;127:108514",
      keyFindings: [
        "Demonstrated potential for detecting complex partial seizures",
        "Combined EDA and accelerometer data improved detection accuracy",
        "Detected autonomic changes associated with focal seizures"
      ]
    },
    {
      id: 4,
      title: "Wearable sensors: a novel approach in epilepsy management - real-world evidence",
      authors: "Beniczky S, Arbune A, Jeppesen J, et al.",
      journal: "Neurology",
      year: 2020,
      citation: "Neurology. 2020;95(11):e1574-e1584",
      keyFindings: [
        "Real-world evidence from 207 patients using wearable seizure detection",
        "Improved reporting accuracy of seizure frequency by 73%",
        "Significantly reduced hospital admissions among users"
      ]
    }
  ];
  
  const toggleExpand = (id: number) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  return (
    <section className="py-16 bg-[#E6F7F3] dark:bg-[#1A2F26]">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="section-title">Clinical Research & Validation</h2>
          <p className="max-w-3xl mx-auto text-[#6B7280] dark:text-gray-300">
            SeizureGuard technology is backed by extensive clinical research and validation studies
            published in leading medical journals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-[#2C3E50] dark:text-white mb-4">
              Evidence-Based Technology
            </h3>
            <p className="text-[#6B7280] dark:text-gray-300 mb-4">
              The SeizureGuard detection algorithms have been validated in multiple clinical studies,
              demonstrating high sensitivity and specificity in real-world environments.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#00A878] flex items-center justify-center text-white">
                  <span className="text-xs font-bold">1</span>
                </div>
                <div className="ml-3">
                  <h4 className="text-lg font-medium text-[#2C3E50] dark:text-white">FDA Cleared</h4>
                  <p className="text-[#6B7280] dark:text-gray-300">
                    Our smartwatch-based seizure detection system has received FDA clearance for epilepsy monitoring.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#00A878] flex items-center justify-center text-white">
                  <span className="text-xs font-bold">2</span>
                </div>
                <div className="ml-3">
                  <h4 className="text-lg font-medium text-[#2C3E50] dark:text-white">Clinically Proven</h4>
                  <p className="text-[#6B7280] dark:text-gray-300">
                    Multiple peer-reviewed studies demonstrating {'>'}90% seizure detection sensitivity.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#00A878] flex items-center justify-center text-white">
                  <span className="text-xs font-bold">3</span>
                </div>
                <div className="ml-3">
                  <h4 className="text-lg font-medium text-[#2C3E50] dark:text-white">Real-World Validated</h4>
                  <p className="text-[#6B7280] dark:text-gray-300">
                    Used by thousands of patients globally, with documented cases of life-saving alerts.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/research-validation.jpg"
              alt="Clinical research and validation"
              fill
              className="object-cover"
            />
          </div>
        </div>
        
        <h3 className="text-2xl font-bold text-[#2C3E50] dark:text-white mb-6 text-center">
          Key Research Publications
        </h3>
        
        <div className="space-y-4">
          {researchPapers.map((paper) => (
            <div 
              key={paper.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden cursor-pointer"
            >
              <div 
                className="p-6"
                onClick={() => toggleExpand(paper.id)}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-medium text-[#2C3E50] dark:text-white mb-2">
                      {paper.title}
                    </h4>
                    <p className="text-[#6B7280] dark:text-gray-400 text-sm">
                      {paper.authors} | {paper.journal} ({paper.year})
                    </p>
                  </div>
                  <button 
                    className="flex-shrink-0 text-[#00A878] hover:text-[#008F63] transition-colors"
                    aria-expanded={expandedId === paper.id}
                    aria-controls={`paper-details-${paper.id}`}
                  >
                    <svg 
                      className={`w-6 h-6 transform transition-transform ${expandedId === paper.id ? 'rotate-180' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {expandedId === paper.id && (
                <div 
                  id={`paper-details-${paper.id}`}
                  className="px-6 pb-6 pt-2 border-t border-gray-100 dark:border-gray-700"
                >
                  <p className="text-[#2C3E50] dark:text-white text-sm mb-3">
                    Citation: {paper.citation}
                  </p>
                  <h5 className="font-medium text-[#2C3E50] dark:text-white mb-2">
                    Key Findings:
                  </h5>
                  <ul className="list-disc list-inside space-y-1 text-[#6B7280] dark:text-gray-300 text-sm">
                    {paper.keyFindings.map((finding, index) => (
                      <li key={index}>{finding}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <a 
            href="#" 
            className="text-[#00A878] hover:text-[#008F63] font-medium inline-flex items-center"
          >
            View all research publications
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
} 