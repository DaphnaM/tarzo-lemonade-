import { Header, Footer, CTAButton, FAQAccordion, SectionWrapper } from '@/components/shared';
import { CostCard } from '@/components/specific';

export const metadata = {
  title: 'Don\'t Wait for the First Emergency | Lemonade Pet Insurance',
  description: 'One emergency vet visit can cost more than a year of pet insurance. Be ready for the unexpected.',
};

export default function V2UrgencyPage() {
  const faqItems = [
    { question: "Is this only for emergencies?", answer: "No — many plans cover accidents + illnesses." },
    { question: "Is it complicated?", answer: "Not at all. Most people finish in minutes." },
    { question: "What pets can be covered?", answer: "Dogs and cats." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-red-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--lemonade-dark)] mb-6 leading-tight">
            One emergency vet visit can cost more than a year of pet insurance.
          </h1>
          <p className="text-xl text-[var(--lemonade-gray)] mb-8 max-w-2xl mx-auto">
            Be ready for the unexpected — protect your pet without stressing about money.
          </p>
          <CTAButton size="large">Protect my pet</CTAButton>
          <p className="mt-4 text-sm text-[var(--lemonade-gray)]">
            Quote takes ~2 minutes.
          </p>
        </div>
      </section>

      {/* Real-Life Costs */}
      <SectionWrapper background="white">
        <h2 className="text-3xl font-bold text-[var(--lemonade-dark)] text-center mb-10">
          What pet parents pay without insurance
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <CostCard title="Emergency exam" priceRange="$200–$500" />
          <CostCard title="X-rays" priceRange="$300–$1,000" />
          <CostCard title="Surgery" priceRange="$1,500–$6,000" />
          <CostCard title="Overnight care" priceRange="$500–$2,000+" />
        </div>
        <div className="text-center mt-10">
          <CTAButton>See my quote</CTAButton>
        </div>
      </SectionWrapper>

      {/* Peace of Mind Benefits */}
      <SectionWrapper background="gray">
        <h2 className="text-3xl font-bold text-[var(--lemonade-dark)] text-center mb-8">
          So you can say &ldquo;yes&rdquo; to care
        </h2>
        <ul className="space-y-4 max-w-xl mx-auto">
          <li className="flex items-start gap-3">
            <span className="text-green-500">✔</span>
            <span className="text-[var(--lemonade-gray)]">Help cover accidents + illnesses</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-500">✔</span>
            <span className="text-[var(--lemonade-gray)]">Choose the plan that fits your budget</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-500">✔</span>
            <span className="text-[var(--lemonade-gray)]">Use any licensed vet</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-500">✔</span>
            <span className="text-[var(--lemonade-gray)]">Easy claims process</span>
          </li>
        </ul>
        <div className="text-center mt-8">
          <CTAButton>Get covered</CTAButton>
        </div>
      </SectionWrapper>

      {/* How It Works */}
      <SectionWrapper background="white">
        <h2 className="text-3xl font-bold text-[var(--lemonade-dark)] text-center mb-12">
          Coverage that fits real life
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: "1", text: "Pick your plan" },
            { step: "2", text: "Go to the vet" },
            { step: "3", text: "Submit claim" },
            { step: "4", text: "Get reimbursed" },
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

      {/* Objection Handling */}
      <SectionWrapper background="gray">
        <h2 className="text-3xl font-bold text-[var(--lemonade-dark)] text-center mb-8">
          You stay in control
        </h2>
        <ul className="space-y-4 max-w-xl mx-auto">
          <li className="flex items-start gap-3">
            <span className="text-green-500">✔</span>
            <span className="text-[var(--lemonade-gray)]">Adjust coverage anytime</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-500">✔</span>
            <span className="text-[var(--lemonade-gray)]">Cancel anytime</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-500">✔</span>
            <span className="text-[var(--lemonade-gray)]">No confusing paperwork to start</span>
          </li>
        </ul>
        <div className="text-center mt-8">
          <CTAButton>Get my price</CTAButton>
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
            Don&apos;t wait until after the first emergency.
          </h2>
          <CTAButton variant="secondary" size="large">Protect my pet</CTAButton>
        </div>
      </section>

      <Footer />
    </div>
  );
}
