'use client';

import { useEffect, useState } from 'react';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

interface ToastProps {
  message: string;
  type: ToastType;
  duration?: number;
  onClose?: () => void;
  show: boolean;
}

const Toast = ({ message, type, duration = 5000, onClose, show }: ToastProps) => {
  const [isVisible, setIsVisible] = useState(show);

  useEffect(() => {
    setIsVisible(show);
    
    if (show && duration > 0) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        if (onClose) onClose();
      }, duration);
      
      return () => {
        clearTimeout(timer);
      };
    }
  }, [show, duration, onClose]);

  if (!isVisible) return null;
  
  // Base classes
  const baseClasses = "fixed bottom-4 right-4 z-50 p-4 rounded-lg shadow-lg flex items-center max-w-sm transform transition-all duration-300";
  
  // Type-specific classes
  const typeClasses = {
    success: "bg-[#00A878] text-white",
    error: "bg-[#FF6B6B] text-white",
    warning: "bg-[#FFC107] text-gray-900",
    info: "bg-[#2C3E50] text-white"
  };
  
  // Icon based on type
  const getIcon = () => {
    switch (type) {
      case 'success':
        return (
          <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        );
      case 'error':
        return (
          <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        );
      case 'warning':
        return (
          <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        );
      case 'info':
        return (
          <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
    }
  };

  return (
    <div 
      className={`${baseClasses} ${typeClasses[type]} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
      role="alert"
      aria-live="assertive"
    >
      {getIcon()}
      <div className="mr-3 flex-grow">{message}</div>
      <button 
        onClick={() => {
          setIsVisible(false);
          if (onClose) onClose();
        }}
        className="text-white focus:outline-none"
        aria-label="Close notification"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

export default Toast; 