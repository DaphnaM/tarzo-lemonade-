import Image from 'next/image';
import Link from 'next/link';
import { CTAButton } from '@/components/shared';

export const metadata = {
  title: 'Get Pet Insurance | Paw Policy',
  description: 'Protect your pet with affordable pet insurance. Fast claims, any vet, plans from $10/mo.',
};

export default function MobileMinimalPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-sm flex flex-col min-h-[90vh]">
        {/* Full-bleed Hero Image */}
        <div className="relative w-full h-[55vh] rounded-3xl overflow-hidden mb-6">
          <Image
            src="/images/happy-dog.jpg"
            alt="Happy dog"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Logo overlay */}
          <header className="absolute top-4 left-0 right-0 flex items-center justify-center gap-2">
            <img src="/images/paw-policy-logo.png" alt="Paw Policy" className="h-8 w-auto rounded-lg" />
            <span className="text-lg font-bold text-white drop-shadow">Paw Policy</span>
          </header>

          {/* Headline overlay */}
          <div className="absolute bottom-5 left-5 right-5 text-white">
            <Image src="/images/lemonade-logo-grey.png" alt="Lemonade" width={110} height={26} className="invert brightness-0 mb-3 opacity-90" />
            <h1 className="text-2xl font-extrabold leading-tight mb-1">
              Pet insurance that actually pays.
            </h1>
            <p className="text-sm text-white/80">
              From $10/month · Any vet · ~50% handled in minutes
            </p>
          </div>
        </div>

        {/* Key benefits */}
        <div className="px-2 space-y-2 mb-5">
          {[
            'Accident & illness coverage from $10/month',
            '~50% of claims handled in minutes via AI',
            'Any vet, anywhere in the U.S.',
            '4.9★ App Store rating (85K+ reviews)',
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-900 flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span className="text-[var(--lemonade-gray)] text-sm">{item}</span>
            </div>
          ))}
        </div>

        {/* Spacer */}
        <div className="flex-1 min-h-4" />

        {/* Bottom CTA */}
        <div className="space-y-2 px-2">
          <CTAButton size="large" className="w-full py-4 text-lg">
            Get My Price →
          </CTAButton>
          <p className="text-center text-[10px] text-[var(--lemonade-gray)]">
            Free quote · Save up to 90% · Cancel anytime
          </p>
        </div>

        {/* Legal Footer */}
        <footer className="mt-6 pt-4 px-2 border-t border-gray-100">
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-[10px] text-[var(--lemonade-gray)]">
            <Link href="/mobile-minimal/contact" className="hover:text-[var(--accent)] transition-colors">Contact Us</Link>
            <span>·</span>
            <Link href="/mobile-minimal/terms" className="hover:text-[var(--accent)] transition-colors">Terms</Link>
            <span>·</span>
            <Link href="/mobile-minimal/privacy" className="hover:text-[var(--accent)] transition-colors">Privacy</Link>
            <span>·</span>
            <Link href="/mobile-minimal/ccpa" className="hover:text-[var(--accent)] transition-colors">CCPA</Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
