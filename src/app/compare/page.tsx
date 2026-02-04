import { Footer, CTAButton, FAQAccordion } from '@/components/shared';

export const metadata = {
  title: 'Top 5 Pet Insurance Companies 2026 | PawPolicy Research',
  description: 'Our researchers compared pet insurance companies across coverage, pricing, and claims speed. See the winners.',
};

const insurers = [
  {
    rank: 1,
    name: 'Lemonade',
    logo: 'L',
    score: 9.8,
    monthlyFrom: '$10',
    claimSpeed: 'Minutes (AI)',
    highlight: "Editor's Choice",
    pros: ['~50% claims paid instantly', 'Modern app (4.9★)', 'Transparent pricing', 'Any licensed vet'],
    isWinner: true,
  },
  {
    rank: 2,
    name: 'Healthy Paws',
    logo: '🐾',
    score: 8.4,
    monthlyFrom: '$15',
    claimSpeed: '~2 days',
    highlight: 'Unlimited annual coverage',
    pros: ['No annual payout limits', 'Fast claims processing', '70-90% reimbursement'],
    isWinner: false,
  },
  {
    rank: 3,
    name: 'Embrace',
    logo: '🤗',
    score: 8.1,
    monthlyFrom: '$13',
    claimSpeed: '5-10 days',
    highlight: 'Wellness rewards',
    pros: ['Diminishing deductible', 'Covers hip dysplasia at any age', 'Optional wellness add-on'],
    isWinner: false,
  },
  {
    rank: 4,
    name: 'Pets Best',
    logo: '⭐',
    score: 7.9,
    monthlyFrom: '$12',
    claimSpeed: '3-7 days',
    highlight: 'No upper age limit',
    pros: ['Direct vet pay option', 'Three coverage tiers', 'No enrollment age cap'],
    isWinner: false,
  },
  {
    rank: 5,
    name: 'Trupanion',
    logo: '🏥',
    score: 7.6,
    monthlyFrom: '$25',
    claimSpeed: 'Instant (at vet)',
    highlight: 'Pay vet directly',
    pros: ['90% reimbursement', 'Per-condition deductible', 'Unlimited coverage'],
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

export default function ComparePage() {
  const faqItems = [
    {
      question: "How did you conduct this research?",
      answer: "We evaluated pet insurance providers available in the United States based on publicly available data including pricing, coverage options, claims processing speed, customer reviews, and policy transparency. Scores are weighted based on factors most important to pet owners."
    },
    {
      question: "Why is Lemonade ranked #1?",
      answer: "Lemonade scored highest overall due to its combination of competitive pricing (from $10/mo), fast AI-powered claims processing (roughly 50% of claims paid in minutes), excellent mobile app experience (4.9★ rating), and transparent policies. Their technology-first approach sets them apart."
    },
    {
      question: "How accurate are the monthly prices shown?",
      answer: "Prices shown are starting rates and will vary based on your pet's age, breed, location, and chosen coverage level. The industry average for dog insurance is around $35-60/month. We recommend getting quotes from multiple providers to compare actual rates for your pet."
    },
    {
      question: "What about claims processing times?",
      answer: "Lemonade processes roughly 50% of claims in minutes using AI, with others taking 2-4 days. Healthy Paws averages about 2 days. Pets Best takes 3-7 days. Trupanion can pay participating vets directly at the time of service, eliminating wait times entirely."
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
            <span className="text-2xl">🔬</span>
            <span className="font-bold">PawPolicy Research</span>
          </div>
          <span className="text-sm text-gray-400">Pet Insurance Analysis</span>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-12 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1 bg-[var(--lemonade-pink)] rounded-full text-sm font-bold mb-4">
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
              <span className="text-xl font-bold ml-2">$35-60/mo</span>
            </div>
            <div className="bg-white/10 rounded-lg px-4 py-2">
              <span className="text-gray-400">Avg. cat policy:</span>
              <span className="text-xl font-bold ml-2">$20-35/mo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Rankings */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {insurers.map((insurer) => (
              <div
                key={insurer.rank}
                className={`relative rounded-2xl border-2 transition-all ${
                  insurer.isWinner
                    ? 'border-[var(--lemonade-pink)] bg-gradient-to-r from-pink-50 to-white shadow-xl scale-[1.02] z-10'
                    : 'border-gray-200 bg-gray-50 opacity-60'
                }`}
              >
                {/* Winner Badge */}
                {insurer.isWinner && (
                  <div className="absolute -top-3 left-6">
                    <span className="inline-flex items-center gap-1 bg-[var(--lemonade-pink)] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      🏆 Our #1 Pick
                    </span>
                  </div>
                )}

                <div className="p-6">
                  <div className="flex items-center gap-4">
                    {/* Rank */}
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-extrabold text-xl ${
                      insurer.isWinner
                        ? 'bg-[var(--lemonade-pink)] text-white'
                        : 'bg-gray-300 text-gray-500'
                    }`}>
                      {insurer.rank}
                    </div>

                    {/* Logo & Name */}
                    <div className="flex items-center gap-3 flex-1">
                      <span className={`text-3xl ${insurer.isWinner ? 'font-script text-[var(--lemonade-pink)]' : ''}`}>{insurer.logo}</span>
                      <div>
                        <h3 className={`text-xl font-bold ${insurer.isWinner ? 'text-[var(--lemonade-dark)]' : 'text-gray-500'}`}>
                          {insurer.name}
                        </h3>
                        <span className={`text-xs ${insurer.isWinner ? 'text-[var(--lemonade-pink)]' : 'text-gray-400'}`}>
                          {insurer.highlight}
                        </span>
                      </div>
                    </div>

                    {/* Score */}
                    <div className="text-right">
                      <div className={`text-2xl font-extrabold ${insurer.isWinner ? 'text-[var(--lemonade-pink)]' : 'text-gray-400'}`}>
                        {insurer.score}
                      </div>
                      <div className="text-xs text-gray-400">Score</div>
                    </div>
                  </div>

                  {/* Details - Only show for winner */}
                  {insurer.isWinner && (
                    <div className="mt-6 pt-6 border-t border-pink-200">
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-[var(--lemonade-pink)]">{insurer.monthlyFrom}</div>
                          <div className="text-xs text-gray-500">From/month</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-[var(--lemonade-pink)]">{insurer.claimSpeed}</div>
                          <div className="text-xs text-gray-500">Claims</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-[var(--lemonade-pink)]">Any</div>
                          <div className="text-xs text-gray-500">Vet accepted</div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {insurer.pros.map((pro, i) => (
                          <span key={i} className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {pro}
                          </span>
                        ))}
                      </div>

                      <CTAButton size="large" className="w-full">
                        Get Lemonade Quote →
                      </CTAButton>
                    </div>
                  )}

                  {/* Minimal details for non-winners */}
                  {!insurer.isWinner && (
                    <div className="mt-4 flex items-center justify-between text-sm text-gray-400">
                      <span>From {insurer.monthlyFrom}/mo</span>
                      <span>Claims: {insurer.claimSpeed}</span>
                    </div>
                  )}
                </div>
              </div>
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
                <span className="text-[var(--lemonade-pink)] mr-2">✓</span>
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
            Why Lemonade Stands Out
          </h2>
          <p className="text-center text-[var(--lemonade-gray)] mb-8">
            What sets them apart from traditional insurers
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: '⚡',
                title: 'AI-Powered Claims',
                desc: 'About 50% of claims are processed and paid in minutes. Their AI reviews documents instantly—just submit through the app.'
              },
              {
                icon: '💰',
                title: 'Competitive Pricing',
                desc: 'Plans start at $10/month, below the industry average of $35-60 for dogs. No hidden fees or surprise rate hikes.'
              },
              {
                icon: '📱',
                title: 'Top-Rated App',
                desc: '4.9★ app store rating. Manage your policy, file claims by photo, and get reimbursed—all from your phone.'
              },
              {
                icon: '🏥',
                title: 'Any Licensed Vet',
                desc: 'Visit any licensed veterinarian, specialist, or emergency hospital in the US. No network restrictions.'
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-4 bg-pink-50 rounded-xl border border-pink-100">
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <h3 className="font-bold text-[var(--lemonade-dark)] mb-1">{item.title}</h3>
                  <p className="text-sm text-[var(--lemonade-gray)]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <CTAButton size="large">See If Lemonade Is Right For You →</CTAButton>
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
            Get a free quote in 90 seconds
          </p>
          <CTAButton size="large">
            Get Your Free Lemonade Quote →
          </CTAButton>
        </div>
      </section>

      <Footer />
    </div>
  );
}
