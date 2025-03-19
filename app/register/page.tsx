'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useToast } from '../context/ToastContext';
import Image from 'next/image';

export default function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'patient', // 'patient', 'caregiver', or 'healthcare'
    agreeToTerms: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const router = useRouter();
  const { showToast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when field is changed
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      showToast('Please correct the errors in the form', 'error');
      return;
    }

    try {
      setIsLoading(true);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate successful registration
      localStorage.setItem('auth_token', 'new_user_token_12345');
      localStorage.setItem('user_role', formData.userType);
      localStorage.setItem('user_name', `${formData.firstName} ${formData.lastName}`);
      
      showToast('Account created successfully', 'success');
      router.push('/onboarding');
      
    } catch (error) {
      showToast('Error creating account', 'error');
      console.error('Registration error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex justify-center">
            <div className="h-16 w-16 relative">
              <Image 
                src="/logo.png" 
                alt="SeizureGuard Logo" 
                fill
                className="object-contain"
              />
            </div>
          </div>
          <h2 className="mt-6 text-3xl font-bold text-[#2C3E50] dark:text-white">
            Create an account
          </h2>
          <p className="mt-2 text-sm text-[#6B7280] dark:text-gray-400">
            Already have an account?{' '}
            <Link href="/login" className="font-medium text-[#00A878] hover:text-[#008F63]">
              Sign in
            </Link>
          </p>
        </div>
        
        <div className="mt-8 bg-white dark:bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-[#2C3E50] dark:text-white">
                  First name
                </label>
                <div className="mt-1">
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    autoComplete="given-name"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`appearance-none block w-full px-3 py-2 border ${errors.firstName ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#00A878] focus:border-[#00A878] dark:bg-gray-700 dark:text-white`}
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-[#2C3E50] dark:text-white">
                  Last name
                </label>
                <div className="mt-1">
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    autoComplete="family-name"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`appearance-none block w-full px-3 py-2 border ${errors.lastName ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#00A878] focus:border-[#00A878] dark:bg-gray-700 dark:text-white`}
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>
                  )}
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#2C3E50] dark:text-white">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={`appearance-none block w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#00A878] focus:border-[#00A878] dark:bg-gray-700 dark:text-white`}
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="userType" className="block text-sm font-medium text-[#2C3E50] dark:text-white">
                I am a:
              </label>
              <div className="mt-1">
                <select
                  id="userType"
                  name="userType"
                  value={formData.userType}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#00A878] focus:border-[#00A878] dark:bg-gray-700 dark:text-white"
                >
                  <option value="patient">Patient</option>
                  <option value="caregiver">Caregiver</option>
                  <option value="healthcare">Healthcare Professional</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[#2C3E50] dark:text-white">
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className={`appearance-none block w-full px-3 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#00A878] focus:border-[#00A878] dark:bg-gray-700 dark:text-white`}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7A9.97 9.97 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-1.49 3.055m-3.423.82l-1.342 1.341a3 3 0 01-4.243-4.243L12.122 9.88" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9l0 0M15 9l0 0M15 15l0 0M9 15l0 0" />
                    </svg>
                  ) : (
                    <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
                {errors.password && (
                  <p className="mt-1 text-sm text-red-500">{errors.password}</p>
                )}
              </div>
              <p className="mt-1 text-sm text-[#6B7280] dark:text-gray-400">
                Must be at least 8 characters
              </p>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-[#2C3E50] dark:text-white">
                Confirm password
              </label>
              <div className="mt-1 relative">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`appearance-none block w-full px-3 py-2 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#00A878] focus:border-[#00A878] dark:bg-gray-700 dark:text-white`}
                  placeholder="••••••••"
                />
                {errors.confirmPassword && (
                  <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>
                )}
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="agreeToTerms"
                  name="agreeToTerms"
                  type="checkbox"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  className={`h-4 w-4 text-[#00A878] focus:ring-[#00A878] border-gray-300 rounded ${errors.agreeToTerms ? 'border-red-500' : ''}`}
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="agreeToTerms" className="font-medium text-[#6B7280] dark:text-gray-300">
                  I agree to the{' '}
                  <Link href="/terms" className="text-[#00A878] hover:text-[#008F63]">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link href="/privacy" className="text-[#00A878] hover:text-[#008F63]">
                    Privacy Policy
                  </Link>
                </label>
                {errors.agreeToTerms && (
                  <p className="mt-1 text-sm text-red-500">{errors.agreeToTerms}</p>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#00A878] hover:bg-[#008F63] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00A878] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : null}
                {isLoading ? 'Creating account...' : 'Create account'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 