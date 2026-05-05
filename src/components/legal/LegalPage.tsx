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

      <section className={`py-12 md:py-16 px-6 ${t.hero}`}>
        <div className="max-w-3xl mx-auto">
          <p className={`text-sm mb-2 ${t.meta}`}>PawPolicy.pro</p>
          <h1 className={`text-3xl md:text-4xl font-extrabold mb-2 ${t.title}`}>{title}</h1>
          {effectiveDate && <p className={`text-sm ${t.meta}`}>Effective Date: {effectiveDate}</p>}
        </div>
      </section>

      <article className={`flex-1 px-6 py-10 md:py-12 ${theme === 'dark' ? 'prose-invert' : ''}`}>
        <div className="max-w-3xl mx-auto leading-relaxed">{children}</div>
      </article>

      <Footer />
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
