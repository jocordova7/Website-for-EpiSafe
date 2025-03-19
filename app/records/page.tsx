'use client';

import { useState } from 'react';
import Link from 'next/link';
import DataChart from '../components/DataChart';

// Mock seizure event data
const MOCK_SEIZURE_EVENTS = [
  {
    id: 'event-1',
    date: '2023-05-15',
    time: '14:23:00',
    duration: 45,
    type: 'Tonic-Clonic',
    severity: 'Severe',
    notes: 'Patient was at home. Medication administered after event.',
  },
  {
    id: 'event-2',
    date: '2023-05-10',
    time: '03:17:00',
    duration: 65,
    type: 'Tonic-Clonic',
    severity: 'Severe',
    notes: 'Patient was sleeping. Emergency services contacted.',
  },
  {
    id: 'event-3',
    date: '2023-04-28',
    time: '11:45:00',
    duration: 30,
    type: 'Absence',
    severity: 'Mild',
    notes: 'Patient was at work. Recovered without intervention.',
  },
  {
    id: 'event-4',
    date: '2023-04-15',
    time: '19:20:00',
    duration: 40,
    type: 'Focal',
    severity: 'Moderate',
    notes: 'Patient was watching TV. Took rescue medication.',
  },
  {
    id: 'event-5',
    date: '2023-04-02',
    time: '08:10:00',
    duration: 55,
    type: 'Tonic-Clonic',
    severity: 'Severe',
    notes: 'Patient was preparing breakfast. Partner administered emergency medication.',
  },
];

// Mock medication data
const MOCK_MEDICATIONS = [
  {
    id: 'med-1',
    name: 'Levetiracetam',
    dosage: '500mg',
    frequency: 'Twice daily',
    start_date: '2022-01-15',
    notes: 'Take with food to reduce stomach upset.',
  },
  {
    id: 'med-2',
    name: 'Diazepam',
    dosage: '10mg',
    frequency: 'As needed for emergency',
    start_date: '2022-01-15',
    notes: 'Emergency rescue medication. Administer during prolonged seizures.',
  },
  {
    id: 'med-3',
    name: 'Lamotrigine',
    dosage: '200mg',
    frequency: 'Once daily',
    start_date: '2022-04-10',
    notes: 'Added to regimen after breakthrough seizures.',
  },
];

