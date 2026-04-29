'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { FACEBOOK_PIXEL_ID, isMetaTrackedPath, trackMetaPageView, type MetaFbq } from '@/lib/tracking';

function installMetaPixel() {
  if (typeof window === 'undefined') return;

  if (!window.fbq) {
    const fbq = function (...args: unknown[]) {
      if (fbq.callMethod) {
        fbq.callMethod(...args);
      } else {
        fbq.queue?.push(args);
      }
    } as MetaFbq;

    window.fbq = fbq;
    window._fbq = window._fbq ?? fbq;
    fbq.push = fbq;
    fbq.loaded = true;
    fbq.version = '2.0';
    fbq.queue = [];
  }

  if (!document.querySelector('script[src="https://connect.facebook.net/en_US/fbevents.js"]')) {
    const script = document.createElement('script');
    const firstScript = document.getElementsByTagName('script')[0];

    script.async = true;
    script.src = 'https://connect.facebook.net/en_US/fbevents.js';

    if (firstScript?.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript);
    } else {
      document.head.appendChild(script);
    }
  }

  if (!window.__pawPolicyMetaPixelInitialized) {
    window.fbq('init', FACEBOOK_PIXEL_ID);
    window.__pawPolicyMetaPixelInitialized = true;
  }
}

export default function MetaPixel() {
  const pathname = usePathname();

  useEffect(() => {
    if (!isMetaTrackedPath(pathname)) return;

    installMetaPixel();

    const pageKey = `${pathname}${window.location.search}`;
    if (window.__pawPolicyMetaPixelLastTrackedPage === pageKey) return;

    window.__pawPolicyMetaPixelLastTrackedPage = pageKey;
    trackMetaPageView();
  }, [pathname]);

  return null;
}
