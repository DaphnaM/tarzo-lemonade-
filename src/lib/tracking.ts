declare global {
  interface Window {
    fbq?: ((...args: unknown[]) => void) & { callMethod?: unknown; queue?: unknown[] };
    conv?: () => void;
  }
}

export function trackCtaClick() {
  if (typeof window === 'undefined') return;

  try {
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'ViewContent');
    }
  } catch {
    // Don't let pixel errors block navigation or affiliate tracking.
  }

  try {
    if (typeof window.conv === 'function') window.conv();
  } catch {
    // conv() relies on the affiliate tracker being fully loaded (cid cookie etc.).
    // On localhost or if the tracker fails, don't let it block pixel tracking.
  }
}

export {};
