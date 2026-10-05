import React, { useCallback, useEffect, useRef } from 'react';

// Minimal, dependency-free Cloudflare Turnstile widget (explicit render).
// Loads challenges.cloudflare.com/api.js once, renders the widget, and reports
// the token via onVerify. The challenge "mode" (Managed/Non-interactive/
// Interactive) is configured on the widget in the Cloudflare dashboard, not here.

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, opts: Record<string, unknown>) => string;
      reset: (id: string) => void;
      remove: (id: string) => void;
    };
  }
}

const TEST_SITE_KEY = '1x00000000000000000000AA'; // Cloudflare universal test sitekey
// Public Turnstile site key (safe to ship in client code). Bound to the widget's
// allowed hostnames in Cloudflare; the SECRET key is server-only and never here.
const PRODUCTION_SITE_KEY = '0x4AAAAAAFOZTyOT0JaK8sCs';
const SCRIPT_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';

function getSiteKey(): string {
  if (process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY) return process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  return process.env.NODE_ENV === 'production' ? PRODUCTION_SITE_KEY : TEST_SITE_KEY;
}

let loadPromise: Promise<void> | null = null;
function loadTurnstileScript(): Promise<void> {
  if (typeof window === 'undefined') return Promise.reject(new Error('no window'));
  if (window.turnstile) return Promise.resolve();
  if (loadPromise) return loadPromise;
  loadPromise = new Promise<void>((resolve, reject) => {
    const script = document.createElement('script');
    script.src = SCRIPT_SRC;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => {
      loadPromise = null;
      reject(new Error('Turnstile script failed to load'));
    };
    document.head.appendChild(script);
  });
  return loadPromise;
}

interface TurnstileProps {
  onVerify: (token: string) => void;
  onExpire?: () => void;
  resetSignal?: number;
  className?: string;
}

const Turnstile: React.FC<TurnstileProps> = ({ onVerify, onExpire, resetSignal = 0, className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const cbRef = useRef({ onVerify, onExpire });
  cbRef.current = { onVerify, onExpire };
  const siteKey = getSiteKey();

  const renderWidget = useCallback(() => {
    if (!window.turnstile || !containerRef.current || !siteKey) return;
    if (widgetIdRef.current) {
      window.turnstile.reset(widgetIdRef.current);
      return;
    }
    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: siteKey,
      theme: 'light',
      callback: (token: string) => cbRef.current.onVerify(token),
      'expired-callback': () => cbRef.current.onExpire?.(),
      'error-callback': () => cbRef.current.onExpire?.(),
    });
  }, [siteKey]);

  useEffect(() => {
    if (!siteKey) return;
    let cancelled = false;
    loadTurnstileScript()
      .then(() => {
        if (!cancelled) renderWidget();
      })
      .catch(() => {
        /* widget simply won't appear; submit stays disabled without a token */
      });
    return () => {
      cancelled = true;
    };
  }, [siteKey, renderWidget]);

  // Re-arm the challenge after a failed submission.
  useEffect(() => {
    if (resetSignal > 0 && widgetIdRef.current && window.turnstile) {
      window.turnstile.reset(widgetIdRef.current);
    }
  }, [resetSignal]);

  if (!siteKey) {
    return (
      <div className={className}>
        Captcha is currently unavailable — please email us directly to enroll.
      </div>
    );
  }
  return <div ref={containerRef} className={className} />;
};

export default Turnstile;
