import { Header, Footer, CTAButton, FAQAccordion, SectionWrapper } from '@/components/shared';
import { DualCTAButtons } from '@/components/specific';

export const metadata = {
  title: 'Pet Insurance Made for Your Pet | Lemonade',
  description: 'Get a personalized quote based on your dog or cat — takes about 2 minutes.',
};

export default function V5PersonalizedPage() {
  const faqItems = [
    { question: "Is it only for dogs?", answer: "No — dogs and cats." },
    { question: "Can I choose my coverage?", answer: "Yes — you customize the plan." },
    { question: "How long does it take?", answer: "Most people finish in about 2 minutes." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--lemonade-dark)] mb-6">
            Pet insurance made for your pet.
          </h1>
          <p className="text-xl text-[var(--lemonade-gray)] mb-8 max-w-2xl mx-auto">
            Get a personalized quote based on your dog or cat — takes about 2 minutes.
          </p>
          <DualCTAButtons
            dogLabel="🐶 Quote for my dog"
            catLabel="🐱 Quote for my cat"
          />
          <p className="mt-6 text-sm text-[var(--lemonade-gray)]">
            Cancel anytime • Any licensed vet
          </p>
        </div>
      </section>

      {/* Why Personalize */}
      <SectionWrapper background="white">
        <h2 className="text-3xl font-bold text-[var(--lemonade-dark)] text-center mb-8">
          Every pet is different — your plan should be too
        </h2>
        <ul className="space-y-4 max-w-xl mx-auto">
          <li className="flex items-start gap-3">
            <span className="text-[var(--lemonade-pink)]">🐾</span>
            <span className="text-[var(--lemonade-gray)]">Puppies vs senior pets have different needs</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[var(--lemonade-pink)]">🐾</span>
            <span className="text-[var(--lemonade-gray)]">Indoor cats vs active dogs = different risks</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[var(--lemonade-pink)]">🐾</span>
            <span className="text-[var(--lemonade-gray)]">Choose coverage that fits your lifestyle</span>
          </li>
        </ul>
        <div className="text-center mt-8">
          <CTAButton>Get personalized quote</CTAButton>
        </div>
      </SectionWrapper>

      {/* What's Covered */}
      <SectionWrapper background="gray">
        <h2 className="text-3xl font-bold text-[var(--lemonade-dark)] text-center mb-8">
          Coverage that helps when things go wrong
        </h2>
        <ul className="space-y-4 max-w-xl mx-auto">
          <li className="flex items-start gap-3">
            <span className="text-green-500">✔</span>
            <span className="text-[var(--lemonade-gray)]">Accidents (unexpected injuries)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-500">✔</span>
            <span className="text-[var(--lemonade-gray)]">Illness (treatments, tests, more)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-500">✔</span>
            <span className="text-[var(--lemonade-gray)]">Optional add-ons depending on plan</span>
          </li>
        </ul>
        <div className="text-center mt-8">
          <CTAButton>See my options</CTAButton>
        </div>
      </SectionWrapper>

      {/* How It Works */}
      <SectionWrapper background="white">
        <h2 className="text-3xl font-bold text-[var(--lemonade-dark)] text-center mb-12">
          Quick, simple, flexible
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: "1", text: "Answer a few questions" },
            { step: "2", text: "Pick your coverage" },
            { step: "3", text: "Visit any licensed vet" },
            { step: "4", text: "Submit a claim easily" },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--lemonade-pink)] text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {item.step}
              </div>
              <p className="text-[var(--lemonade-gray)]">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <CTAButton>Start now</CTAButton>
        </div>
      </SectionWrapper>

      {/* Objection Killer */}
      <SectionWrapper background="gray">
        <h2 className="text-3xl font-bold text-[var(--lemonade-dark)] text-center mb-8">
          You&apos;re in control
        </h2>
        <ul className="space-y-4 max-w-xl mx-auto">
          <li className="flex items-start gap-3">
            <span className="text-green-500">✔</span>
            <span className="text-[var(--lemonade-gray)]">Customize your budget</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-500">✔</span>
            <span className="text-[var(--lemonade-gray)]">Change your plan anytime</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-500">✔</span>
            <span className="text-[var(--lemonade-gray)]">Cancel anytime</span>
          </li>
        </ul>
        <div className="text-center mt-8">
          <CTAButton>Protect my pet</CTAButton>
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper background="white">
        <h2 className="text-3xl font-bold text-[var(--lemonade-dark)] text-center mb-10">
          Frequently Asked Questions
        </h2>
        <FAQAccordion items={faqItems} />
      </SectionWrapper>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-[var(--lemonade-pink)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Get a quote that fits your pet.
          </h2>
          <DualCTAButtons
            dogLabel="🐶 Dog quote"
            catLabel="🐱 Cat quote"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
