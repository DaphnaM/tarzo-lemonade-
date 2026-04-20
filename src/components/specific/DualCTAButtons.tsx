'use client';

import { CTA_LINK } from '../shared/CTAButton';
import { trackCtaClick } from '@/lib/tracking';

interface DualCTAButtonsProps {
  dogLabel?: string;
  catLabel?: string;
}

export default function DualCTAButtons({
  dogLabel = "🐶 Quote for my dog",
  catLabel = "🐱 Quote for my cat"
}: DualCTAButtonsProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href={CTA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        onClick={trackCtaClick}
        className="inline-block px-8 py-4 text-lg font-semibold rounded-full bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)] hover:shadow-lg transition-all duration-200 text-center"
        suppressHydrationWarning
      >
        {dogLabel}
      </a>
      <a
        href={CTA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        onClick={trackCtaClick}
        className="inline-block px-8 py-4 text-lg font-semibold rounded-full bg-white text-[var(--accent)] border-2 border-[var(--accent)] hover:bg-orange-50 transition-all duration-200 text-center"
        suppressHydrationWarning
      >
        {catLabel}
      </a>
    </div>
  );
}
