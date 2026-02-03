import { Header, Footer, CTAButton, FAQAccordion, SectionWrapper } from '@/components/shared';
import { ComparisonTable, PlanTierCard } from '@/components/specific';

export const metadata = {
  title: 'Affordable Pet Insurance | Lemonade',
  description: 'Big protection, small monthly cost. Get a quote instantly and customize your plan in minutes.',
};

export default function V3BudgetPage() {
  const faqItems = [
    { question: "Can I change my plan later?", answer: "Yes, you can adjust coverage anytime." },
    { question: "How much does it cost?", answer: "It depends on your pet and plan — you'll see a price instantly." },
    { question: "Do I need vet records to start?", answer: "Usually not to begin the quote." },
  ];

  const features = [
    { name: "Accidents", included: true },
    { name: "Illness", included: true },
    { name: "Use any licensed vet", included: true },
    { name: "Custom deductible", included: true },
    { name: "Custom reimbursement", included: true },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--lemonade-dark)] mb-6">
            Affordable pet insurance that fits your budget.
          </h1>
          <p className="text-xl text-[var(--lemonade-gray)] mb-8 max-w-2xl mx-auto">
            Get a quote instantly and customize your plan in minutes.
          </p>
          <CTAButton size="large">See my price</CTAButton>
          <p className="mt-4 text-sm text-[var(--lemonade-gray)]">
            Cancel anytime • No phone calls
          </p>
        </div>
      </section>

      {/* What You Get */}
      <SectionWrapper background="white">
        <h2 className="text-3xl font-bold text-[var(--lemonade-dark)] text-center mb-8">
          Big protection, small monthly cost
        </h2>
        <ul className="space-y-4 max-w-xl mx-auto">
          <li className="flex items-start gap-3">
            <span className="text-green-500">✔</span>
            <span className="text-[var(--lemonade-gray)]">Coverage for accidents & illnesses</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-500">✔</span>
            <span className="text-[var(--lemonade-gray)]">Any licensed vet</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-500">✔</span>
            <span className="text-[var(--lemonade-gray)]">Simple claims process</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-500">✔</span>
            <span className="text-[var(--lemonade-gray)]">Flexible plan options</span>
          </li>
        </ul>
        <div className="text-center mt-8">
          <CTAButton>Get my quote</CTAButton>
        </div>
      </SectionWrapper>

      {/* Plan Builder */}
      <SectionWrapper background="gray">
        <h2 className="text-3xl font-bold text-[var(--lemonade-dark)] text-center mb-10">
          Pick the plan that works for you
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PlanTierCard
            name="Budget Plan"
            description="Lower monthly cost for basic protection"
          />
          <PlanTierCard
            name="Balanced Plan"
            description="Solid protection at a fair price"
            highlight={true}
          />
          <PlanTierCard
            name="Premium Plan"
            description="Higher coverage, fewer surprises"
          />
        </div>
        <div className="text-center mt-10">
          <CTAButton>Build my plan</CTAButton>
        </div>
      </SectionWrapper>

      {/* Comparison Table */}
      <SectionWrapper background="white">
        <h2 className="text-3xl font-bold text-[var(--lemonade-dark)] text-center mb-10">
          What makes a good pet insurance plan?
        </h2>
        <ComparisonTable features={features} />
        <div className="text-center mt-10">
          <CTAButton>See my options</CTAButton>
        </div>
      </SectionWrapper>

      {/* Trust Builder */}
      <SectionWrapper background="gray">
        <h2 className="text-3xl font-bold text-[var(--lemonade-dark)] text-center mb-8">
          Built for modern pet parents
        </h2>
        <ul className="space-y-4 max-w-xl mx-auto">
          <li className="flex items-start gap-3">
            <span className="text-green-500">✔</span>
            <span className="text-[var(--lemonade-gray)]">Quick quote flow</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-500">✔</span>
            <span className="text-[var(--lemonade-gray)]">Easy to manage your plan</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-500">✔</span>
            <span className="text-[var(--lemonade-gray)]">Clear coverage choices</span>
          </li>
        </ul>
        <div className="text-center mt-8">
          <CTAButton>Get started</CTAButton>
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
            See your price in minutes.
          </h2>
          <CTAButton variant="secondary" size="large">See my price</CTAButton>
        </div>
      </section>

      <Footer />
    </div>
  );
}
