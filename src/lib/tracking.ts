declare function conv(): void;
declare function fbq(...args: unknown[]): void;

export function trackCtaClick() {
  if (typeof fbq === 'function') fbq('track', 'ViewContent');
  try {
    if (typeof conv === 'function') conv();
  } catch {
    // conv() relies on the affiliate tracker being fully loaded (cid cookie etc.).
    // On localhost or if the tracker fails, don't let it block pixel tracking.
  }
}
