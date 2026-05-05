export type MetaFbq = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  loaded?: boolean;
  push?: MetaFbq;
  queue?: unknown[][];
  version?: string;
};

declare global {
  interface Window {
    conv?: () => void;
    _fbq?: MetaFbq;
    fbq?: MetaFbq;
    __pawPolicyMetaPixelInitialized?: boolean;
    __pawPolicyMetaPixelLastTrackedPage?: string;
  }
}

export const FACEBOOK_PIXEL_ID = '1372998671044958';

const META_TRACKED_PATHS = new Set([
  '/mobile',
  '/mobile-cat',
  '/mobile-dark',
  '/mobile-pink',
  '/mobile-minimal',
  '/compare',
  '/simple',
]);

function normalizePathname(pathname: string) {
  return pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
}

export function isMetaTrackedPath(pathname?: string) {
  const currentPathname = pathname ?? (typeof window !== 'undefined' ? window.location.pathname : '');

  return META_TRACKED_PATHS.has(normalizePathname(currentPathname));
}

function trackMetaEvent(...args: unknown[]) {
  if (typeof window === 'undefined' || typeof window.fbq !== 'function') return;

  window.fbq(...args);
}

export function trackMetaPageView() {
  trackMetaEvent('track', 'PageView');
  trackMetaEvent('track', 'ViewContent');
}

export function trackCtaClick() {
  if (isMetaTrackedPath()) trackMetaEvent('trackCustom', 'CTA_Click');

  try {
    if (typeof window !== 'undefined' && typeof window.conv === 'function') window.conv();
  } catch {
    // conv() relies on the affiliate tracker being fully loaded (cid cookie etc.).
    // On localhost or if the tracker fails, don't let it block pixel tracking.
  }
}

export {};
