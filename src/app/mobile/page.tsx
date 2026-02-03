import Image from 'next/image';
import { CTAButton } from '@/components/shared';

export const metadata = {
  title: 'Get Pet Insurance | Lemonade',
  description: 'Protect your pet with Lemonade. Fast claims, any vet, plans from $10/mo.',
};

export default function MobilePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* App-like Header */}
      <header className="flex items-center justify-center py-4 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🍋</span>
          <span className="font-script text-2xl text-[var(--lemonade-pink)]">Lemonade</span>
        </div>
      </header>

      {/* Main Content - Fits viewport */}
      <main className="flex-1 flex flex-col px-6 py-6">
        {/* Hero Image */}
        <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-6">
          <Image
            src="/images/happy-dog.jpg"
            alt="Happy dog"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center gap-1 bg-[#f5c518] text-[#1a1a1a] px-3 py-1 rounded-full font-bold text-xs">
              🏆 #1 Rated
            </span>
          </div>
        </div>

        {/* Simple Value Prop */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-extrabold text-[var(--lemonade-dark)] mb-2">
            Pet insurance that actually pays
          </h1>
          <p className="text-[var(--lemonade-gray)] text-sm">
            Cover your furry friend for less than a coffee a day
          </p>
        </div>

        {/* Quick Stats */}
        <div className="flex justify-between mb-6 px-2">
          <div className="text-center">
            <div className="text-xl font-bold text-[var(--lemonade-pink)]">$10</div>
            <div className="text-xs text-[var(--lemonade-gray)]">From/mo</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-[var(--lemonade-pink)]">4.9★</div>
            <div className="text-xs text-[var(--lemonade-gray)]">App Store</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-[var(--lemonade-pink)]">3 sec</div>
            <div className="text-xs text-[var(--lemonade-gray)]">Claims</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-[var(--lemonade-pink)]">Any</div>
            <div className="text-xs text-[var(--lemonade-gray)]">Vet</div>
          </div>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Fixed Bottom CTA */}
        <div className="space-y-3">
          <CTAButton size="large" className="w-full py-4 text-lg">
            Get My Price →
          </CTAButton>
          <p className="text-center text-xs text-[var(--lemonade-gray)]">
            Free quote · 90 seconds · No commitment
          </p>
        </div>
      </main>
    </div>
  );
}
