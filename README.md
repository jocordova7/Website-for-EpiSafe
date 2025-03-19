# SeizureGuard - Seizure Detection App for Android Wearables

SeizureGuard is a professional, accessible, and secure web application for monitoring and detecting seizures using data from Android wearable devices. The application provides real-time alerts and comprehensive monitoring tools for patients, caregivers, and healthcare providers.

## Features

- **Real-time Monitoring**: Continuous tracking of heart rate, motion, and other biometric data to detect potential seizure activity.
- **Instant Alerts**: Immediate notifications to caregivers and emergency contacts when seizure activity is detected.
- **Medical Records**: Comprehensive logging of seizure events and patterns for healthcare providers.
- **Emergency Response**: One-touch emergency calling to connect with emergency services or designated contacts.
- **Secure Data**: End-to-end encryption and HIPAA-compliant data storage for user privacy and security.
- **Accessible Design**: WCAG-compliant interface with high-contrast colors, dark mode, and screen reader support.

## Technology Stack

- **Frontend**: React with Next.js (App Router) and TypeScript
- **UI Framework**: Tailwind CSS
- **Data Visualization**: Chart.js with React-ChartJS-2
- **State Management**: React Hooks and Context API
- **Accessibility**: ARIA-compliant components and keyboard navigation
- **Security**: HTTPS, TLS 1.2+, and role-based access controls

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm 7.x or higher

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/seizure-monitor.git
   cd seizure-monitor
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the development server:
   ```
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

- `app/`: Next.js app router pages and layout components
- `app/components/`: Reusable UI components
- `app/utils/`: Utility functions and hooks
- `app/assets/`: Static assets like icons and images
- `public/`: Static files served at the root level

## Key Components

- **Navbar**: Responsive navigation with links to all major sections
- **EmergencyButton**: Floating emergency call button for immediate assistance
- **DataChart**: Real-time data visualization for heart rate, motion, and seizure detection
- **AlertSystem**: Notifications and alert management for seizure events

## Accessibility Features

SeizureGuard is built with accessibility as a priority:

- WCAG-compliant color contrast with high-contrast colors (green for stable, red for alerts)
- Screen-reader support with ARIA attributes and live regions
- Keyboard navigation support
- Dark mode for reduced eye strain
- Responsive design with rem/em units for scalable text

## Security Measures

- HTTPS and TLS 1.2+ encryption
- End-to-end encryption for sensitive data
- Two-factor authentication for settings changes
- Role-based access controls (patient vs. caregiver views)
- HIPAA-compliant data handling

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Chart.js](https://www.chartjs.org/) - Data visualization
- [React-ChartJS-2](https://react-chartjs-2.js.org/) - React wrapper for Chart.js
