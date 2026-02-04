import { Footer, CTAButton, FAQAccordion } from '@/components/shared';

export const metadata = {
  title: 'Pet Insurance for Active Pets | Lemonade',
  description: 'Protect your adventurous pet. Fast claims, any vet, plans from $10/mo.',
};

export default function VideoPage() {
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
      <section className="py-6 md:py-8 px-4">
        <div className="max-w-md mx-auto">
          {/* The Widget Card */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            {/* Badge */}
            <div className="flex justify-center pt-4 pb-2">
              <div className="inline-flex items-center gap-2 bg-[#f5c518] text-[#1a1a1a] px-4 py-1.5 rounded-full font-bold text-xs">
                <span>🏆</span>
                <span>Editor&apos;s Choice 2026 · #1 Pet Insurance</span>
              </div>
            </div>

            {/* Video - Autoplay, muted, looping */}
            <div className="px-3 pb-3">
              <div className="relative w-full h-48 rounded-xl overflow-hidden bg-black">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/images/pets-video-web.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            {/* Content */}
            <div className="px-5 pb-5 text-center">
              {/* Lemonade Logo */}
              <h1 className="font-script text-4xl text-[var(--lemonade-pink)] mb-1">
                Lemonade
              </h1>

              <h2 className="text-lg font-extrabold text-[var(--lemonade-dark)] mb-2">
                For Pets Who Love Adventure
              </h2>

              <p className="text-sm text-[var(--lemonade-gray)] mb-4">
                Accidents happen. Make sure your best friend is covered.
              </p>

              {/* Compact Checkmarks */}
              <div className="space-y-2 mb-4 text-left">
                {[
                  'Accident & illness coverage from $10/mo',
                  'Fast, app-based claims paid in minutes',
                  'Any vet, anywhere in the U.S.',
                  '4.9★ rated by 1M+ pet parents',
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

              {/* CTA Button */}
              <CTAButton size="large" className="w-full text-base py-3">
                See Prices →
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Why Lemonade Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-extrabold text-[var(--lemonade-dark)] text-center mb-3">
            Why Lemonade?
          </h2>
          <p className="text-[var(--lemonade-gray)] text-center mb-8 text-sm">
            What makes them stand out from traditional pet insurers
          </p>

          <div className="grid gap-4">
            {[
              {
                icon: '⚡',
                title: 'Instant Claims',
                desc: 'AI processes claims in seconds. Just snap a photo of your bill.'
              },
              {
                icon: '💰',
                title: 'Fair Pricing',
                desc: 'No hidden fees. Plans starting at $10/month.'
              },
              {
                icon: '📱',
                title: 'Modern App',
                desc: 'Manage your policy and claims all from your phone.'
              },
              {
                icon: '🏥',
                title: 'Any Vet',
                desc: 'Visit any licensed vet in the US. No restrictions.'
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 p-3 bg-gray-50 rounded-xl">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <h3 className="font-bold text-[var(--lemonade-dark)] text-sm">{item.title}</h3>
                  <p className="text-xs text-[var(--lemonade-gray)]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <CTAButton>Get My Free Quote</CTAButton>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-4 bg-[#f5f5f7]">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-extrabold text-[var(--lemonade-dark)] text-center mb-3">
            Common Questions
          </h2>
          <p className="text-[var(--lemonade-gray)] text-center mb-8 text-sm">
            Everything you need to know
          </p>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 px-4 bg-gradient-to-b from-[var(--lemonade-pink)] to-pink-600">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-2xl font-extrabold text-white mb-3">
            Ready to protect your pet?
          </h2>
          <p className="text-pink-100 mb-6 text-sm">
            Join over 1 million pet parents who trust Lemonade.
          </p>
          <CTAButton variant="secondary" size="large" className="bg-white hover:bg-gray-100">
            See Prices →
          </CTAButton>
        </div>
      </section>

      <Footer />
    </div>
  );
}
