import Image from 'next/image';
import { Footer, CTAButton, FAQAccordion } from '@/components/shared';

export const metadata = {
  title: 'Editor\'s Choice #1 Pet Insurance | Lemonade',
  description: 'Lemonade ranked #1 for value, coverage quality, and claims experience. Get your free quote in 90 seconds.',
};

export default function SimplePage() {
  const faqItems = [
    {
      question: "Why is Lemonade ranked #1?",
      answer: "Lemonade stands out for its combination of competitive pricing, comprehensive coverage, fast app-based claims, and transparent policies. Unlike traditional insurers, there are no confusing fine print or hidden exclusions. Claims are often paid within minutes through their AI-powered system."
    },
    {
      question: "What does Lemonade pet insurance cover?",
      answer: "Lemonade covers accidents (broken bones, cuts, toxic ingestion), illnesses (cancer, diabetes, infections, allergies), diagnostics (X-rays, MRIs, blood tests), treatments (surgery, hospitalization, medications), and emergency care. You can also add wellness packages for routine care like vaccinations and dental cleaning."
    },
    {
      question: "How much does it cost?",
      answer: "Plans start as low as $10/month for basic accident coverage. The average dog policy is around $35/month, and cats average around $20/month. Your exact price depends on your pet's age, breed, location, and the coverage level you choose."
    },
    {
      question: "How fast are claims paid?",
      answer: "Lemonade uses AI to process many claims instantly. About a third of claims are paid within seconds. More complex claims typically take 1-2 business days. You submit claims through the app by taking photos of your vet bill — no paperwork required."
    },
    {
      question: "Can I use any vet?",
      answer: "Yes! Lemonade lets you visit any licensed veterinarian, specialist, or emergency animal hospital in the US. There's no network restriction, so you can keep seeing your current vet or choose a new one."
    },
    {
      question: "Is there a waiting period?",
      answer: "Yes, like all pet insurance. Accidents have a 2-day waiting period. Illnesses have a 14-day waiting period. Cruciate ligament issues have a 6-month waiting period. These waiting periods are standard in the industry and help prevent fraud."
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#f5f5f7]">

      {/* Main Widget Section */}
      <section className="flex-1 py-12 md:py-20 px-4">
        <div className="max-w-lg mx-auto">
          {/* The Widget Card */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            {/* Badge */}
            <div className="flex justify-center pt-6 pb-4">
              <div className="inline-flex items-center gap-2 bg-[#f5c518] text-[#1a1a1a] px-5 py-2 rounded-full font-bold text-sm">
                <span>🏆</span>
                <span>Editor&apos;s Choice 2026 · #1 Pet Insurance Plan</span>
              </div>
            </div>

            {/* Pet Image */}
            <div className="px-4 pb-4">
              <div className="relative w-full h-64 rounded-2xl overflow-hidden">
                <Image
                  src="/images/happy-dog.jpg"
                  alt="Happy dog ready for coverage"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Content */}
            <div className="px-6 pb-8 text-center">
              {/* Lemonade Logo */}
              <h1 className="font-script text-5xl text-[var(--lemonade-pink)] mb-2">
                Lemonade
              </h1>

              <h2 className="text-2xl font-extrabold text-[var(--lemonade-dark)] mb-4">
                Our #1 Pet Insurance Pick of the Year
              </h2>

              <p className="text-[var(--lemonade-gray)] mb-6">
                <span className="text-xl">🐶</span>{' '}
                <strong className="text-[var(--lemonade-dark)]">Your dog deserves real protection</strong>
                {' '}— not fine-print surprises.
              </p>

              <div className="text-left space-y-4 mb-8">
                <p className="text-[var(--lemonade-gray)]">
                  After reviewing today&apos;s leading pet insurers, our editorial team ranked Lemonade as the{' '}
                  <strong className="text-[var(--lemonade-dark)]">clear winner for value, coverage quality, and claims experience.</strong>
                </p>

                <p className="text-[var(--lemonade-gray)]">
                  What stood out most? Lemonade delivers{' '}
                  <strong className="text-[var(--lemonade-dark)]">fast reimbursements, modern app-based claims, and straightforward policies</strong>
                  {' '}that make protecting your pet simple — without inflated premiums.
                </p>

                <p className="text-[var(--lemonade-gray)]">
                  For pet parents who want <strong className="text-[var(--lemonade-dark)]">strong coverage at a fair price</strong>, Lemonade earned our top position by a wide margin.
                </p>
              </div>

              {/* Checkmarks */}
              <div className="space-y-3 mb-8 text-left">
                {[
                  'Robust accident & illness coverage with wellness add-ons available',
                  'Fast, app-based claims and clear, upfront policy language',
                  'Competitive pricing and flexible deductibles to fit your budget',
                  'Highly rated by pet owners and widely trusted across the U.S.',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-[var(--lemonade-gray)] text-sm">{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <CTAButton size="large" className="w-full text-lg py-4">
                See Prices →
              </CTAButton>
            </div>
          </div>

          {/* Trust badges below card */}
          <div className="mt-8 flex justify-center gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-[var(--lemonade-dark)]">4.9★</div>
              <div className="text-xs text-[var(--lemonade-gray)]">App Store</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[var(--lemonade-dark)]">1M+</div>
              <div className="text-xs text-[var(--lemonade-gray)]">Pets Insured</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[var(--lemonade-dark)]">$10</div>
              <div className="text-xs text-[var(--lemonade-gray)]">Plans from</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Lemonade Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-[var(--lemonade-dark)] text-center mb-4">
            Why Lemonade?
          </h2>
          <p className="text-[var(--lemonade-gray)] text-center mb-10">
            What makes them stand out from traditional pet insurers
          </p>

          <div className="grid gap-6">
            {[
              {
                icon: '⚡',
                title: 'Instant Claims',
                desc: 'AI processes claims in seconds. No paperwork, no phone calls. Just snap a photo of your bill in the app.'
              },
              {
                icon: '💰',
                title: 'Fair Pricing',
                desc: 'No hidden fees or surprise rate hikes. What you see is what you get, starting at $10/month.'
              },
              {
                icon: '📱',
                title: 'Modern App Experience',
                desc: 'Manage your policy, file claims, and track reimbursements all from your phone.'
              },
              {
                icon: '🏥',
                title: 'Any Vet, Anywhere',
                desc: 'Visit any licensed vet in the US. No network restrictions, no referrals needed.'
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <h3 className="font-bold text-[var(--lemonade-dark)] mb-1">{item.title}</h3>
                  <p className="text-sm text-[var(--lemonade-gray)]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <CTAButton size="large">Get My Free Quote</CTAButton>
          </div>
        </div>
      </section>

      {/* Simple Coverage Grid */}
      <section className="py-16 px-4 bg-[#f5f5f7]">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-[var(--lemonade-dark)] text-center mb-4">
            What&apos;s Covered
          </h2>
          <p className="text-[var(--lemonade-gray)] text-center mb-10">
            Comprehensive protection for accidents and illnesses
          </p>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: '🦴', label: 'Broken Bones' },
              { icon: '💊', label: 'Medications' },
              { icon: '🔬', label: 'Lab Tests' },
              { icon: '🏥', label: 'Surgery' },
              { icon: '🩺', label: 'Vet Exams' },
              { icon: '🚑', label: 'Emergency Care' },
              { icon: '💉', label: 'Cancer Treatment' },
              { icon: '🩹', label: 'Wound Care' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-4 text-center shadow-sm">
                <span className="text-2xl block mb-2">{item.icon}</span>
                <span className="text-sm font-medium text-[var(--lemonade-dark)]">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-[var(--lemonade-gray)] mb-4">
              Plus: allergies, infections, diabetes, hereditary conditions, and more
            </p>
            <CTAButton>See Full Coverage Details</CTAButton>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-[var(--lemonade-dark)] text-center mb-4">
            Common Questions
          </h2>
          <p className="text-[var(--lemonade-gray)] text-center mb-10">
            Everything you need to know
          </p>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-gradient-to-b from-[var(--lemonade-pink)] to-pink-600">
        <div className="max-w-lg mx-auto text-center">
          <span className="text-5xl block mb-4">🏆</span>
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Ready to protect your pet?
          </h2>
          <p className="text-pink-100 mb-8">
            Join over 1 million pet parents who trust Lemonade. Get your personalized quote in 90 seconds.
          </p>
          <CTAButton variant="secondary" size="large" className="bg-white hover:bg-gray-100">
            See Prices →
          </CTAButton>
          <p className="mt-4 text-sm text-pink-200">
            Free quote · No commitment · Cancel anytime
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
