export type LegalTheme = 'light' | 'dark' | 'accent';

export type VariantConfig = {
  theme: LegalTheme;
  phoneFrame?: boolean;
};

export const VARIANTS: Record<string, VariantConfig> = {
  'get-quote': { theme: 'light' },
  coverage: { theme: 'light' },
  plans: { theme: 'light' },
  start: { theme: 'light' },
  simple: { theme: 'light' },
  adventure: { theme: 'light' },
  'adventure-video': { theme: 'light' },
  gif: { theme: 'light' },
  video: { theme: 'light' },
  compare: { theme: 'dark' },
  protect: { theme: 'accent' },
  mobile: { theme: 'light', phoneFrame: true },
  'mobile-cat': { theme: 'light', phoneFrame: true },
  'mobile-dark': { theme: 'dark', phoneFrame: true },
  'mobile-minimal': { theme: 'light', phoneFrame: true },
  'mobile-pink': { theme: 'accent', phoneFrame: true },
};
