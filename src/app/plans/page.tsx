import Image from 'next/image';
import { Footer, CTAButton, FAQAccordion, SectionWrapper } from '@/components/shared';
import { ComparisonTable } from '@/components/specific';

export const metadata = {
  title: 'Affordable Pet Insurance Plans | Lemonade',
  description: 'Big protection, small monthly cost. Plans starting around $10/month. Customize your coverage in minutes.',
};

export default function PlansPage() {
  const faqItems = [
    {
      question: "How much does Lemonade pet insurance cost?",
      answer: "Prices depend on your pet's age, breed, and location. On average, dogs cost about $35/month and cats about $20/month. But you control the price by adjusting your deductible ($100-$750), reimbursement rate (70-90%), and annual limit ($5,000-$100,000). Some plans start as low as $10/month."
    },
    {
      question: "What's the difference between deductible options?",
      answer: "Your annual deductible is what you pay before Lemonade kicks in. Choose $100 for lower out-of-pocket per claim but higher monthly premium, or $500-$750 for lower monthly costs but more out-of-pocket when claims happen. It resets every year when your policy renews."
    },
    {
      question: "What does 70%, 80%, or 90% reimbursement mean?",
      answer: "After you meet your deductible, Lemonade pays this percentage of eligible vet bills. Example: $1,000 bill with $250 deductible and 80% reimbursement = Lemonade pays $600, you pay $400. Higher reimbursement = higher premium but less out of pocket per claim."
    },
    {
      question: "Can I change my plan later?",
      answer: "Yes! You can adjust your deductible, reimbursement rate, and annual limit when your policy renews. You can also add or remove optional coverages anytime. Changes take effect at your next renewal date."
    },
    {
      question: "Are there any discounts available?",
      answer: "Yes! Get 5% off for insuring 2+ pets, 10% off when bundling with Lemonade home/renters/car insurance, and 5% off for paying annually upfront. These discounts can stack!"
    },
    {
      question: "What's NOT covered?",
      answer: "Pre-existing conditions, elective procedures (cosmetic surgery, ear cropping), breeding costs, and routine/preventive care (unless you add the Preventive package). Food, supplements, and grooming are also not covered."
    },
    {
      question: "Do I need vet records to get a quote?",
      answer: "No! You can get a quote instantly without any vet records. Medical records are only requested when you file a claim, to verify the condition wasn't pre-existing."
    },
    {
      question: "Is there an age limit for coverage?",
      answer: "Puppies and kittens can be enrolled as young as 8 weeks. There's no upper age limit for enrollment — senior pets can get covered too, though premiums may be higher for older pets."
    },
  ];

  const features = [
    { name: "Accidents (injuries, emergencies)", included: true },
    { name: "Illnesses (cancer, diabetes, infections)", included: true },
    { name: "Hereditary conditions (hip dysplasia)", included: true },
    { name: "Diagnostics (X-rays, MRI, blood tests)", included: true },
    { name: "Surgery & hospitalization", included: true },
    { name: "Prescription medications", included: true },
    { name: "Emergency care & specialists", included: true },
    { name: "Any licensed vet in the US", included: true },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-6 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <span className="inline-block px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-bold mb-6">
              💰 Plans starting around $10/month
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--lemonade-dark)] mb-6 leading-tight">
              Affordable pet insurance that <span className="text-[var(--lemonade-pink)]">fits your budget</span>
            </h1>
            <p className="text-xl text-[var(--lemonade-gray)] mb-8 max-w-lg">
              You choose your price. Adjust your deductible, reimbursement rate, and coverage limit to find the perfect balance of protection and affordability.
            </p>
            <CTAButton size="large">See My Price</CTAButton>
            <p className="mt-4 text-sm text-[var(--lemonade-gray)]">
              Free quote • Cancel anytime • Any licensed vet
            </p>
          </div>
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/happy-cat.jpg"
              alt="Happy cat"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Pricing Breakdown */}
      <section className="py-8 bg-[var(--lemonade-dark)]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { stat: "~$35/mo", label: "Average for dogs" },
            { stat: "~$20/mo", label: "Average for cats" },
            { stat: "70-90%", label: "Of vet bills covered" },
          ].map((item) => (
            <div key={item.label}>
              <div className="text-3xl md:text-4xl font-extrabold text-white">{item.stat}</div>
              <div className="text-sm text-gray-400 mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* You Control Your Price */}
      <SectionWrapper background="white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--lemonade-dark)] mb-4">
            You control what you pay
          </h2>
          <p className="text-lg text-[var(--lemonade-gray)] max-w-2xl mx-auto">
            Mix and match these options to find the right balance of coverage and cost for your family
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl p-6 border-2 border-gray-100 shadow-sm">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="font-bold text-xl text-[var(--lemonade-dark)] mb-2">Annual Deductible</h3>
            <p className="text-[var(--lemonade-gray)] mb-4">What you pay before coverage kicks in</p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-[var(--lemonade-gray)]">$100</span>
                <span className="text-[var(--lemonade-pink)] font-medium">Higher premium</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[var(--lemonade-gray)]">$250</span>
                <span className="text-green-600 font-medium">Popular choice</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[var(--lemonade-gray)]">$500–$750</span>
                <span className="text-[var(--lemonade-pink)] font-medium">Lower premium</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 border-2 border-[var(--lemonade-pink)] shadow-md">
            <div className="text-3xl mb-4">💵</div>
            <h3 className="font-bold text-xl text-[var(--lemonade-dark)] mb-2">Reimbursement Rate</h3>
            <p className="text-[var(--lemonade-gray)] mb-4">% of eligible bills Lemonade pays</p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-[var(--lemonade-gray)]">70%</span>
                <span className="text-[var(--lemonade-pink)] font-medium">Budget-friendly</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[var(--lemonade-gray)]">80%</span>
                <span className="text-green-600 font-medium">Most popular</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[var(--lemonade-gray)]">90%</span>
                <span className="text-[var(--lemonade-pink)] font-medium">Max coverage</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 border-2 border-gray-100 shadow-sm">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="font-bold text-xl text-[var(--lemonade-dark)] mb-2">Annual Limit</h3>
            <p className="text-[var(--lemonade-gray)] mb-4">Max Lemonade pays per year</p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-[var(--lemonade-gray)]">$5,000</span>
                <span className="text-[var(--lemonade-pink)] font-medium">Basic</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[var(--lemonade-gray)]">$20,000–$50,000</span>
                <span className="text-green-600 font-medium">Recommended</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[var(--lemonade-gray)]">$100,000</span>
                <span className="text-[var(--lemonade-pink)] font-medium">Premium</span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-10">
          <CTAButton>Build My Custom Plan</CTAButton>
        </div>
      </SectionWrapper>

      {/* What's Included */}
      <SectionWrapper background="gray">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--lemonade-dark)] mb-6">
              Big protection included in every plan
            </h2>
            <p className="text-lg text-[var(--lemonade-gray)] mb-6">
              No matter which options you choose, your base plan covers accidents AND illnesses — not just one or the other.
            </p>
            <ComparisonTable features={features} />
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="font-bold text-xl text-[var(--lemonade-dark)] mb-6">Optional add-ons</h3>
            <p className="text-[var(--lemonade-gray)] mb-4">Boost your coverage for a few extra dollars/month:</p>
            <div className="space-y-4">
              {[
                { name: "Vet visit fees", price: "$1.89+/mo", desc: "Covers exam fees (usually $50-$100)" },
                { name: "Dental illness", price: "$4+/mo", desc: "Extractions, root canals, gum disease" },
                { name: "Physical therapy", price: "$3+/mo", desc: "Rehab, hydrotherapy, acupuncture" },
                { name: "Behavioral conditions", price: "$2+/mo", desc: "Anxiety, aggression treatment" },
                { name: "Preventive care", price: "$10+/mo", desc: "Vaccines, wellness exams, flea meds" },
              ].map((addon) => (
                <div key={addon.name} className="flex items-start gap-3 p-3 bg-pink-50 rounded-lg">
                  <span className="text-[var(--lemonade-pink)]">+</span>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <span className="font-medium text-[var(--lemonade-dark)]">{addon.name}</span>
                      <span className="text-sm text-[var(--lemonade-pink)] font-medium">{addon.price}</span>
                    </div>
                    <p className="text-xs text-[var(--lemonade-gray)]">{addon.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center mt-10">
          <CTAButton>See My Options</CTAButton>
        </div>
      </SectionWrapper>

      {/* Savings Example */}
      <SectionWrapper background="white">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--lemonade-dark)] text-center mb-4">
          See how the math works
        </h2>
        <p className="text-lg text-[var(--lemonade-gray)] text-center mb-12 max-w-2xl mx-auto">
          Real example: Your dog needs a $3,000 surgery
        </p>
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
          <div className="grid md:grid-cols-2">
            <div className="p-8 bg-red-50">
              <h3 className="font-bold text-xl text-red-600 mb-4">❌ Without insurance</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-[var(--lemonade-gray)]">Surgery bill</span>
                  <span className="font-bold">$3,000</span>
                </div>
                <div className="border-t border-red-200 pt-3 flex justify-between">
                  <span className="font-bold text-[var(--lemonade-dark)]">You pay</span>
                  <span className="font-extrabold text-2xl text-red-600">$3,000</span>
                </div>
              </div>
            </div>
            <div className="p-8 bg-green-50">
              <h3 className="font-bold text-xl text-green-600 mb-4">✓ With Lemonade (80%, $250 ded.)</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-[var(--lemonade-gray)]">Surgery bill</span>
                  <span className="font-bold">$3,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--lemonade-gray)]">Your deductible</span>
                  <span className="font-bold">-$250</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--lemonade-gray)]">Lemonade pays (80%)</span>
                  <span className="font-bold text-green-600">-$2,200</span>
                </div>
                <div className="border-t border-green-200 pt-3 flex justify-between">
                  <span className="font-bold text-[var(--lemonade-dark)]">You pay</span>
                  <span className="font-extrabold text-2xl text-green-600">$550</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[var(--lemonade-pink)] p-4 text-center">
            <p className="text-white font-bold">You save $2,450 on this single claim 💰</p>
          </div>
        </div>
        <div className="text-center mt-10">
          <CTAButton>Calculate My Savings</CTAButton>
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper background="gray">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--lemonade-dark)] text-center mb-4">
          Pricing & plan questions
        </h2>
        <p className="text-lg text-[var(--lemonade-gray)] text-center mb-10 max-w-2xl mx-auto">
          Everything you need to know about costs and coverage options
        </p>
        <FAQAccordion items={faqItems} />
      </SectionWrapper>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-[var(--lemonade-pink)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            See your personalized price: Save Up to 90% on Vet Bills
          </h2>
          <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
            No commitment, no credit card, no phone calls. Just enter your pet&apos;s info and see what you&apos;d pay.
          </p>
          <CTAButton variant="secondary" size="large">Get My Free Quote</CTAButton>
          <p className="mt-4 text-sm text-pink-200">
            Average: $35/mo for dogs • $20/mo for cats
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
