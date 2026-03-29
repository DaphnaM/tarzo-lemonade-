'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Footer, CTAButton, FAQAccordion } from '@/components/shared';

const insurers = [
  {
    rank: 1,
    name: 'Lemonade',
    logoText: 'Lemonade',
    logoStyle: 'font-bold text-3xl italic',
    logoImage: '/images/lemonade-logo-grey.png',
    logoType: 'wide' as const,
    brandColor: '#FF0083',
    score: 9.8,
    monthlyFrom: '$10',
    claimSpeed: 'Minutes (AI)',
    highlight: "Editor's Choice",
    tagline: 'Best budget pick with AI-powered claims',
    description: 'Lemonade is the standout budget pick. Its AI-powered app handles claims in minutes for nearly half of submissions. Policies can be customized with add-ons depending on coverage needs, offering flexibility across different types of care.',
    detailPros: ['Cheapest overall starting price', '~50% of claims handled in minutes via AI', '4.9★ app (85k+ reviews)', 'Any licensed vet accepted'],
    detailNotes: ['Coverage can be customized with optional add-ons', 'Plan availability may vary based on pet and location'],
    isWinner: true,
  },
  {
    rank: 2,
    name: 'Healthy Paws',
    logoText: 'Healthy Paws',
    logoStyle: 'font-semibold text-xl',
    logoImage: '/images/healthy-paws-logo.png',
    logoType: 'wide' as const,
    brandColor: '#2E7D32',
    score: 8.4,
    monthlyFrom: '$15',
    claimSpeed: '~2 days',
    highlight: 'Unlimited annual coverage',
    tagline: 'Simple, reliable with no payout limits',
    description: 'Healthy Paws is simple and reliable. It offers a single plan with no annual or lifetime payout limits, covering alternative therapies like acupuncture and chiropractic in the base plan. The main gap: there\'s no wellness plan option, and exam fees aren\'t covered.',
    detailPros: ['Unlimited payouts — no annual or lifetime cap', '24/7 vet helpline included', '70-90% reimbursement options'],
    detailNotes: ['No wellness add-on available', 'No exam fee coverage'],
    isWinner: false,
  },
  {
    rank: 3,
    name: 'Embrace',
    logoText: 'Embrace',
    logoStyle: 'font-semibold text-xl',
    logoImage: '/images/embrace-logo.jpg',
    logoType: 'icon' as const,
    brandColor: '#6A1B9A',
    score: 8.1,
    monthlyFrom: '$13',
    claimSpeed: '5-10 days',
    highlight: 'Wellness rewards',
    tagline: 'Most comprehensive base coverage',
    description: 'Embrace is the most comprehensive of the five. It covers dental illness as a standard feature — something most other insurers don\'t offer. It also has a unique diminishing deductible feature. It holds an A+ rating from the BBB, though premiums have been rising year-over-year for many policyholders.',
    detailPros: ['Dental illness covered in base plan', 'Diminishing deductible saves money over time', 'A+ BBB rating'],
    detailNotes: ['Exam fees require add-on', 'Premiums tend to rise yearly'],
    isWinner: false,
  },
  {
    rank: 4,
    name: 'Pets Best',
    logoText: 'Pets Best',
    logoStyle: 'font-semibold text-xl',
    logoImage: '/images/pets-best-logo.jpg',
    logoType: 'square' as const,
    brandColor: '#1565C0',
    score: 7.9,
    monthlyFrom: '$12',
    claimSpeed: '3-7 days',
    highlight: 'No upper age limit',
    tagline: 'Great middle ground with no age cap',
    description: 'Pets Best hits a solid middle ground. It has no maximum enrollment age and covers routine procedures like spaying, microchipping, and teeth cleaning with the right plan. It also offers a direct vet pay option so you don\'t have to pay out of pocket first.',
    detailPros: ['No breed restrictions or age limits', 'Direct vet pay option', 'Three coverage tiers to choose from'],
    detailNotes: ['F rating from BBB', 'Some reports of slow claims processing'],
    isWinner: false,
  },
  {
    rank: 5,
    name: 'Trupanion',
    logoText: 'Trupanion',
    logoStyle: 'font-semibold text-xl',
    logoImage: '/images/trupanion-logo.png',
    logoType: 'wide' as const,
    brandColor: '#7B1FA2',
    score: 7.6,
    monthlyFrom: '$25',
    claimSpeed: 'Instant (at vet)',
    highlight: 'Pay vet directly',
    tagline: 'Premium option with direct vet payment',
    description: 'Trupanion is premium-priced but genuinely unique. It\'s the only provider that can pay veterinarians directly at checkout, often in seconds, meaning you may never have to pay out-of-pocket at the vet. It also never increases or cancels your coverage because of claims you submit.',
    detailPros: ['Pays vet directly at checkout — no out-of-pocket', 'Unlimited coverage with no payout caps', 'No price hikes based on claims history'],
    detailNotes: ['Most expensive option (~$165/month avg for dogs)', 'Fixed 90% reimbursement — no choice'],
    isWinner: false,
  },
];

