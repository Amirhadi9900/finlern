import { useEffect, useState, ReactNode } from 'react';

interface ClientOnlyProps {
  children: ReactNode;
  fallback?: ReactNode;
}

/**
 * ClientOnly component ensures content is only rendered on the client side
 * This helps prevent hydration errors when server and client renders differ
 */
export default function ClientOnly({ children, fallback = null }: ClientOnlyProps) {
  const [hasMounted, setHasMounted] = useState(false);
  
  useEffect(() => {
    // Set mounted state to true when component mounts on client
    setHasMounted(true);
  }, []);
  
  // On first render (server-side), don't render anything (or render fallback if provided)
  // This prevents hydration mismatch between server and client
  if (!hasMounted) {
    return <>{fallback}</>;
  }
  
  // Once mounted on client, render children
  return <>{children}</>;
} 