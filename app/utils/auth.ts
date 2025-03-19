// This is a mock authentication module for demonstration purposes.
// In a real application, this would connect to a secure authentication service.

export type UserRole = 'patient' | 'caregiver' | 'doctor' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  preferences: {
    darkMode: boolean;
    notifications: {
      email: boolean;
      sms: boolean;
      push: boolean;
    };
    emergencyContacts: {
      name: string;
      relationship: string;
      phone: string;
    }[];
  };
}

// Mock user data
const MOCK_USERS: Record<string, User> = {
  'patient-1': {
    id: 'patient-1',
    name: 'John Smith',
    email: 'john.smith@example.com',
    role: 'patient',
    preferences: {
      darkMode: false,
      notifications: {
        email: true,
        sms: true,
        push: true,
      },
      emergencyContacts: [
        {
          name: 'Sarah Smith',
          relationship: 'Spouse',
          phone: '+1 (555) 123-4567',
        },
        {
          name: 'Dr. Michael Johnson',
          relationship: 'Neurologist',
          phone: '+1 (555) 987-6543',
        },
      ],
    },
  },
  'caregiver-1': {
    id: 'caregiver-1',
    name: 'Sarah Smith',
    email: 'sarah.smith@example.com',
    role: 'caregiver',
    preferences: {
      darkMode: true,
      notifications: {
        email: true,
        sms: true,
        push: true,
      },
      emergencyContacts: [
        {
          name: 'Emergency Services',
          relationship: 'Emergency',
          phone: '911',
        },
      ],
    },
  },
  'doctor-1': {
    id: 'doctor-1',
    name: 'Dr. Michael Johnson',
    email: 'michael.johnson@hospital.org',
    role: 'doctor',
    preferences: {
      darkMode: false,
      notifications: {
        email: true,
        sms: false,
        push: true,
      },
      emergencyContacts: [],
    },
  },
};

// Simulated token storage
const TOKEN_STORAGE_KEY = 'seizureGuard_auth_token';

/**
 * Simulates authenticating a user and storing a token
 */
export const login = (email: string, password: string): Promise<User> => {
  return new Promise((resolve, reject) => {
    // Simulate API request delay
    setTimeout(() => {
      // Find user by email (mock implementation)
      const user = Object.values(MOCK_USERS).find(u => u.email === email);
      
      if (user && password === 'password') { // Simple password check for demo
        // Generate mock token
        const token = btoa(`${user.id}:${Date.now()}`);
        localStorage.setItem(TOKEN_STORAGE_KEY, token);
        resolve(user);
      } else {
        reject(new Error('Invalid email or password'));
      }
    }, 800);
  });
};

/**
 * Simulates logging out a user by removing the token
 */
export const logout = (): Promise<void> => {
  return new Promise((resolve) => {
    localStorage.removeItem(TOKEN_STORAGE_KEY);
    resolve();
  });
};

/**
 * Checks if user is authenticated
 */
export const isAuthenticated = (): boolean => {
  return !!localStorage.getItem(TOKEN_STORAGE_KEY);
};

/**
 * Gets the current user based on stored token
 */
export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve) => {
    const token = localStorage.getItem(TOKEN_STORAGE_KEY);
    
    if (!token) {
      resolve(null);
      return;
    }
    
    try {
      // In a real app, you would validate the token with your backend
      const userId = atob(token).split(':')[0];
      const user = MOCK_USERS[userId];
      
      if (user) {
        resolve(user);
      } else {
        localStorage.removeItem(TOKEN_STORAGE_KEY);
        resolve(null);
      }
    } catch (error) {
      localStorage.removeItem(TOKEN_STORAGE_KEY);
      resolve(null);
    }
  });
};

/**
 * Checks if a user has permission for a specific action
 */
export const hasPermission = (user: User | null, action: string): boolean => {
  if (!user) return false;
  
  // Define role-based permissions
  const permissions: Record<UserRole, string[]> = {
    patient: ['view:own-data', 'update:own-profile', 'emergency:call'],
    caregiver: ['view:patient-data', 'update:patient-alerts', 'emergency:call', 'view:medical-history'],
    doctor: ['view:patient-data', 'update:medical-records', 'view:medical-history', 'emergency:call'],
    admin: ['view:all-data', 'update:all-profiles', 'manage:users', 'emergency:call'],
  };
  
  return permissions[user.role].includes(action);
}; 