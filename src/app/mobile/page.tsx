import Image from 'next/image';
import { CTAButton } from '@/components/shared';

export const metadata = {
  title: 'Get Pet Insurance | Paw Policy',
  description: 'Protect your pet with affordable pet insurance. Fast claims, any vet, plans from $10/mo.',
};

export default function MobilePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col min-h-[90vh]">
        {/* App-like Header */}
        <header className="flex items-center justify-center gap-2 py-3 border-b border-gray-100">
          <img src="/images/paw-policy-logo.png" alt="Paw Policy" className="h-8 w-auto rounded-lg" />
          <span className="text-lg font-bold text-[var(--lemonade-dark)]">Paw Policy</span>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col px-5 py-5">
          {/* Hero Image */}
          <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-5">
            <Image
              src="/images/happy-dog.jpg"
              alt="Happy dog"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute top-3 left-3">
              <span className="inline-flex items-center gap-1 bg-[#f5c518] text-[#1a1a1a] px-3 py-1 rounded-full font-bold text-xs shadow-md">
                🏆 #1 Rated
              </span>
            </div>
          </div>

          {/* Value Prop */}
          <div className="text-center mb-5">
            <h1 className="text-xl font-extrabold text-[var(--lemonade-dark)] mb-1">
              Pet insurance that actually pays
            </h1>
            <p className="text-[var(--lemonade-gray)] text-sm">
              Cover your furry friend for less than a coffee a day
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-4 gap-2 mb-5 bg-gray-50 rounded-xl p-3">
            <div className="text-center">
              <div className="text-lg font-bold text-[var(--primary)]">$10</div>
              <div className="text-[10px] text-[var(--lemonade-gray)]">From/mo</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-[var(--primary)]">4.9★</div>
              <div className="text-[10px] text-[var(--lemonade-gray)]">App Store</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-[var(--primary)]">~50%</div>
              <div className="text-[10px] text-[var(--lemonade-gray)]">Instant claims</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-[var(--primary)]">Any</div>
              <div className="text-[10px] text-[var(--lemonade-gray)]">Vet in US</div>
            </div>
          </div>

          {/* Cost Comparison */}
          <div className="flex gap-3 mb-5">
            <div className="flex-1 bg-red-50 border border-red-200 rounded-xl p-3 text-center">
              <div className="text-[10px] text-red-600 font-medium mb-1">Without insurance</div>
              <div className="text-xl font-extrabold text-red-600">$3,000+</div>
              <div className="text-[10px] text-[var(--lemonade-gray)]">Avg. surgery</div>
            </div>
            <div className="flex-1 bg-green-50 border border-green-200 rounded-xl p-3 text-center">
              <div className="text-[10px] text-green-600 font-medium mb-1">With insurance</div>
              <div className="text-xl font-extrabold text-green-600">$10/mo</div>
              <div className="text-[10px] text-[var(--lemonade-gray)]">Starting at</div>
            </div>
          </div>

          {/* Key benefits */}
          <div className="space-y-2 mb-5">
            {[
              'Accidents & illness coverage',
              'Any licensed vet in the U.S.',
              '70-90% of vet bills reimbursed',
              'Cancel anytime, no fees',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
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
      </div>
    </div>
  );
}
