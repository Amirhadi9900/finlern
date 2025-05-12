import { useEffect, useState, ReactNode } from 'react';

interface ClientOnlyProps {
  children: ReactNode;
  fallback?: ReactNode;
}

/**
 * ClientOnly component ensures content is only rendered on the client side
 * This helps prevent hydration errors when server and client renders differ
 * Optimized to reduce reflow and improve performance
 */
export default function ClientOnly({ children, fallback = null }: ClientOnlyProps) {
  const [hasMounted, setHasMounted] = useState(false);
  
  useEffect(() => {
    // Use requestAnimationFrame to delay mounting until after paint
    // This helps prevent layout shifts and improve perceived performance
    const handle = requestAnimationFrame(() => {
      setHasMounted(true);
    });
    
    // Clean up the animation frame if the component unmounts
    return () => cancelAnimationFrame(handle);
  }, []);
  
  // On first render (server-side), show fallback
  if (!hasMounted) {
    return <>{fallback}</>;
  }
  
  // Once mounted on client, render children
  return <>{children}</>;
} 