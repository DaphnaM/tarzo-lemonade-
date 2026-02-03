import { Header, Footer, CTAButton, ProofStrip, FAQAccordion, TestimonialCard, SectionWrapper } from '@/components/shared';

export const metadata = {
  title: 'Pet Insurance You Can Trust | Lemonade',
  description: 'Clear coverage. Easy claims. Real peace of mind for pet parents.',
};

export default function V4TrustPage() {
  const faqItems = [
    { question: "Can I go to any vet?", answer: "Yes — any licensed vet." },
    { question: "Is it easy to manage?", answer: "Yes, you can manage your plan and claims digitally." },
    { question: "Can I cancel?", answer: "Yes, anytime." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--lemonade-dark)] mb-6">
            Pet insurance you can actually trust.
          </h1>
          <p className="text-xl text-[var(--lemonade-gray)] mb-8 max-w-2xl mx-auto">
            Clear coverage. Easy claims. Real peace of mind for pet parents.
          </p>
          <CTAButton size="large">Get my quote</CTAButton>
          <p className="mt-4 text-sm text-[var(--lemonade-gray)]">
            Any licensed vet • Cancel anytime
          </p>
          <div className="mt-8">
            <ProofStrip
              rating="⭐️⭐️⭐️⭐️⭐️"
              highlights={["Rated highly by pet parents", "Fast setup", "Flexible plans"]}
            />
          </div>
        </div>
      </section>

      {/* Why People Choose It */}
      <SectionWrapper background="white">
        <h2 className="text-3xl font-bold text-[var(--lemonade-dark)] text-center mb-8">
          Designed to be simple
        </h2>
        <ul className="space-y-4 max-w-xl mx-auto">
          <li className="flex items-start gap-3">
            <span className="text-green-500">✔</span>
            <span className="text-[var(--lemonade-gray)]">No confusing coverage language</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-500">✔</span>
            <span className="text-[var(--lemonade-gray)]">Easy quote + easy plan changes</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-500">✔</span>
            <span className="text-[var(--lemonade-gray)]">Claims designed for real life</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-500">✔</span>
            <span className="text-[var(--lemonade-gray)]">Works with your current vet</span>
          </li>
        </ul>
        <div className="text-center mt-8">
          <CTAButton>Start my quote</CTAButton>
        </div>
      </SectionWrapper>

      {/* Social Proof Block */}
      <SectionWrapper background="gray">
        <h2 className="text-3xl font-bold text-[var(--lemonade-dark)] text-center mb-10">
          Pet parents say it best
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <TestimonialCard quote="The signup took 2 minutes." />
          <TestimonialCard quote="I loved being able to customize my plan." />
          <TestimonialCard quote="The whole experience felt simple and modern." />
        </div>
        <div className="text-center mt-10">
          <CTAButton>Get my price</CTAButton>
        </div>
      </SectionWrapper>

      {/* How Reimbursement Works */}
      <SectionWrapper background="white">
        <h2 className="text-3xl font-bold text-[var(--lemonade-dark)] text-center mb-8">
          You choose your coverage
        </h2>
        <ul className="space-y-4 max-w-xl mx-auto">
          <li className="flex items-start gap-3">
            <span className="text-[var(--lemonade-pink)] font-bold">→</span>
            <span className="text-[var(--lemonade-gray)]">Choose deductible</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[var(--lemonade-pink)] font-bold">→</span>
            <span className="text-[var(--lemonade-gray)]">Choose reimbursement rate</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[var(--lemonade-pink)] font-bold">→</span>
            <span className="text-[var(--lemonade-gray)]">Choose annual limit (depending on plan)</span>
          </li>
        </ul>
        <div className="text-center mt-8">
          <CTAButton>Customize my plan</CTAButton>
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper background="gray">
        <h2 className="text-3xl font-bold text-[var(--lemonade-dark)] text-center mb-10">
          Frequently Asked Questions
        </h2>
        <FAQAccordion items={faqItems} />
      </SectionWrapper>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-[var(--lemonade-pink)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Get peace of mind today.
          </h2>
          <CTAButton variant="secondary" size="large">Get my quote</CTAButton>
        </div>
      </section>

      <Footer />
    </div>
  );
}
