import Image from 'next/image';
import Link from 'next/link';
import { CTAButton } from '@/components/shared';

export const metadata = {
  title: 'Get Pet Insurance | Paw Policy',
  description: 'Protect your pet with affordable pet insurance. Fast claims, any vet, plans from $10/mo.',
};

export default function MobileDarkPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-[#111] rounded-3xl shadow-2xl overflow-hidden flex flex-col min-h-[90vh] ring-1 ring-white/10">
        {/* App-like Header */}
        <header className="flex items-center justify-center gap-2 py-3 border-b border-white/10">
          <img src="/images/paw-policy-logo.png" alt="Paw Policy" className="h-8 w-auto rounded-lg" />
          <span className="text-lg font-bold text-white">Paw Policy</span>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col px-5 py-5">
          {/* Hero Image */}
          <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-5 ring-1 ring-white/10">
            <Image
              src="/images/happy-dog.jpg"
              alt="Happy dog"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute top-3 left-3">
              <span className="inline-flex items-center gap-1 bg-[#f5c518] text-[#1a1a1a] px-3 py-1 rounded-full font-bold text-xs shadow-md">
                🏆 Top-Rated
              </span>
            </div>
          </div>

          {/* Value Prop */}
          <div className="text-center mb-5">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Image src="/images/lemonade-logo-grey.png" alt="Lemonade" width={130} height={30} className="opacity-80" />
            </div>
            <h1 className="text-xl font-extrabold text-white mb-1">
              Pet insurance that actually pays
            </h1>
            <p className="text-gray-400 text-sm">
              Plans from $10/month, real coverage, simple signup
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-2 mb-5 bg-white/5 rounded-xl p-3 ring-1 ring-white/10">
            <div className="text-center">
              <div className="text-sm font-bold text-white">From $10/month</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-bold text-white">4.9★ App Store</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-bold text-white">~50% handled</div>
              <div className="text-[10px] text-gray-400">in minutes</div>
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
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <svg className="w-3 h-3 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-gray-300 text-sm">{item}</span>
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
            <p className="text-center text-[10px] text-gray-500">
              Free quote · Save up to 90% · Cancel anytime
            </p>
          </div>
        </main>

        {/* Legal Footer */}
        <footer className="border-t border-white/10 px-5 py-3 bg-white/5">
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-[10px] text-gray-400">
            <Link href="/mobile-dark/contact" className="hover:text-white transition-colors">Contact Us</Link>
            <span>·</span>
            <Link href="/mobile-dark/terms" className="hover:text-white transition-colors">Terms</Link>
            <span>·</span>
            <Link href="/mobile-dark/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <span>·</span>
            <Link href="/mobile-dark/ccpa" className="hover:text-white transition-colors">CCPA</Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
