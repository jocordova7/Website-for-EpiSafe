declare module "./components/Navbar" {
  const Navbar: React.ComponentType;
  export default Navbar;
}

declare module "./components/EmergencyButton" {
  const EmergencyButton: React.ComponentType;
  export default EmergencyButton;
}

declare module "./context/ToastContext" {
  export const ToastProvider: React.ComponentType<{ children: React.ReactNode }>;
  export function useToast(): any;
} 