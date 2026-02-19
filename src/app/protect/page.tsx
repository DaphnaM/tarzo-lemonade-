import Image from 'next/image';
import { Footer, CTAButton, FAQAccordion, SectionWrapper } from '@/components/shared';
import { CostCard } from '@/components/specific';

export const metadata = {
  title: 'Don\'t Wait for the Emergency | Lemonade Pet Insurance',
  description: 'One emergency vet visit can cost more than a year of pet insurance. Be ready for the unexpected.',
};

export default function ProtectPage() {
  const faqItems = [
    {
      question: "What qualifies as an emergency?",
      answer: "Emergencies include sudden injuries (hit by car, broken bones, lacerations), toxic ingestion (chocolate, medications, plants), breathing difficulties, seizures, severe vomiting/diarrhea, inability to urinate, and collapse. Lemonade covers all of these under the accident and illness policy."
    },
    {
      question: "How quickly does coverage start?",
      answer: "Accident coverage starts immediately at 12:01 AM the day after you purchase your policy — no waiting period. For illnesses, there's a 14-day waiting period. Cruciate ligament issues (like ACL tears) have a 6-month waiting period."
    },
    {
      question: "What if my pet needs surgery?",
      answer: "Surgery is fully covered under the base accident and illness plan. This includes emergency surgeries, orthopedic procedures, tumor removals, and other necessary surgical interventions. You'll be reimbursed 70-90% depending on your plan."
    },
    {
      question: "How much could I actually save?",
      answer: "With emergency visits costing $800-$1,500 and surgeries ranging from $3,000-$7,000, a single incident can exceed 2-3 years of premiums. If your dog needs a $5,000 surgery and you have 80% reimbursement with a $250 deductible, Lemonade would pay $3,800."
    },
    {
      question: "Can I go to any emergency vet?",
      answer: "Yes! Lemonade works with any licensed veterinarian — including 24-hour emergency hospitals, specialty clinics, and university veterinary hospitals. You're never restricted to a network."
    },
    {
      question: "How do I file a claim after an emergency?",
      answer: "Open the Lemonade app, tap 'File a Claim,' take a photo of your itemized vet bill, and briefly describe what happened. Many pet claims are paid instantly by AI. Reimbursement goes directly to your bank account."
    },
    {
      question: "What if I can't afford the upfront vet bill?",
      answer: "Many emergency vets offer payment plans or accept CareCredit. Once you pay and file your claim with Lemonade, reimbursement typically arrives within days (sometimes hours)."
    },
    {
      question: "Is it too late if my pet already has health issues?",
      answer: "Pre-existing conditions won't be covered, but NEW accidents and illnesses will be. Plus, if a curable condition is symptom-free for 12 months, it may become eligible again. The best time to get coverage is when your pet is healthy."
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-6 bg-gradient-to-b from-red-50 to-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <span className="inline-block px-4 py-1 bg-red-100 text-red-600 rounded-full text-sm font-bold mb-6">
              ⚠️ 1 in 3 pets need emergency care each year
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[var(--lemonade-dark)] mb-6 leading-tight">
              One emergency vet visit can cost more than <span className="text-[var(--lemonade-pink)]">a full year</span> of pet insurance.
            </h1>
            <p className="text-xl text-[var(--lemonade-gray)] mb-8 max-w-lg">
              In 2024, 37% of pet owners went into debt from unexpected vet bills. Don&apos;t let a medical emergency become a financial one.
            </p>
            <CTAButton size="large">Protect My Pet Now</CTAButton>
            <p className="mt-4 text-sm text-[var(--lemonade-gray)]">
              Save up to 90% on vet bills • Coverage starts tomorrow
            </p>
          </div>
          <div className="relative">
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/vet-dog.jpg"
                alt="Dog receiving veterinary care"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 max-w-[200px]">
              <p className="text-xs text-[var(--lemonade-gray)]">Average emergency surgery</p>
              <p className="text-2xl font-extrabold text-red-500">$3,000–$7,000</p>
            </div>
          </div>
        </div>
      </section>

      {/* Shocking Stats Bar */}
      <section className="py-8 bg-red-600">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { stat: "37%", label: "of pet owners went into debt from vet bills in 2024" },
            { stat: "$800–$1,500", label: "average cost of an emergency vet visit" },
            { stat: "6.1%", label: "increase in vet costs in the past year alone" },
          ].map((item) => (
            <div key={item.label}>
              <div className="text-3xl md:text-4xl font-extrabold text-white">{item.stat}</div>
              <div className="text-sm text-red-100 mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Real-Life Costs */}
      <SectionWrapper background="white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--lemonade-dark)] mb-4">
            What pet parents pay <span className="text-red-500">without</span> insurance
          </h2>
          <p className="text-lg text-[var(--lemonade-gray)] max-w-2xl mx-auto">
            These are real costs from veterinary clinics across the US. One bad day can wipe out months of savings.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <CostCard title="Emergency exam + diagnostics" priceRange="$800–$1,500" />
          <CostCard title="X-rays, MRI, CT scan" priceRange="$1,000–$3,000" />
          <CostCard title="Foreign object surgery" priceRange="$3,000–$5,000" />
          <CostCard title="ACL/ligament repair" priceRange="$3,500–$7,000" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mt-6">
          <CostCard title="Broken leg surgery" priceRange="$2,000–$5,000" />
          <CostCard title="Bloat surgery (GDV)" priceRange="$3,000–$7,500" />
          <CostCard title="Cancer treatment" priceRange="$5,000–$10,000+" />
          <CostCard title="Overnight hospitalization" priceRange="$1,000–$3,000" />
        </div>
        <div className="text-center mt-10 p-6 bg-green-50 rounded-xl max-w-2xl mx-auto">
          <p className="text-lg text-[var(--lemonade-dark)]">
            <span className="font-bold">With Lemonade:</span> Get <span className="text-[var(--lemonade-pink)] font-bold">70-90%</span> of these costs covered.
          </p>
          <p className="text-sm text-[var(--lemonade-gray)] mt-2">
            Average monthly premium: ~$35 for dogs, ~$20 for cats
          </p>
        </div>
        <div className="text-center mt-8">
          <CTAButton>See My Price</CTAButton>
        </div>
      </SectionWrapper>

      {/* Real Stories */}
      <SectionWrapper background="gray">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--lemonade-dark)] text-center mb-4">
          Real emergencies. Real coverage.
        </h2>
        <p className="text-lg text-[var(--lemonade-gray)] text-center mb-12 max-w-2xl mx-auto">
          These are actual scenarios Lemonade customers have faced
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              pet: "🐕 Max, 3-year-old Lab",
              incident: "Swallowed a sock, needed emergency surgery",
              bill: "$4,200",
              covered: "$3,700",
              emoji: "🧦"
            },
            {
              pet: "🐈 Luna, 5-year-old tabby",
              incident: "Diagnosed with diabetes, ongoing treatment",
              bill: "$2,800/year",
              covered: "$2,240/year",
              emoji: "💉"
            },
            {
              pet: "🐕 Cooper, 7-year-old Golden",
              incident: "Torn ACL, required surgery + rehab",
              bill: "$6,500",
              covered: "$5,400",
              emoji: "🦴"
            },
          ].map((story) => (
            <div key={story.pet} className="bg-white rounded-xl p-6 shadow-sm">
              <span className="text-4xl mb-4 block">{story.emoji}</span>
              <h3 className="font-bold text-[var(--lemonade-dark)] mb-2">{story.pet}</h3>
              <p className="text-[var(--lemonade-gray)] text-sm mb-4">{story.incident}</p>
              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between mb-2">
                  <span className="text-[var(--lemonade-gray)]">Total bill:</span>
                  <span className="font-bold text-red-500">{story.bill}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--lemonade-gray)]">Lemonade covered:</span>
                  <span className="font-bold text-green-600">{story.covered}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center mt-8 text-sm text-[var(--lemonade-gray)]">
          *Based on 80% reimbursement rate with $250 deductible
        </p>
        <div className="text-center mt-6">
          <CTAButton>Get Protected Today</CTAButton>
        </div>
      </SectionWrapper>

      {/* Peace of Mind */}
      <SectionWrapper background="white">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/happy-dog.jpg"
              alt="Happy healthy dog"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--lemonade-dark)] mb-6">
              So you can say &ldquo;yes&rdquo; to the care they need
            </h2>
            <p className="text-lg text-[var(--lemonade-gray)] mb-6">
              No pet parent should have to choose between their savings and their pet&apos;s health. With Lemonade, you can focus on what matters.
            </p>
            <div className="space-y-4">
              {[
                { title: "No agonizing over costs", desc: "Know you can afford the best treatment" },
                { title: "No draining your emergency fund", desc: "Insurance absorbs the financial shock" },
                { title: "No guilt about treatment decisions", desc: "Give them every chance to recover" },
                { title: "No going into debt", desc: "Predictable monthly cost vs. surprise $5K bill" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <span className="text-green-500 text-xl mt-0.5">✓</span>
                  <div>
                    <span className="font-bold text-[var(--lemonade-dark)]">{item.title}</span>
                    <span className="text-[var(--lemonade-gray)]"> — {item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <CTAButton>Start My Quote</CTAButton>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* How It Works */}
      <SectionWrapper background="gray">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--lemonade-dark)] text-center mb-4">
          If the worst happens, here&apos;s how it works
        </h2>
        <p className="text-lg text-[var(--lemonade-gray)] text-center mb-12 max-w-2xl mx-auto">
          Simple claims. Fast reimbursement. No runaround.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[
            { step: "1", title: "Emergency happens", desc: "Rush to any vet or emergency hospital — your choice" },
            { step: "2", title: "Get treatment", desc: "Focus on your pet. Pay the vet bill (keep the receipt)" },
            { step: "3", title: "File a claim", desc: "Open the app, snap a photo, submit in 2 minutes" },
            { step: "4", title: "Get reimbursed", desc: "Many claims paid instantly. Money to your bank" },
          ].map((item) => (
            <div key={item.step} className="text-center bg-white rounded-xl p-6 shadow-sm">
              <div className="w-14 h-14 rounded-full bg-[var(--lemonade-pink)] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="font-bold text-[var(--lemonade-dark)] mb-2">{item.title}</h3>
              <p className="text-sm text-[var(--lemonade-gray)]">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <CTAButton>Protect My Pet Now</CTAButton>
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper background="white">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--lemonade-dark)] text-center mb-4">
          Emergency coverage questions
        </h2>
        <p className="text-lg text-[var(--lemonade-gray)] text-center mb-10 max-w-2xl mx-auto">
          What you need to know before an emergency happens
        </p>
        <FAQAccordion items={faqItems} />
      </SectionWrapper>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-[var(--lemonade-pink)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Don&apos;t wait until after the first emergency.
          </h2>
          <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
            The best time to get pet insurance is before you need it. Get covered: Save Up to 90% on Vet Bills — accident coverage starts tomorrow.
          </p>
          <CTAButton variant="secondary" size="large">Protect My Pet Now</CTAButton>
          <p className="mt-4 text-sm text-pink-200">
            Free quote • No commitment • Cancel anytime
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
