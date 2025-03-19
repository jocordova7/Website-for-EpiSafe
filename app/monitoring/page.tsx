'use client';

import { useState, useEffect } from 'react';
import DataChart, { ChartDataType } from '../components/DataChart';
import { useToast } from '../context/ToastContext';
import { SkeletonText } from '../components/Skeleton';

export default function Monitoring() {
  const [timeRange, setTimeRange] = useState<'1h' | '6h' | '24h' | '7d' | '30d'>('1h');
  const [isLoading, setIsLoading] = useState(true);
  const [deviceStatus, setDeviceStatus] = useState<'connected' | 'disconnected' | 'reconnecting'>('disconnected');
  const [batteryLevel, setBatteryLevel] = useState(85);
  const { showToast } = useToast();
  
  // Simulate loading state
  useEffect(() => {
    setIsLoading(true);
    
    // Simulate device connection
    const timer = setTimeout(() => {
      setIsLoading(false);
      setDeviceStatus('connected');
      showToast('Device connected successfully', 'success');
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [showToast]);
  
  // Simulate battery drain
  useEffect(() => {
    if (deviceStatus === 'connected') {
      const interval = setInterval(() => {
        setBatteryLevel(prev => {
          const newLevel = prev - 1;
          if (newLevel <= 20 && newLevel > 15) {
            showToast('Device battery low (20%)', 'warning');
          }
          if (newLevel <= 5) {
            showToast('Critical battery level! Please charge the device soon', 'error');
          }
          return Math.max(newLevel, 0);
        });
      }, 30000); // Drain 1% every 30 seconds
      
      return () => clearInterval(interval);
    }
  }, [deviceStatus, showToast]);
  
  // Simulate occasional disconnections
  useEffect(() => {
    if (deviceStatus === 'connected') {
      const disconnectProbability = 0.001; // 0.1% chance per second to disconnect
      
      const checkInterval = setInterval(() => {
        if (Math.random() < disconnectProbability) {
          setDeviceStatus('reconnecting');
          showToast('Device connection lost. Attempting to reconnect...', 'warning');
          
          // Try to reconnect after 5 seconds
          setTimeout(() => {
            const reconnectSuccess = Math.random() < 0.8; // 80% chance to reconnect
            
            if (reconnectSuccess) {
              setDeviceStatus('connected');
              showToast('Device reconnected successfully', 'success');
            } else {
              setDeviceStatus('disconnected');
              showToast('Failed to reconnect to device', 'error');
            }
          }, 5000);
        }
      }, 1000);
      
      return () => clearInterval(checkInterval);
    }
  }, [deviceStatus, showToast]);
  
  // Handle time range change
  const handleTimeRangeChange = (range: '1h' | '6h' | '24h' | '7d' | '30d') => {
    setIsLoading(true);
    setTimeRange(range);
    
    // Simulate data loading for the new time range
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };
  
  return (
    <main className="flex flex-col min-h-screen py-8 md:py-12">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#2C3E50] dark:text-white">
            Live Monitoring
          </h1>
          {isLoading ? (
            <SkeletonText lines={2} className="max-w-3xl" />
          ) : (
            <p className="text-lg text-[#6B7280] dark:text-gray-300 max-w-3xl">
              Real-time data from your wearable device. Monitor heart rate, motion patterns, and 
              potential seizure activity. All data is encrypted and securely stored.
            </p>
          )}
          
          {/* Time range selector */}
          <div className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow flex flex-wrap gap-3 md:w-fit">
            <TimeRangeButton range="1h" current={timeRange} onChange={handleTimeRangeChange} disabled={isLoading} />
            <TimeRangeButton range="6h" current={timeRange} onChange={handleTimeRangeChange} disabled={isLoading} />
            <TimeRangeButton range="24h" current={timeRange} onChange={handleTimeRangeChange} disabled={isLoading} />
            <TimeRangeButton range="7d" current={timeRange} onChange={handleTimeRangeChange} disabled={isLoading} />
            <TimeRangeButton range="30d" current={timeRange} onChange={handleTimeRangeChange} disabled={isLoading} />
          </div>
        </div>
        
        {/* Status indicator */}
        <div className={`mb-8 p-4 rounded-lg flex items-center justify-between ${
          deviceStatus === 'connected' 
            ? 'bg-[#E6F7F3] dark:bg-[#1A2F26]' 
            : deviceStatus === 'reconnecting' 
              ? 'bg-yellow-100 dark:bg-yellow-900/20' 
              : 'bg-red-100 dark:bg-red-900/20'
        }`} aria-live="polite">
          <div className="flex items-center">
            <div className={`w-3 h-3 rounded-full mr-3 ${
              deviceStatus === 'connected' 
                ? 'bg-[#00A878] animate-pulse' 
                : deviceStatus === 'reconnecting' 
                  ? 'bg-yellow-500 animate-ping' 
                  : 'bg-red-500'
            }`}></div>
            <span className={`font-medium ${
              deviceStatus === 'connected' 
                ? 'text-[#00A878] dark:text-[#00A878]' 
                : deviceStatus === 'reconnecting' 
                  ? 'text-yellow-700 dark:text-yellow-400' 
                  : 'text-red-700 dark:text-red-400'
            }`}>
              {deviceStatus === 'connected' 
                ? 'Device connected and monitoring' 
                : deviceStatus === 'reconnecting' 
                  ? 'Reconnecting to device...' 
                  : 'Device disconnected'}
            </span>
          </div>
          
          {deviceStatus !== 'disconnected' && (
            <div className="flex items-center">
              <div className="mr-3">
                <div className="text-sm text-[#6B7280] dark:text-gray-400">Battery</div>
                <div className="flex items-center">
                  <div className="w-24 h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${
                        batteryLevel > 30 
                          ? 'bg-[#00A878]' 
                          : batteryLevel > 10 
                            ? 'bg-yellow-500' 
                            : 'bg-red-500'
                      }`} 
                      style={{ width: `${batteryLevel}%` }}
                    ></div>
                  </div>
                  <span className="ml-2 text-sm">{batteryLevel}%</span>
                </div>
              </div>
              
              <div>
                <button 
                  className="btn-secondary text-sm py-1"
                  onClick={() => {
                    if (deviceStatus === 'connected') {
                      setDeviceStatus('disconnected');
                      showToast('Device disconnected', 'info');
                    } else {
                      setDeviceStatus('reconnecting');
                      showToast('Attempting to reconnect...', 'info');
                      
                      setTimeout(() => {
                        setDeviceStatus('connected');
                        showToast('Device reconnected successfully', 'success');
                      }, 2000);
                    }
                  }}
                >
                  {deviceStatus === 'connected' ? 'Disconnect' : 'Reconnect'}
                </button>
              </div>
            </div>
          )}
        </div>
        
        {/* Dashboard Layout */}
        <div className="grid gap-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <section aria-labelledby="heart-rate-heading">
              <DataChart 
                dataType="heartRate" 
                title="Heart Rate (BPM)" 
                timeRange={timeRange}
                liveUpdate={deviceStatus === 'connected'}
                height={300}
                showLoading={isLoading}
              />
            </section>
            
            <section aria-labelledby="eda-heading">
              <DataChart 
                dataType="eda" 
                title="Electrodermal Activity (EDA)" 
                timeRange={timeRange}
                liveUpdate={deviceStatus === 'connected'}
                height={300}
                showLoading={isLoading}
              />
            </section>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <section aria-labelledby="motion-heading">
              <DataChart 
                dataType="motion" 
                title="Motion Activity" 
                timeRange={timeRange}
                liveUpdate={deviceStatus === 'connected'}
                height={300}
                showLoading={isLoading}
              />
            </section>
            
            <section aria-labelledby="temperature-heading">
              <DataChart 
                dataType="temperature" 
                title="Temperature" 
                timeRange={timeRange}
                liveUpdate={deviceStatus === 'connected'}
                height={300}
                showLoading={isLoading}
              />
            </section>
          </div>
          
          <section aria-labelledby="seizure-heading">
            <DataChart 
              dataType="seizures" 
              title="Seizure Detection" 
              timeRange={timeRange}
              liveUpdate={deviceStatus === 'connected'}
              height={300}
              showLoading={isLoading}
            />
          </section>
        </div>
        
        {/* Additional information */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4 text-[#2C3E50] dark:text-white">
            Understanding Your Data
          </h2>
          <div className="space-y-4 text-[#6B7280] dark:text-gray-300">
            <p>
              The charts above show real-time data from your wearable device. Our AI algorithm 
              analyzes patterns in heart rate, electrodermal activity, temperature, and motion 
              to detect potential seizure activity.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div>
                <h3 className="font-medium text-[#2C3E50] dark:text-white mb-2">How to interpret:</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Heart rate spikes may indicate increased physical activity or stress</li>
                  <li>EDA increases are associated with emotional arousal and seizures</li>
                  <li>Unusual motion patterns combined with physiological changes may signal a seizure</li>
                  <li>Red markers on the seizure chart indicate detected events</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-[#2C3E50] dark:text-white mb-2">Actions to take:</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Review detected events with your healthcare provider</li>
                  <li>Adjust alert settings in your profile if needed</li>
                  <li>Ensure your device is charged and worn correctly</li>
                  <li>Keep your emergency contacts up to date</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function TimeRangeButton({ 
  range, 
  current, 
  onChange,
  disabled = false
}: { 
  range: '1h' | '6h' | '24h' | '7d' | '30d'; 
  current: string; 
  onChange: (range: '1h' | '6h' | '24h' | '7d' | '30d') => void; 
  disabled?: boolean;
}) {
  const isActive = range === current;
  const baseClasses = "py-2 px-4 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00A878] disabled:opacity-50 disabled:cursor-not-allowed";
  const activeClasses = "bg-[#00A878] text-white";
  const inactiveClasses = "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600";
  
  return (
    <button
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
      onClick={() => onChange(range)}
      aria-pressed={isActive}
      disabled={disabled}
    >
      {range === '1h' ? '1 Hour' : 
       range === '6h' ? '6 Hours' : 
       range === '24h' ? '24 Hours' : 
       range === '7d' ? '7 Days' : 
       '30 Days'}
    </button>
  );
} 