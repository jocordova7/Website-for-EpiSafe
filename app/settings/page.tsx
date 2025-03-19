'use client';

import { useState, useEffect } from 'react';
import { getCurrentUser, User } from '../utils/auth';

// Mock device data type
type Device = {
  id: string;
  name: string;
  type: 'watch' | 'wristband';
  model: string;
  status: 'connected' | 'disconnected' | 'pairing';
  battery: number;
  lastSync: string;
  firmware: string;
};

export default function Settings() {
  const [user, setUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState<'profile' | 'notifications' | 'devices' | 'accessibility'>('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [profileForm, setProfileForm] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [notificationSettings, setNotificationSettings] = useState({
    email: false,
    sms: false,
    push: false,
    seizureThreshold: 'medium',
    alertDelay: 30,
  });
  
  // Device state
  const [devices, setDevices] = useState<Device[]>([
    {
      id: 'dev-1',
      name: 'Empatica E4',
      type: 'wristband',
      model: 'E4',
      status: 'connected',
      battery: 78,
      lastSync: '2023-07-15T14:30:00Z',
      firmware: 'v2.1.0',
    },
    {
      id: 'dev-2',
      name: 'Embrace2',
      type: 'wristband',
      model: 'Embrace2',
      status: 'disconnected',
      battery: 45,
      lastSync: '2023-07-14T09:15:00Z',
      firmware: 'v1.8.2',
    }
  ]);
  const [isPairing, setIsPairing] = useState(false);
  
  // Accessibility state
  const [accessibilitySettings, setAccessibilitySettings] = useState({
    darkMode: false,
    fontSize: 'medium',
    highContrast: false,
    reduceMotion: false,
    colorBlindMode: 'none',
  });
  
  useEffect(() => {
    const loadUser = async () => {
      const currentUser = await getCurrentUser();
      setUser(currentUser);
      if (currentUser) {
        setProfileForm({
          name: currentUser.name,
          email: currentUser.email,
          phone: '+1 (555) 123-4567', // Mock data
        });
        setNotificationSettings({
          email: currentUser.preferences.notifications.email,
          sms: currentUser.preferences.notifications.sms,
          push: currentUser.preferences.notifications.push,
          seizureThreshold: 'medium', // Mock data
          alertDelay: 30, // Mock data
        });
        
        // In a real app, we would load these from user preferences
        setAccessibilitySettings({
          darkMode: currentUser.preferences.darkMode,
          fontSize: 'medium',
          highContrast: false,
          reduceMotion: false,
          colorBlindMode: 'none',
        });
      }
    };
    
    loadUser();
  }, []);

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileForm({
      ...profileForm,
      [name]: value,
    });
  };

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would save the profile changes to the backend
    setIsEditing(false);
    // Mock update user info
    if (user) {
      const updatedUser = {
        ...user,
        name: profileForm.name,
        email: profileForm.email,
      };
      setUser(updatedUser);
    }
  };
  
  const handleNotificationToggle = (type: keyof typeof notificationSettings) => {
    setNotificationSettings(prev => ({
      ...prev,
      [type]: !prev[type],
    }));
    
    // In a real app, we would save changes to the backend
    if (user) {
      const updatedUser = {
        ...user,
        preferences: {
          ...user.preferences,
          notifications: {
            ...user.preferences.notifications,
            [type]: !notificationSettings[type as keyof typeof user.preferences.notifications],
          },
        },
      };
      setUser(updatedUser);
    }
  };
  
  const handleThresholdChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setNotificationSettings(prev => ({
      ...prev,
      seizureThreshold: e.target.value,
    }));
  };
  
  const handleDelayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNotificationSettings(prev => ({
      ...prev,
      alertDelay: parseInt(e.target.value),
    }));
  };
  
  // Devices tab handlers
  const handleDeviceAction = (deviceId: string, action: 'connect' | 'disconnect' | 'remove') => {
    if (action === 'remove') {
      setDevices(devices.filter(d => d.id !== deviceId));
      return;
    }
    
    setDevices(devices.map(device => {
      if (device.id === deviceId) {
        return {
          ...device,
          status: action === 'connect' ? 'connected' : 'disconnected'
        };
      }
      return device;
    }));
  };
  
  const startPairing = () => {
    setIsPairing(true);
    // In a real app, this would initiate the device pairing process
    setTimeout(() => {
      // Mock adding a new device after "pairing"
      const newDevice: Device = {
        id: `dev-${Date.now()}`,
        name: 'New Empatica Device',
        type: 'wristband',
        model: 'Embrace2',
        status: 'connected',
        battery: 100,
        lastSync: new Date().toISOString(),
        firmware: 'v2.0.0',
      };
      setDevices([...devices, newDevice]);
      setIsPairing(false);
    }, 3000);
  };
  
  // Function to render the Profile tab content
  const renderProfileTab = () => {
    if (!user) {
      return <div className="text-center py-4">Loading user profile...</div>;
    }

    return (
      <div className="space-y-6">
        <div className="pb-5 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">Personal Information</h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Update your personal details and contact information.</p>
        </div>

        {isEditing ? (
          <form onSubmit={handleProfileSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={profileForm.name}
                onChange={handleProfileChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 dark:bg-gray-800 dark:text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={profileForm.email}
                onChange={handleProfileChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 dark:bg-gray-800 dark:text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Phone Number</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={profileForm.phone}
                onChange={handleProfileChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 dark:bg-gray-800 dark:text-white"
              />
            </div>
            <div className="flex justify-end space-x-3 pt-4">
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-700 focus:outline-none"
              >
                Save Changes
              </button>
            </div>
          </form>
        ) : (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Full Name</h4>
                <p className="mt-1 text-sm text-gray-900 dark:text-white">{user.name}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Email Address</h4>
                <p className="mt-1 text-sm text-gray-900 dark:text-white">{user.email}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Role</h4>
                <p className="mt-1 text-sm text-gray-900 dark:text-white capitalize">{user.role}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Phone Number</h4>
                <p className="mt-1 text-sm text-gray-900 dark:text-white">{profileForm.phone}</p>
              </div>
            </div>
            
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setIsEditing(true)}
                className="px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-700 focus:outline-none"
              >
                Edit Profile
              </button>
            </div>
          </div>
        )}

        <div className="pt-6 mt-6 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">Emergency Contacts</h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">People who will be notified in case of emergency.</p>
        
          <div className="mt-4 space-y-3">
            {user.preferences.emergencyContacts.map((contact, index) => (
              <div key={index} className="p-4 border border-gray-200 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-900">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">{contact.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{contact.relationship}</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{contact.phone}</p>
                  </div>
                  <button 
                    className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                    onClick={() => console.log('Edit contact', index)}
                  >
                    <span className="sr-only">Edit</span>
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
            
            <button 
              className="mt-4 inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-600 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none"
              onClick={() => console.log('Add new contact')}
            >
              <svg className="-ml-0.5 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add Contact
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  // Function to render the Notifications tab content
  const renderNotificationsTab = () => {
    if (!user) {
      return <div className="text-center py-4">Loading notification settings...</div>;
    }

    return (
      <div className="space-y-6">
        <div className="pb-5 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">Notification Preferences</h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Configure how and when you receive alerts about seizure activity.</p>
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="text-base font-medium text-gray-900 dark:text-white mb-4">Alert Methods</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="email-notifications"
                      name="email-notifications"
                      type="checkbox"
                      checked={notificationSettings.email}
                      onChange={() => handleNotificationToggle('email')}
                      className="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300 rounded dark:border-gray-600 dark:bg-gray-800"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="email-notifications" className="font-medium text-gray-700 dark:text-gray-300">Email Notifications</label>
                    <p className="text-gray-500 dark:text-gray-400">Receive seizure alerts via email.</p>
                  </div>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">{user.email}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="sms-notifications"
                      name="sms-notifications"
                      type="checkbox"
                      checked={notificationSettings.sms}
                      onChange={() => handleNotificationToggle('sms')}
                      className="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300 rounded dark:border-gray-600 dark:bg-gray-800"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="sms-notifications" className="font-medium text-gray-700 dark:text-gray-300">SMS Notifications</label>
                    <p className="text-gray-500 dark:text-gray-400">Receive seizure alerts via text message.</p>
                  </div>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">{profileForm.phone}</span>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="push-notifications"
                    name="push-notifications"
                    type="checkbox"
                    checked={notificationSettings.push}
                    onChange={() => handleNotificationToggle('push')}
                    className="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300 rounded dark:border-gray-600 dark:bg-gray-800"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="push-notifications" className="font-medium text-gray-700 dark:text-gray-300">Push Notifications</label>
                  <p className="text-gray-500 dark:text-gray-400">Receive seizure alerts on this device.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <h4 className="text-base font-medium text-gray-900 dark:text-white mb-4">Alert Settings</h4>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="seizure-threshold" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Seizure Detection Sensitivity</label>
                <select
                  id="seizure-threshold"
                  name="seizure-threshold"
                  value={notificationSettings.seizureThreshold}
                  onChange={handleThresholdChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 dark:bg-gray-800 dark:text-white"
                >
                  <option value="low">Low (Fewer alerts, only severe seizures)</option>
                  <option value="medium">Medium (Balanced sensitivity)</option>
                  <option value="high">High (More alerts, including mild seizures)</option>
                </select>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Adjust how sensitive the seizure detection algorithm should be.
                </p>
              </div>
              
              <div>
                <label htmlFor="alert-delay" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Alert Delay (seconds)
                </label>
                <div className="mt-1 flex items-center">
                  <input
                    type="range"
                    id="alert-delay"
                    name="alert-delay"
                    min="0"
                    max="60"
                    step="5"
                    value={notificationSettings.alertDelay}
                    onChange={handleDelayChange}
                    className="mr-3 flex-grow h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="text-sm font-medium text-gray-900 dark:text-white w-8 text-center">
                    {notificationSettings.alertDelay}s
                  </span>
                </div>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Wait this many seconds after seizure detection before sending alerts. 
                  Useful to reduce false alarms for brief seizure-like movements.
                </p>
              </div>
            </div>
          </div>
          
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <h4 className="text-base font-medium text-gray-900 dark:text-white mb-4">Test Notifications</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Send a test notification to verify your settings are working correctly.
            </p>
            
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none"
              onClick={() => console.log('Send test notification')}
            >
              Send Test Alert
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  // Function to render the Devices tab content
  const renderDevicesTab = () => {
    return (
      <div className="space-y-6">
        <div className="pb-5 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">Connected Devices</h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Manage your Empatica devices used for seizure monitoring.
          </p>
        </div>
        
        {devices.length === 0 ? (
          <div className="text-center py-10">
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
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
              />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">No devices</h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              You haven't connected any Empatica devices yet.
            </p>
            <div className="mt-6">
              <button
                type="button"
                onClick={startPairing}
                disabled={isPairing}
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isPairing ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Pairing...
                  </>
                ) : (
                  <>
                    <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Add Device
                  </>
                )}
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="space-y-4">
              {devices.map((device) => (
                <div key={device.id} className="bg-white dark:bg-gray-800 shadow overflow-hidden rounded-md border border-gray-200 dark:border-gray-700">
                  <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
                    <div>
                      <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                        {device.name}
                      </h3>
                      <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">
                        {device.model} · Firmware {device.firmware}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        device.status === 'connected' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                          : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                      }`}>
                        {device.status === 'connected' ? 'Connected' : 'Disconnected'}
                      </span>
                      
                      <div className="relative inline-flex items-center">
                        <span className="flex items-center">
                          <svg className="w-4 h-4 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                          <span className="ml-1 text-xs text-gray-500 dark:text-gray-400">{device.battery}%</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-4 sm:px-6">
                    <dl className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Last Synced</dt>
                        <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                          {new Date(device.lastSync).toLocaleString()}
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Device Type</dt>
                        <dd className="mt-1 text-sm text-gray-900 dark:text-white capitalize">
                          {device.type}
                        </dd>
                      </div>
                    </dl>
                  </div>
                  
                  <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-4 sm:px-6 flex justify-between">
                    {device.status === 'connected' ? (
                      <button
                        type="button"
                        onClick={() => handleDeviceAction(device.id, 'disconnect')}
                        className="inline-flex items-center px-3 py-1.5 border border-gray-300 dark:border-gray-600 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none"
                      >
                        Disconnect
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => handleDeviceAction(device.id, 'connect')}
                        className="inline-flex items-center px-3 py-1.5 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none"
                      >
                        Connect
                      </button>
                    )}
                    
                    <div className="flex space-x-2">
                      <button
                        type="button"
                        className="inline-flex items-center px-3 py-1.5 border border-gray-300 dark:border-gray-600 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none"
                      >
                        Settings
                      </button>
                      
                      <button
                        type="button"
                        onClick={() => handleDeviceAction(device.id, 'remove')}
                        className="inline-flex items-center px-3 py-1.5 border border-gray-300 dark:border-gray-600 shadow-sm text-sm leading-4 font-medium rounded-md text-red-700 dark:text-red-400 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 flex justify-center">
              <button
                type="button"
                onClick={startPairing}
                disabled={isPairing}
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isPairing ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Pairing...
                  </>
                ) : (
                  <>
                    <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Add Another Device
                  </>
                )}
              </button>
            </div>
          </>
        )}
      </div>
    );
  };
  
  // Accessibility settings handlers
  const handleToggleAccessibilitySetting = (setting: 'darkMode' | 'highContrast' | 'reduceMotion') => {
    setAccessibilitySettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
    
    // In a real app, we would save these settings to the user's preferences
    if (user && setting === 'darkMode') {
      const updatedUser = {
        ...user,
        preferences: {
          ...user.preferences,
          darkMode: !accessibilitySettings.darkMode
        }
      };
      setUser(updatedUser);
      
      // Also apply the dark mode to the document
      if (!accessibilitySettings.darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  };
  
  const handleFontSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAccessibilitySettings(prev => ({
      ...prev,
      fontSize: e.target.value
    }));
    
    // In a real app, we would apply this to the CSS variables
  };
  
  const handleColorBlindModeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAccessibilitySettings(prev => ({
      ...prev,
      colorBlindMode: e.target.value
    }));
    
    // In a real app, we would apply the appropriate filters
  };
  
  // Function to render the Accessibility tab content
  const renderAccessibilityTab = () => {
    return (
      <div className="space-y-6">
        <div className="pb-5 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">Accessibility Settings</h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Customize the application to meet your visual and interaction needs.
          </p>
        </div>
        
        <div className="space-y-6">
          <div>
            <h4 className="text-base font-medium text-gray-900 dark:text-white mb-4">Display Preferences</h4>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="dark-mode"
                      name="dark-mode"
                      type="checkbox"
                      checked={accessibilitySettings.darkMode}
                      onChange={() => handleToggleAccessibilitySetting('darkMode')}
                      className="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300 rounded dark:border-gray-600 dark:bg-gray-800"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="dark-mode" className="font-medium text-gray-700 dark:text-gray-300">Dark Mode</label>
                    <p className="text-gray-500 dark:text-gray-400">Use a darker color scheme to reduce eye strain.</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="high-contrast"
                      name="high-contrast"
                      type="checkbox"
                      checked={accessibilitySettings.highContrast}
                      onChange={() => handleToggleAccessibilitySetting('highContrast')}
                      className="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300 rounded dark:border-gray-600 dark:bg-gray-800"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="high-contrast" className="font-medium text-gray-700 dark:text-gray-300">High Contrast</label>
                    <p className="text-gray-500 dark:text-gray-400">Increase contrast for better readability.</p>
                  </div>
                </div>
              </div>
              
              <div>
                <label htmlFor="font-size" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Font Size
                </label>
                <select
                  id="font-size"
                  name="font-size"
                  value={accessibilitySettings.fontSize}
                  onChange={handleFontSizeChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 dark:bg-gray-800 dark:text-white"
                >
                  <option value="small">Small</option>
                  <option value="medium">Medium (Default)</option>
                  <option value="large">Large</option>
                  <option value="x-large">Extra Large</option>
                </select>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Adjust text size throughout the application.
                </p>
              </div>
              
              <div>
                <label htmlFor="colorblind-mode" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Color Blind Mode
                </label>
                <select
                  id="colorblind-mode"
                  name="colorblind-mode"
                  value={accessibilitySettings.colorBlindMode}
                  onChange={handleColorBlindModeChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 dark:bg-gray-800 dark:text-white"
                >
                  <option value="none">None (Default)</option>
                  <option value="protanopia">Protanopia (Red-Blind)</option>
                  <option value="deuteranopia">Deuteranopia (Green-Blind)</option>
                  <option value="tritanopia">Tritanopia (Blue-Blind)</option>
                </select>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Adjust colors for different types of color blindness.
                </p>
              </div>
            </div>
          </div>
          
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <h4 className="text-base font-medium text-gray-900 dark:text-white mb-4">Interaction Preferences</h4>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="reduce-motion"
                      name="reduce-motion"
                      type="checkbox"
                      checked={accessibilitySettings.reduceMotion}
                      onChange={() => handleToggleAccessibilitySetting('reduceMotion')}
                      className="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300 rounded dark:border-gray-600 dark:bg-gray-800"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="reduce-motion" className="font-medium text-gray-700 dark:text-gray-300">Reduce Motion</label>
                    <p className="text-gray-500 dark:text-gray-400">Minimize animations and transitions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <h4 className="text-base font-medium text-gray-900 dark:text-white mb-4">Screen Reader Support</h4>
            
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              This application is designed to work with screen readers and other assistive technologies. 
              All important elements have proper ARIA labels and dynamic content updates are announced appropriately.
            </p>
            
            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-md">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3 flex-1 md:flex md:justify-between">
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    Keyboard shortcuts are available for common actions. Press '?' to view all available shortcuts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  return (
    <main className="flex flex-col min-h-screen py-8 md:py-12">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Settings
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl">
            Manage your account preferences, notification settings, and connected devices.
          </p>
        </div>
        
        {/* Tabs */}
        <div className="border-b border-gray-200 dark:border-gray-700 mb-8">
          <nav className="flex space-x-8">
            <button
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'profile'
                  ? 'border-green-500 text-green-600 dark:border-green-400 dark:text-green-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
              onClick={() => setActiveTab('profile')}
            >
              Profile
            </button>
            <button
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'notifications'
                  ? 'border-green-500 text-green-600 dark:border-green-400 dark:text-green-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
              onClick={() => setActiveTab('notifications')}
            >
              Notifications
            </button>
            <button
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'devices'
                  ? 'border-green-500 text-green-600 dark:border-green-400 dark:text-green-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
              onClick={() => setActiveTab('devices')}
            >
              Connected Devices
            </button>
            <button
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'accessibility'
                  ? 'border-green-500 text-green-600 dark:border-green-400 dark:text-green-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
              onClick={() => setActiveTab('accessibility')}
            >
              Accessibility
            </button>
          </nav>
        </div>
        
        {/* Tab content container */}
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
          {activeTab === 'profile' && renderProfileTab()}
          {activeTab === 'notifications' && renderNotificationsTab()}
          {activeTab === 'devices' && renderDevicesTab()}
          {activeTab === 'accessibility' && renderAccessibilityTab()}
        </div>
      </div>
    </main>
  );
}