const researchVariables = [
  'Monthly Premium Cost',
  'Claim Processing Speed',
  'Reimbursement Rate',
  'Annual Coverage Limits',
  'Deductible Options',
  'Waiting Periods',
  'Pre-existing Conditions Policy',
  'Hereditary Conditions Coverage',
  'Chronic Illness Coverage',
  'Emergency Care Coverage',
  'Specialist Coverage',
  'Prescription Medications',
  'Alternative Therapies',
  'Behavioral Therapy',
  'Mobile App Quality',
  'Customer Service Rating',
  'Claims Denial Rate',
  'Policy Transparency',
  'Multi-Pet Discounts',
  'Wellness Add-ons',
];

function InsurerCard({ insurer }: { insurer: typeof insurers[number] }) {
  const [expanded, setExpanded] = useState(insurer.isWinner);

  return (
    <div
      className={`relative rounded-2xl border-2 transition-all ${
        insurer.isWinner
          ? 'border-amber-400 bg-white shadow-xl scale-[1.02] z-10'
          : 'bg-white hover:shadow-md'
      }`}
      style={{
        borderColor: insurer.isWinner ? undefined : `${insurer.brandColor}30`
      }}
    >
      {/* Winner Badge */}
      {insurer.isWinner && (
        <div className="absolute -top-4 left-8">
          <span className="inline-flex items-center gap-1 bg-amber-500 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
            Our #1 Pick
          </span>
        </div>
      )}

      {/* Clickable header */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left p-8 pb-6 cursor-pointer"
      >
        <div className="flex items-center gap-5">
          {/* Rank */}
          <div
            className={`w-16 h-16 rounded-full flex items-center justify-center font-extrabold text-2xl flex-shrink-0 ${
              insurer.isWinner ? 'bg-amber-500 text-white' : 'text-white'
            }`}
            style={{
              backgroundColor: insurer.isWinner ? undefined : insurer.brandColor
            }}
          >
            {insurer.rank}
          </div>

          {/* Logo & Name */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-4">
              {insurer.logoType === 'icon' ? (
                <>
                  <div className="relative w-14 h-14 flex-shrink-0 rounded-xl overflow-hidden">
                    <Image
                      src={insurer.logoImage!}
                      alt={`${insurer.name} logo`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="font-bold text-2xl text-[var(--lemonade-dark)]">{insurer.name}</span>
                </>
              ) : insurer.logoType === 'square' ? (
                <div className="relative w-14 h-14 flex-shrink-0 rounded-xl overflow-hidden">
                  <Image
                    src={insurer.logoImage!}
                    alt={`${insurer.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
              ) : (
                <div className="relative w-48 h-16 flex-shrink-0 bg-white rounded-lg">
                  <Image
                    src={insurer.logoImage!}
                    alt={`${insurer.name} logo`}
                    fill
                    className="object-contain object-left"
                  />
                </div>
              )}
            </div>
            {/* Tagline - always visible */}
            <p className="text-sm text-gray-500 mt-2">{insurer.tagline}</p>
          </div>

          {/* Score */}
          <div className="text-right flex-shrink-0">
            <div
              className={`text-4xl font-extrabold ${insurer.isWinner ? 'text-amber-500' : ''}`}
              style={{ color: insurer.isWinner ? undefined : insurer.brandColor }}
            >
              {insurer.score}
            </div>
            <div className="text-sm text-gray-500">Score</div>
          </div>

          {/* Chevron */}
          <svg
            className={`w-7 h-7 text-gray-400 flex-shrink-0 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {/* Quick stats - always visible */}
        <div className="mt-4 flex items-center gap-6 text-base ml-20">
          <span className="text-gray-600">
            From <strong className="text-lg" style={{ color: insurer.brandColor }}>{insurer.monthlyFrom}</strong>/month
          </span>
          <span className="text-gray-300">|</span>
          <span className="text-gray-500">Claims: <strong>{insurer.claimSpeed}</strong></span>
        </div>
      </button>

      {/* Expandable details */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          expanded ? 'max-h-[700px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-8 pb-8 pt-2">
          <div className="border-t border-gray-200 pt-6">
            {/* Description */}
            <p className="text-base text-gray-600 leading-relaxed mb-6">
              {insurer.description}
            </p>

            {/* Pros & Cons */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                {insurer.detailPros.map((pro: string, i: number) => (
                  <div key={i} className="flex items-start gap-3 mb-3">
                    <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-base text-gray-600">{pro}</span>
                  </div>
                ))}
              </div>
              <div>
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Things to Know</div>
                {insurer.detailNotes.map((note: string, i: number) => (
                  <div key={i} className="flex items-start gap-3 mb-3">
                    <svg className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <span className="text-base text-gray-500">{note}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA for Lemonade only */}
            {insurer.isWinner && (
              <CTAButton size="large" className="w-full !bg-emerald-500 hover:!bg-emerald-600 !text-lg !py-4">
                Get <span className="italic">Lemonade</span> Quote →
              </CTAButton>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ComparePage() {
  const faqItems = [
    {
      question: "How did you conduct this research?",
      answer: "We evaluated pet insurance providers available in the United States based on publicly available data including pricing, coverage options, claims processing speed, customer reviews, and policy transparency. Scores are weighted based on factors most important to pet owners."
    },
    {
      question: "Why is Lemonade ranked #1?",
      answer: "Lemonade scored highest overall due to its combination of competitive pricing (from $10/month), fast AI-powered claims processing (roughly 50% of claims handled in minutes), excellent mobile app experience (4.9★ rating), and transparent policies. Their technology-first approach sets them apart."
    },
    {
      question: "How accurate are the monthly prices shown?",
      answer: "Prices shown are starting rates and will vary based on your pet's age, breed, location, and chosen coverage level. The industry average for dog insurance is around $35-60/month. We recommend getting quotes from multiple providers to compare actual rates for your pet."
    },
    {
      question: "What about claims processing times?",
      answer: "Lemonade handles roughly 50% of claims in minutes using AI, with others taking 2-4 days. Healthy Paws averages about 2 days. Pets Best takes 3-7 days. Trupanion can pay participating vets directly at the time of service, eliminating wait times entirely."
    },
    {
      question: "Do all these companies cover pre-existing conditions?",
      answer: "No pet insurance company covers pre-existing conditions. However, coverage varies for conditions that develop after enrollment. Embrace notably covers hip dysplasia regardless of enrollment age, while some competitors have age restrictions for certain conditions."
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">

      {/* Header */}
      <header className="bg-[var(--lemonade-dark)] text-white py-4 px-6">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative w-8 h-8 rounded-lg overflow-hidden">
              <Image
                src="/images/paw-policy-logo.png"
                alt="PawPolicy logo"
                fill
                className="object-cover"
              />
            </div>
            <span className="font-bold">PawPolicy Research</span>
          </div>
          <span className="text-sm text-gray-400">Pet Insurance Analysis</span>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-12 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1 bg-emerald-500 rounded-full text-sm font-bold mb-4">
            2026 Comparison
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
            Top 5 Pet Insurance Companies
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            We compared leading pet insurance providers across <strong className="text-white">pricing, coverage, and claims speed</strong> to help you find the best fit for your pet.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="bg-white/10 rounded-lg px-4 py-2">
              <span className="text-gray-400">Avg. dog policy:</span>
              <span className="text-xl font-bold ml-2">$35-60/month</span>
            </div>
            <div className="bg-white/10 rounded-lg px-4 py-2">
              <span className="text-gray-400">Avg. cat policy:</span>
              <span className="text-xl font-bold ml-2">$20-35/month</span>
            </div>
          </div>
        </div>
      </section>

      {/* Rankings */}
      <section className="py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {insurers.map((insurer) => (
              <InsurerCard key={insurer.rank} insurer={insurer} />
            ))}
          </div>
        </div>
      </section>

      {/* Key Comparison */}
      <section className="py-12 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-extrabold text-[var(--lemonade-dark)] text-center mb-3">
            What We Evaluated
          </h2>
          <p className="text-center text-[var(--lemonade-gray)] mb-8">
            Key factors in our comparison
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {researchVariables.map((variable, i) => (
              <div key={i} className="bg-white rounded-lg px-3 py-2 text-sm text-[var(--lemonade-gray)] border border-gray-200">
                <span className="text-emerald-500 mr-2">✓</span>
                {variable}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Lemonade Won */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-extrabold text-[var(--lemonade-dark)] text-center mb-3">
            Why <Image src="/images/lemonade-logo-grey.png" alt="Lemonade" width={120} height={28} className="inline-block align-middle"  /> Stands Out
          </h2>
          <p className="text-center text-[var(--lemonade-gray)] mb-8">
            What sets them apart from traditional insurers
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: '⚡',
                title: 'AI-Powered Claims',
                desc: 'About 50% of claims are handled in minutes.'
              },
              {
                icon: '💰',
                title: 'Competitive Pricing',
                desc: 'Plans start at $10/month.'
              },
              {
                icon: '📱',
                title: 'Top-Rated App',
                desc: '4.9★ app store rating. Manage your policy, file claims by photo, and get reimbursed.'
              },
              {
                icon: '🏥',
                title: 'Any Licensed Vet',
                desc: 'Visit any licensed veterinarian, specialist, or emergency hospital in the US.'
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-4 bg-slate-100 rounded-xl border border-slate-200">
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <h3 className="font-bold text-[var(--lemonade-dark)] mb-1">{item.title}</h3>
                  <p className="text-sm text-[var(--lemonade-gray)]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <CTAButton size="large" className="!bg-emerald-500 hover:!bg-emerald-600">See If <span className="italic">Lemonade</span> Is Right For You →</CTAButton>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4 bg-slate-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-extrabold text-[var(--lemonade-dark)] text-center mb-3">
            Common Questions
          </h2>
          <p className="text-center text-[var(--lemonade-gray)] mb-8">
            About our comparison
          </p>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 px-4 bg-[var(--lemonade-dark)]">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-4xl block mb-4">🏆</span>
          <h2 className="text-2xl font-extrabold text-white mb-3">
            Ready to protect your pet?
          </h2>
          <p className="text-gray-400 mb-6">
            Get a free quote: Save Up to 90% on Vet Bills
          </p>
          <CTAButton size="large" className="!bg-emerald-500 hover:!bg-emerald-600">
            Get Your Free <span className="italic">Lemonade</span> Quote →
          </CTAButton>
        </div>
      </section>

      <Footer />
    </div>
  );
}
