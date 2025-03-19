'use client';

import { useState, useEffect } from 'react';
import { getCurrentUser, User } from '../utils/auth';
import Link from 'next/link';

// Mock alert data type
type Alert = {
  id: string;
  timestamp: string;
  type: 'seizure' | 'fall' | 'irregular_hr';
  severity: 'low' | 'medium' | 'high';
  duration: number;
  device: string;
  status: 'new' | 'viewed' | 'resolved';
  notes?: string;
};

export default function Alerts() {
  const [user, setUser] = useState<User | null>(null);
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [filterStatus, setFilterStatus] = useState<'all' | 'new' | 'viewed' | 'resolved'>('all');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      const currentUser = await getCurrentUser();
      setUser(currentUser);
      
      // Load mock alerts data
      setAlerts([
  {
    id: 'alert-1',
          timestamp: '2023-07-15T14:23:00Z',
    type: 'seizure',
    severity: 'high',
          duration: 45,
          device: 'Empatica E4',
          status: 'new',
  },
  {
    id: 'alert-2',
          timestamp: '2023-07-10T03:17:00Z',
    type: 'seizure',
    severity: 'high',
          duration: 65,
          device: 'Embrace2',
          status: 'viewed',
          notes: 'Patient was sleeping. Emergency services contacted.',
  },
  {
    id: 'alert-3',
          timestamp: '2023-06-28T11:45:00Z',
          type: 'irregular_hr',
    severity: 'medium',
          duration: 30,
          device: 'Empatica E4',
          status: 'resolved',
          notes: 'False alarm - patient was exercising.',
  },
  {
    id: 'alert-4',
          timestamp: '2023-06-15T19:20:00Z',
          type: 'fall',
          severity: 'medium',
          duration: 0,
          device: 'Embrace2',
          status: 'resolved',
          notes: 'Patient confirmed they fell but was not injured.',
  },
  {
    id: 'alert-5',
          timestamp: '2023-06-02T08:10:00Z',
    type: 'seizure',
    severity: 'high',
          duration: 55,
          device: 'Empatica E4',
          status: 'resolved',
          notes: 'Patient was preparing breakfast. Partner administered emergency medication.',
        },
      ]);
      
      setIsLoading(false);
    };
    
    loadUser();
  }, []);

  const filteredAlerts = alerts.filter(alert => 
    filterStatus === 'all' || alert.status === filterStatus
  );

  const markAlertAs = (alertId: string, status: 'viewed' | 'resolved') => {
    setAlerts(alerts.map(alert => 
      alert.id === alertId ? { ...alert, status } : alert
    ));
  };

  const addNoteToAlert = (alertId: string, note: string) => {
    setAlerts(alerts.map(alert => 
      alert.id === alertId ? { ...alert, notes: note } : alert
    ));
  };

  const getAlertTypeLabel = (type: string) => {
    switch(type) {
      case 'seizure': return 'Seizure Activity';
      case 'fall': return 'Fall Detected';
      case 'irregular_hr': return 'Irregular Heart Rate';
      default: return type;
    }
  };

  const getStatusBadgeClass = (status: string) => {
    switch(status) {
      case 'new': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
      case 'viewed': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'resolved': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  const getSeverityBadgeClass = (severity: string) => {
    switch(severity) {
      case 'high': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
      case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'low': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };
  
  return (
    <main className="flex flex-col min-h-screen py-8 md:py-12">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Alerts
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl">
            View and manage all alerts from your wearable devices. Track seizure events and other important notifications.
          </p>
        </div>
        
        {/* Filter toolbar */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Filter by:</span>
            <div className="inline-flex rounded-md shadow-sm">
              <button
                type="button"
                className={`px-4 py-2 text-sm font-medium rounded-l-md border ${
                  filterStatus === 'all' 
                    ? 'bg-green-50 border-green-200 text-green-700 dark:bg-green-900/20 dark:border-green-800 dark:text-green-400' 
                    : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
                onClick={() => setFilterStatus('all')}
              >
                All
              </button>
              <button
                type="button"
                className={`px-4 py-2 text-sm font-medium border-t border-b ${
                  filterStatus === 'new' 
                    ? 'bg-green-50 border-green-200 text-green-700 dark:bg-green-900/20 dark:border-green-800 dark:text-green-400' 
                    : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
                onClick={() => setFilterStatus('new')}
              >
                New
              </button>
              <button
                type="button"
                className={`px-4 py-2 text-sm font-medium border-t border-b ${
                  filterStatus === 'viewed' 
                    ? 'bg-green-50 border-green-200 text-green-700 dark:bg-green-900/20 dark:border-green-800 dark:text-green-400' 
                    : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
                onClick={() => setFilterStatus('viewed')}
              >
                Viewed
              </button>
              <button
                type="button"
                className={`px-4 py-2 text-sm font-medium rounded-r-md border ${
                  filterStatus === 'resolved' 
                    ? 'bg-green-50 border-green-200 text-green-700 dark:bg-green-900/20 dark:border-green-800 dark:text-green-400' 
                    : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
                onClick={() => setFilterStatus('resolved')}
              >
                Resolved
              </button>
            </div>
          </div>
          
          <Link 
            href="/settings"
            className="text-sm font-medium text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300"
          >
            Configure Alert Settings
          </Link>
        </div>
        
        {/* Alerts listing */}
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden mb-8">
          {isLoading ? (
            <div className="p-8 text-center">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-gray-300 dark:border-gray-600 border-t-green-600"></div>
              <p className="mt-2 text-gray-700 dark:text-gray-300">Loading alerts...</p>
            </div>
          ) : filteredAlerts.length === 0 ? (
            <div className="p-8 text-center">
              <svg 
                className="mx-auto h-12 w-12 text-gray-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" 
                />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">No alerts found</h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {filterStatus === 'all' 
                  ? "You don't have any alerts yet." 
                  : `No ${filterStatus} alerts found.`}
              </p>
            </div>
          ) : (
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              {filteredAlerts.map((alert) => (
                <li key={alert.id} className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-start mb-1">
                        <div className="flex-shrink-0 mr-2">
                          {alert.type === 'seizure' ? (
                            <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                          ) : alert.type === 'fall' ? (
                            <svg className="h-5 w-5 text-orange-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                            </svg>
                          ) : (
                            <svg className="h-5 w-5 text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                            {getAlertTypeLabel(alert.type)}
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {new Date(alert.timestamp).toLocaleString()}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mt-3 mb-3">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusBadgeClass(alert.status)}`}>
                          {alert.status.charAt(0).toUpperCase() + alert.status.slice(1)}
                        </span>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getSeverityBadgeClass(alert.severity)}`}>
                          {alert.severity === 'high' ? 'High Severity' : 
                           alert.severity === 'medium' ? 'Medium Severity' : 'Low Severity'}
                        </span>
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                          {alert.device}
                        </span>
                        {alert.type === 'seizure' && (
                          <span className="px-2 py-1 text-xs font-medium rounded-full bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400">
                            Duration: {alert.duration}s
                          </span>
                        )}
                      </div>
                      
                      {alert.notes && (
                        <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-900 rounded-md">
                          <p className="text-sm text-gray-700 dark:text-gray-300">
                            <span className="font-medium">Notes:</span> {alert.notes}
                          </p>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex md:flex-col gap-2 self-end md:self-center">
                      {alert.status === 'new' && (
                        <button
                          className="inline-flex items-center px-3 py-1.5 border border-gray-300 dark:border-gray-600 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none"
                          onClick={() => markAlertAs(alert.id, 'viewed')}
                        >
                          Mark as Viewed
                        </button>
                      )}
                      {(alert.status === 'new' || alert.status === 'viewed') && (
                        <button
                          className="inline-flex items-center px-3 py-1.5 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none"
                          onClick={() => markAlertAs(alert.id, 'resolved')}
                        >
                          Resolve
                        </button>
                      )}
                      <button
                        className="inline-flex items-center px-3 py-1.5 border border-gray-300 dark:border-gray-600 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none"
                        onClick={() => {
                          const note = prompt('Add or update note:', alert.notes || '');
                          if (note !== null) {
                            addNoteToAlert(alert.id, note);
                          }
                        }}
                      >
                        {alert.notes ? 'Edit Note' : 'Add Note'}
                      </button>
                    </div>
            </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        
        {/* Information section */}
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            About Alert Management
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              The Alerts page shows all notifications generated by your wearable devices. 
              Alerts are categorized by severity and status to help you prioritize and manage them effectively.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-2">Alert Status:</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li><span className="text-red-600 dark:text-red-400 font-medium">New</span> - Recently generated alerts requiring attention</li>
                  <li><span className="text-yellow-600 dark:text-yellow-400 font-medium">Viewed</span> - Alerts you have acknowledged</li>
                  <li><span className="text-green-600 dark:text-green-400 font-medium">Resolved</span> - Alerts you have addressed and closed</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-2">Severity Levels:</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li><span className="text-red-600 dark:text-red-400 font-medium">High</span> - Urgent alerts requiring immediate attention</li>
                  <li><span className="text-yellow-600 dark:text-yellow-400 font-medium">Medium</span> - Important alerts to be addressed soon</li>
                  <li><span className="text-blue-600 dark:text-blue-400 font-medium">Low</span> - Informational alerts for your awareness</li>
                </ul>
              </div>
            </div>
            <p className="mt-4">
              You can customize your alert preferences, including notification methods and sensitivity levels, 
              in the <Link href="/settings" className="text-green-600 dark:text-green-400 hover:underline">Settings</Link> page.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
} 