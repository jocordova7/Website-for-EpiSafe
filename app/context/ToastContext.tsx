'use client';

import React, { createContext, useContext, useCallback, useState, ReactNode } from 'react';
import Toast, { ToastType } from '../components/Toast';

interface ToastMessage {
  id: string;
  message: string;
  type: ToastType;
  duration?: number;
}

interface ToastContextType {
  showToast: (message: string, type: ToastType, duration?: number) => void;
  hideToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const showToast = useCallback((message: string, type: ToastType, duration: number = 5000) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prevToasts) => [...prevToasts, { id, message, type, duration }]);
    
    // Auto-remove toast after duration
    if (duration !== Infinity) {
      setTimeout(() => {
        hideToast(id);
      }, duration);
    }
    
    return id;
  }, []);

  const hideToast = useCallback((id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ showToast, hideToast }}>
      {children}
      <div className="toast-container" aria-live="polite" aria-atomic="true">
        {toasts.map((toast, index) => (
          <div
            key={toast.id}
            style={{
              position: 'fixed',
              bottom: `${(index * 80) + 16}px`,
              right: '16px',
              zIndex: 9999 - index,
            }}
          >
            <Toast
              message={toast.message}
              type={toast.type}
              duration={toast.duration}
              onClose={() => hideToast(toast.id)}
              show={true}
            />
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  
  return context;
} 