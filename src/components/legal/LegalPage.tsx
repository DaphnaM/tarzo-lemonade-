import Link from 'next/link';
import Footer from '@/components/shared/Footer';
import type { LegalTheme } from './variants';

type Props = {
  theme: LegalTheme;
  phoneFrame?: boolean;
  homeHref: string;
  title: string;
  effectiveDate?: string;
  children: React.ReactNode;
};

const themes = {
  light: {
    page: 'bg-white text-[#1A1A1A]',
    hero: 'bg-gradient-to-b from-blue-50 to-white',
    headerBorder: 'border-b border-gray-100',
    headerBg: 'bg-white',
    logoText: 'text-[#4A4A4A]',
    title: 'text-[var(--lemonade-dark)]',
    meta: 'text-[var(--lemonade-gray)]',
  },
  accent: {
    page: 'bg-white text-[#1A1A1A]',
    hero: 'bg-gradient-to-b from-red-50 to-white',
    headerBorder: 'border-b border-red-100',
    headerBg: 'bg-white',
    logoText: 'text-[#4A4A4A]',
    title: 'text-[var(--lemonade-dark)]',
    meta: 'text-[var(--lemonade-gray)]',
  },
  dark: {
    page: 'bg-slate-900 text-slate-100',
    hero: 'bg-gradient-to-b from-slate-900 to-slate-800',
    headerBorder: 'border-b border-slate-700',
    headerBg: 'bg-slate-900',
    logoText: 'text-white',
    title: 'text-white',
    meta: 'text-slate-400',
  },
};

export default function LegalPage({ theme, phoneFrame, homeHref, title, effectiveDate, children }: Props) {
  const t = themes[theme];

  const inner = (
    <div className={`flex flex-col ${phoneFrame ? '' : 'min-h-screen'} ${t.page}`}>
      <header className={`w-full py-4 px-6 ${t.headerBg} ${t.headerBorder}`}>
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href={homeHref} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src="/images/paw-policy-logo.png" alt="Paw Policy" className="h-12 w-auto rounded-xl" />
            <span className={`text-xl font-bold ${t.logoText}`}>Paw Policy</span>
          </Link>
        </div>
      </header>

      <section className={`pt-6 pb-4 md:pt-8 md:pb-5 px-6 ${t.hero}`}>
        <div className="max-w-3xl mx-auto">
          <p className={`text-sm mb-1 ${t.meta}`}>PawPolicy.pro</p>
          <h1 className={`text-3xl md:text-4xl font-extrabold mb-1 ${t.title}`}>{title}</h1>
          {effectiveDate && <p className={`text-sm ${t.meta}`}>Effective Date: {effectiveDate}</p>}
        </div>
      </section>

      <article className={`flex-1 px-6 pt-4 pb-10 md:pt-6 md:pb-12 ${theme === 'dark' ? 'prose-invert' : ''}`}>
        <div className="max-w-3xl mx-auto leading-relaxed">{children}</div>
      </article>

      {phoneFrame ? (
        <footer className="w-full px-5 py-5 bg-[var(--lemonade-light-gray)] border-t border-gray-200 text-center">
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-2">
              <img src="/images/paw-policy-logo.png" alt="Paw Policy" className="h-8 w-auto rounded-lg" />
              <span className="text-base font-bold text-[#4A4A4A]">Paw Policy</span>
            </div>
            <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-[11px] text-[var(--lemonade-gray)]">
              <Link href={`${homeHref}/contact`} className="hover:text-[var(--accent)] transition-colors">Contact Us</Link>
              <span>·</span>
              <Link href={`${homeHref}/terms`} className="hover:text-[var(--accent)] transition-colors">Terms</Link>
              <span>·</span>
              <Link href={`${homeHref}/privacy`} className="hover:text-[var(--accent)] transition-colors">Privacy</Link>
              <span>·</span>
              <Link href={`${homeHref}/ccpa`} className="hover:text-[var(--accent)] transition-colors">CCPA</Link>
            </div>
            <p className="text-[10px] text-[var(--lemonade-gray)] leading-snug">
              &copy; {new Date().getFullYear()} Paw Policy. All rights reserved.
            </p>
          </div>
        </footer>
      ) : (
        <Footer />
      )}
    </div>
  );

  if (phoneFrame) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="w-full max-w-sm bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col min-h-[90vh]">
          {inner}
        </div>
      </div>
    );
  }

  return inner;
}
