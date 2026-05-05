import Image from 'next/image';
import Link from 'next/link';
import { CTAButton } from '@/components/shared';

export const metadata = {
  title: 'Multi-Pet Insurance | Paw Policy',
  description: 'Protect every pet in your family with affordable insurance. Fast claims, any vet, plans from $10/mo.',
};

export default function MobileFamilyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 via-orange-100 to-yellow-200 flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col min-h-[90vh]">
        {/* App-like Header */}
        <header className="flex items-center justify-center gap-2 py-3 border-b border-amber-100">
          <img src="/images/paw-policy-logo.png" alt="Paw Policy" className="h-8 w-auto rounded-lg" />
          <span className="text-lg font-bold text-[#4A4A4A]">Paw Policy</span>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col px-5 py-5">
          {/* Hero Image */}
          <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-5">
            <Image
              src="/images/family-pet.jpg"
              alt="Family with their pets"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute top-3 right-3">
              <span className="inline-flex items-center gap-1 bg-amber-500 text-white px-3 py-1 rounded-full font-bold text-xs shadow-md">
                🏡 Multi-Pet
              </span>
            </div>
          </div>

          {/* Value Prop */}
          <div className="text-center mb-5">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Image src="/images/lemonade-logo-grey.png" alt="Lemonade" width={130} height={30} />
            </div>
            <h1 className="text-xl font-extrabold text-[var(--lemonade-dark)] mb-1">
              Protect every pet in your family
            </h1>
            <p className="text-[var(--lemonade-gray)] text-sm">
              Plans from $10/month, real coverage, simple signup
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-2 mb-5 bg-amber-50 rounded-xl p-3">
            <div className="text-center">
              <div className="text-sm font-bold text-[var(--lemonade-dark)]">From $10/month</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-bold text-[var(--lemonade-dark)]">4.9★ App Store</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-bold text-[var(--lemonade-dark)]">~50% handled</div>
              <div className="text-[10px] text-[var(--lemonade-gray)]">in minutes</div>
            </div>
          </div>

          {/* Key benefits */}
          <div className="space-y-2 mb-5">
            {[
              'Accident & illness coverage from $10/month',
              '~50% of claims handled in minutes via AI',
              'Any vet, anywhere in the U.S.',
              '4.9★ App Store rating (85K+ reviews)',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center">
                  <svg className="w-3 h-3 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
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
          <div className="space-y-2">
            <CTAButton size="large" className="w-full py-4 text-lg">
              Get My Price →
            </CTAButton>
            <p className="text-center text-[10px] text-[var(--lemonade-gray)]">
              Free quote · Save up to 90% · Cancel anytime
            </p>
          </div>
        </main>

        {/* Legal Footer */}
        <footer className="border-t border-amber-100 px-5 py-3 bg-amber-50">
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-[10px] text-[var(--lemonade-gray)]">
            <Link href="/mobile-family/contact" className="hover:text-amber-600 transition-colors">Contact Us</Link>
            <span>·</span>
            <Link href="/mobile-family/terms" className="hover:text-amber-600 transition-colors">Terms</Link>
            <span>·</span>
            <Link href="/mobile-family/privacy" className="hover:text-amber-600 transition-colors">Privacy</Link>
            <span>·</span>
            <Link href="/mobile-family/ccpa" className="hover:text-amber-600 transition-colors">CCPA</Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
