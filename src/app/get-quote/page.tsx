import { Header, Footer, CTAButton, TrustStrip, FAQAccordion, TestimonialCard, SectionWrapper } from '@/components/shared';

export const metadata = {
  title: 'Pet Insurance in 90 Seconds | Lemonade',
  description: 'Protect your dog or cat today — customize your plan in minutes. No phone calls. Cancel anytime.',
};

export default function V1SpeedPage() {
  const faqItems = [
    { question: "Can I use my current vet?", answer: "Yes — you can visit any licensed vet." },
    { question: "How fast can I get covered?", answer: "You can get a quote and choose coverage in minutes." },
    { question: "Can I cancel anytime?", answer: "Yes — you can cancel anytime." },
    { question: "What does it cover?", answer: "Accidents and illnesses, depending on your plan." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--lemonade-dark)] mb-6">
            Pet insurance in 90 seconds.
          </h1>
          <p className="text-xl text-[var(--lemonade-gray)] mb-8 max-w-2xl mx-auto">
            Protect your dog or cat today — customize your plan in minutes.
          </p>
          <CTAButton size="large">Get my quote</CTAButton>
          <p className="mt-4 text-sm text-[var(--lemonade-gray)]">
            No phone calls. Cancel anytime.
          </p>
          <div className="mt-8">
            <TrustStrip items={["Any licensed vet", "Fast claims", "Plans you control"]} />
          </div>
        </div>
      </section>

      {/* Why Pet Parents Get Insurance */}
      <SectionWrapper background="white">
        <h2 className="text-3xl font-bold text-[var(--lemonade-dark)] text-center mb-8">
          Vet bills can get expensive fast
        </h2>
        <ul className="space-y-4 max-w-xl mx-auto">
          <li className="flex items-start gap-3">
            <span className="text-[var(--lemonade-pink)] text-xl">•</span>
            <span className="text-[var(--lemonade-gray)]">Emergency visits can cost $500–$3,000+</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[var(--lemonade-pink)] text-xl">•</span>
            <span className="text-[var(--lemonade-gray)]">X-rays, bloodwork, and surgery add up quickly</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[var(--lemonade-pink)] text-xl">•</span>
            <span className="text-[var(--lemonade-gray)]">One surprise visit can ruin a month&apos;s budget</span>
          </li>
        </ul>
        <div className="text-center mt-8">
          <CTAButton>See my price</CTAButton>
        </div>
      </SectionWrapper>

      {/* How It Works */}
      <SectionWrapper background="gray">
        <h2 className="text-3xl font-bold text-[var(--lemonade-dark)] text-center mb-12">
          Easy from start to reimbursement
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: "1", text: "Get a quote in 90 seconds" },
            { step: "2", text: "Visit any licensed vet" },
            { step: "3", text: "Submit a claim in minutes" },
            { step: "4", text: "Get reimbursed (based on your plan)" },
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
          <CTAButton>Get started</CTAButton>
        </div>
      </SectionWrapper>

      {/* Customize Your Plan */}
      <SectionWrapper background="white">
        <h2 className="text-3xl font-bold text-[var(--lemonade-dark)] text-center mb-8">
          Only pay for what you need
        </h2>
        <ul className="space-y-4 max-w-xl mx-auto">
          <li className="flex items-start gap-3">
            <span className="text-green-500">✔</span>
            <span className="text-[var(--lemonade-gray)]">Choose your coverage level</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-500">✔</span>
            <span className="text-[var(--lemonade-gray)]">Adjust deductible & reimbursement</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-500">✔</span>
            <span className="text-[var(--lemonade-gray)]">Add extra protection if you want</span>
          </li>
        </ul>
        <div className="text-center mt-8">
          <CTAButton>Build my plan</CTAButton>
        </div>
      </SectionWrapper>

      {/* Social Proof */}
      <SectionWrapper background="gray">
        <h2 className="text-3xl font-bold text-[var(--lemonade-dark)] text-center mb-10">
          Loved by pet parents
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <TestimonialCard quote="Super easy to set up and understand." />
          <TestimonialCard quote="Claim process was smooth." />
          <TestimonialCard quote="Finally something that feels modern." />
        </div>
        <div className="text-center mt-10">
          <CTAButton>Get my quote</CTAButton>
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
            Ready to protect your pet?
          </h2>
          <CTAButton variant="secondary" size="large">Get my quote</CTAButton>
        </div>
      </section>

      <Footer />
    </div>
  );
}
