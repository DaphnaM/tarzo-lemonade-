import type { LegalTheme } from './variants';

export const bodyStyles = (theme: LegalTheme) => {
  const isDark = theme === 'dark';
  return {
    h2: `text-xl font-semibold mt-8 mb-3 ${isDark ? 'text-white' : ''}`,
    p: 'mb-4 leading-relaxed',
    pBold: 'mb-2 leading-relaxed font-semibold',
    pTight: 'mb-2 leading-relaxed',
    ul: 'list-disc pl-6 mb-4 space-y-1',
    link: isDark
      ? 'text-blue-300 hover:underline'
      : 'text-[var(--accent)] hover:underline',
    meta: isDark ? 'text-slate-400' : 'text-[var(--lemonade-gray)]',
  };
};
