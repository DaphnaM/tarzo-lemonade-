'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  showOfficialLink?: boolean;
}

const OFFICIAL_FAQ_URL = "https://www.lemonade.com/pet/explained/lemonade-pet-insurance-faq/";

export default function FAQAccordion({ items, showOfficialLink = true }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="space-y-3">
        {items.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
            >
              <span className="font-medium text-[var(--lemonade-dark)]">{item.question}</span>
              <span className="text-[var(--lemonade-pink)] text-xl">
                {openIndex === index ? '−' : '+'}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 bg-gray-50 text-[var(--lemonade-gray)]">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
      {showOfficialLink && (
        <div className="mt-6 text-center">
          <a
            href={OFFICIAL_FAQ_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--lemonade-pink)] hover:underline font-medium"
          >
            View official Lemonade FAQ →
          </a>
        </div>
      )}
    </div>
  );
}