export default function MedicalRecords() {
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '3m' | '6m' | '1y'>('30d');
  const [activeTab, setActiveTab] = useState<'events' | 'trends' | 'medications'>('events');
  
  return (
    <main className="flex flex-col min-h-screen py-8 md:py-12">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Medical Records
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl">
            Track your seizure history, analyze trends, and manage medications. This secure 
            information can be shared with your healthcare provider.
          </p>
        </div>
        
        {/* Action buttons */}
        <div className="mb-8 flex flex-wrap gap-3">
          <button 
            className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition-colors flex items-center"
            onClick={() => console.log('Export data')}
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
            </svg>
            Export Data
          </button>
          <button 
            className="bg-white hover:bg-gray-100 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white font-medium py-2 px-4 rounded-md border border-gray-300 dark:border-gray-600 transition-colors flex items-center"
            onClick={() => console.log('Print report')}
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path>
            </svg>
            Print Report
          </button>
          <button 
            className="bg-white hover:bg-gray-100 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white font-medium py-2 px-4 rounded-md border border-gray-300 dark:border-gray-600 transition-colors flex items-center"
            onClick={() => console.log('Share with doctor')}
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
            </svg>
            Share with Doctor
          </button>
        </div>
        
        {/* Tabs */}
        <div className="border-b border-gray-200 dark:border-gray-700 mb-8">
          <nav className="flex space-x-8">
            <button
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'events'
                  ? 'border-green-500 text-green-600 dark:border-green-400 dark:text-green-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
              onClick={() => setActiveTab('events')}
            >
              Seizure Events
            </button>
            <button
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'trends'
                  ? 'border-green-500 text-green-600 dark:border-green-400 dark:text-green-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
              onClick={() => setActiveTab('trends')}
            >
              Trends & Analytics
            </button>
            <button
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'medications'
                  ? 'border-green-500 text-green-600 dark:border-green-400 dark:text-green-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
              onClick={() => setActiveTab('medications')}
            >
              Medications
            </button>
          </nav>
        </div>
        
        {/* Tab content */}
        <div className="mb-12">
          {activeTab === 'events' && (
            <section aria-labelledby="seizure-events-heading">
              <h2 id="seizure-events-heading" className="sr-only">Seizure Events</h2>
              
              <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg mb-8">
                <div className="px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                    <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
                      <p className="text-sm text-gray-500 dark:text-gray-400">Total Seizures</p>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">28</p>
                      <p className="text-sm text-green-600 dark:text-green-400">↓ 12% from previous period</p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
                      <p className="text-sm text-gray-500 dark:text-gray-400">Average Duration</p>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">47s</p>
                      <p className="text-sm text-green-600 dark:text-green-400">↓ 5s from previous period</p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
                      <p className="text-sm text-gray-500 dark:text-gray-400">Seizure-Free Days</p>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">19</p>
                      <p className="text-sm text-green-600 dark:text-green-400">↑ 3 days from previous period</p>
                    </div>
                  </div>
                  
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-900">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          Date & Time
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          Type
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          Duration
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          Severity
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          Notes
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                      {MOCK_SEIZURE_EVENTS.map((event) => (
                        <tr key={event.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900 dark:text-white">{event.date}</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">{event.time}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-sm text-gray-900 dark:text-white">{event.type}</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-sm text-gray-900 dark:text-white">{event.duration} seconds</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              event.severity === 'Severe' 
                                ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400' 
                                : event.severity === 'Moderate'
                                  ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                                  : 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                            }`}>
                              {event.severity}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-sm text-gray-900 dark:text-white">{event.notes}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="flex justify-center">
                <button className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
                  View All Seizure Events
                </button>
              </div>
            </section>
          )}
          
          {activeTab === 'trends' && (
            <section aria-labelledby="trends-heading">
              <h2 id="trends-heading" className="sr-only">Trends & Analytics</h2>
              
              <div className="mb-6 flex flex-wrap gap-2">
                <TimeRangeButton range="7d" label="7 Days" current={timeRange} onChange={setTimeRange} />
                <TimeRangeButton range="30d" label="30 Days" current={timeRange} onChange={setTimeRange} />
                <TimeRangeButton range="3m" label="3 Months" current={timeRange} onChange={setTimeRange} />
                <TimeRangeButton range="6m" label="6 Months" current={timeRange} onChange={setTimeRange} />
                <TimeRangeButton range="1y" label="1 Year" current={timeRange} onChange={setTimeRange} />
              </div>
              
              <div className="grid gap-8 md:grid-cols-2 mb-8">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Seizure Frequency</h3>
                  <div className="h-80">
                    <DataChart 
                      dataType="seizures" 
                      title="Seizure Events" 
                      height={300}
                    />
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Heart Rate During Events</h3>
                  <div className="h-80">
                    <DataChart 
                      dataType="heartRate" 
                      title="BPM" 
                      height={300}
                    />
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Potential Triggers</h3>
                
                <div className="overflow-hidden">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-900 dark:text-white">Sleep Deprivation</span>
                        <span className="text-yellow-600 dark:text-yellow-400 font-medium">72%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '72%' }}></div>
                      </div>
                    </div>
                    
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-900 dark:text-white">Stress</span>
                        <span className="text-yellow-600 dark:text-yellow-400 font-medium">65%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '65%' }}></div>
                      </div>
                    </div>
                    
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-900 dark:text-white">Missed Medication</span>
                        <span className="text-yellow-600 dark:text-yellow-400 font-medium">45%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '45%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
          
          {activeTab === 'medications' && (
            <section aria-labelledby="medications-heading">
              <h2 id="medications-heading" className="sr-only">Medications</h2>
              
              <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg mb-8">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Current Medications</h3>
                    <button className="bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-2 px-4 rounded-md transition-colors flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                      </svg>
                      Add Medication
                    </button>
                  </div>
                  
                  <div className="space-y-6">
                    {MOCK_MEDICATIONS.map((medication) => (
                      <div key={medication.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                        <div className="flex flex-wrap justify-between items-start gap-4">
                          <div>
                            <h4 className="text-lg font-medium text-gray-900 dark:text-white">{medication.name}</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {medication.dosage} • {medication.frequency}
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                              Started: {medication.start_date}
                            </p>
                          </div>
                          <div className="flex space-x-2">
                            <button className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                              </svg>
                            </button>
                            <button className="text-gray-600 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                        
                        <div className="mt-4">
                          <p className="text-sm text-gray-700 dark:text-gray-300">
                            <span className="font-medium">Notes:</span> {medication.notes}
                          </p>
                        </div>
                        
                        <div className="mt-4 flex justify-between items-center">
                          <div className="inline-flex items-center">
                            <span className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></span>
                            <span className="text-sm text-gray-700 dark:text-gray-300">Active</span>
                          </div>
                          
                          <button className="text-sm text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300">
                            View History
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border-l-4 border-yellow-500">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-yellow-700 dark:text-yellow-200">
                      Always consult your healthcare provider before making any changes to your medication regimen.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </main>
  );
}

// Time range button component
function TimeRangeButton({ 
  range, 
  label,
  current, 
  onChange 
}: { 
  range: '7d' | '30d' | '3m' | '6m' | '1y'; 
  label: string;
  current: string; 
  onChange: (range: '7d' | '30d' | '3m' | '6m' | '1y') => void; 
}) {
  const isActive = range === current;
  const baseClasses = "py-2 px-4 rounded-md text-sm font-medium transition-colors";
  const activeClasses = "bg-green-600 text-white";
  const inactiveClasses = "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600";
  
  return (
    <button
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
      onClick={() => onChange(range)}
      aria-pressed={isActive}
    >
      {label}
    </button>
  );
} 