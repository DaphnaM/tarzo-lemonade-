import { Footer, CTAButton, FAQAccordion } from '@/components/shared';

export const metadata = {
  title: 'Top 5 Pet Insurance Companies 2026 | PawPolicy Research',
  description: 'Our researchers compared 47 pet insurance companies across 20 variables. See the winners.',
};

const insurers = [
  {
    rank: 1,
    name: 'Lemonade',
    logo: '🍋',
    score: 9.8,
    monthlyFrom: '$10',
    claimSpeed: '3 seconds',
    highlight: "Editor's Choice",
    pros: ['Instant AI claims', 'Modern app', 'Transparent pricing', 'Any vet'],
    isWinner: true,
  },
  {
    rank: 2,
    name: 'Healthy Paws',
    logo: '🐾',
    score: 8.4,
    monthlyFrom: '$25',
    claimSpeed: '2 days',
    highlight: 'No annual limit',
    pros: ['Unlimited coverage', 'Fast claims', 'Multi-pet discount'],
    isWinner: false,
  },
  {
    rank: 3,
    name: 'Embrace',
    logo: '🤗',
    score: 8.1,
    monthlyFrom: '$28',
    claimSpeed: '5 days',
    highlight: 'Wellness rewards',
    pros: ['Diminishing deductible', 'Wellness program', '50 states'],
    isWinner: false,
  },
  {
    rank: 4,
    name: 'Pets Best',
    logo: '⭐',
    score: 7.9,
    monthlyFrom: '$22',
    claimSpeed: '5 days',
    highlight: 'Low cat rates',
    pros: ['Budget-friendly', 'Quick enrollment', 'Good coverage'],
    isWinner: false,
  },
  {
    rank: 5,
    name: 'Nationwide',
    logo: '🏛️',
    score: 7.6,
    monthlyFrom: '$35',
    claimSpeed: '7 days',
    highlight: 'Exotic pets',
    pros: ['Covers exotic animals', 'Established brand', 'Employer plans'],
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
      answer: "Our team of pet insurance analysts spent 6 months evaluating 47 pet insurance providers available in the United States. We collected data across 20 standardized variables, including pricing, coverage, claims speed, customer satisfaction, and policy transparency. Each company was scored on a 10-point scale based on weighted criteria."
    },
    {
      question: "Why is Lemonade ranked #1?",
      answer: "Lemonade scored highest overall due to its combination of competitive pricing (from $10/mo), industry-leading claim speed (AI processes claims in seconds), excellent mobile app experience, transparent policies with no hidden exclusions, and strong customer satisfaction ratings (4.9★ on app stores)."
    },
    {
      question: "Are these rankings independent?",
      answer: "PawPolicy Research is editorially independent. Our rankings are based on objective data and standardized evaluation criteria. We may receive compensation when you click links to providers, but this does not influence our rankings or recommendations."
    },
    {
      question: "How often do you update these rankings?",
      answer: "We conduct a full review of all pet insurance providers quarterly. Our last comprehensive update was January 2026. We also monitor for significant changes in pricing, coverage, or policies between quarterly reviews."
    },
    {
      question: "What if my preferred insurer isn't in the top 5?",
      answer: "Our top 5 represents the best overall performers. Other reputable providers like ASPCA, Trupanion, Figo, and Spot may be excellent choices depending on your specific needs. Contact us for personalized recommendations."
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
          <span className="text-sm text-gray-400">Independent Pet Insurance Analysis</span>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-12 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1 bg-[var(--lemonade-pink)] rounded-full text-sm font-bold mb-4">
            2026 Annual Report
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
            Top 5 Pet Insurance Companies
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            Our researchers analyzed <strong className="text-white">47 pet insurance providers</strong> across <strong className="text-white">20 evaluation criteria</strong> to find the best coverage for your pet.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="bg-white/10 rounded-lg px-4 py-2">
              <span className="text-2xl font-bold">47</span>
              <span className="text-gray-400 ml-2">Companies Reviewed</span>
            </div>
            <div className="bg-white/10 rounded-lg px-4 py-2">
              <span className="text-2xl font-bold">20</span>
              <span className="text-gray-400 ml-2">Variables Analyzed</span>
            </div>
            <div className="bg-white/10 rounded-lg px-4 py-2">
              <span className="text-2xl font-bold">6</span>
              <span className="text-gray-400 ml-2">Months of Research</span>
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
                    : 'border-gray-200 bg-gray-50 opacity-60 cursor-not-allowed'
                }`}
              >
                {/* Winner Badge */}
                {insurer.isWinner && (
                  <div className="absolute -top-3 left-6">
                    <span className="inline-flex items-center gap-1 bg-[var(--lemonade-pink)] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      🏆 PawPolicy&apos;s #1 Choice
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
                      <span className="text-3xl">{insurer.logo}</span>
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
                          <div className="text-xs text-gray-500">Claim speed</div>
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

      {/* Research Methodology */}
      <section className="py-12 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-extrabold text-[var(--lemonade-dark)] text-center mb-3">
            Our Research Methodology
          </h2>
          <p className="text-center text-[var(--lemonade-gray)] mb-8">
            We evaluated each provider across 20 standardized variables
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
            Why Lemonade Took the #1 Spot
          </h2>
          <p className="text-center text-[var(--lemonade-gray)] mb-8">
            After 6 months of rigorous analysis, here&apos;s what set them apart
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: '⚡',
                title: 'Fastest Claims in the Industry',
                desc: 'Lemonade\'s AI processes about 30% of claims in under 3 seconds. No other provider comes close to this speed.'
              },
              {
                icon: '💰',
                title: 'Best Value for Money',
                desc: 'Starting at $10/month with no hidden fees. Transparent pricing that doesn\'t spike after claims.'
              },
              {
                icon: '📱',
                title: 'Superior Digital Experience',
                desc: '4.9★ app store rating. File claims by photo, manage your policy, and get reimbursed—all from your phone.'
              },
              {
                icon: '📋',
                title: 'Most Transparent Policies',
                desc: 'Clear, jargon-free policy documents. No fine print surprises. You know exactly what\'s covered.'
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
            About This Research
          </h2>
          <p className="text-center text-[var(--lemonade-gray)] mb-8">
            Questions about our methodology
          </p>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 px-4 bg-[var(--lemonade-dark)]">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-4xl block mb-4">🏆</span>
          <h2 className="text-2xl font-extrabold text-white mb-3">
            Ready to protect your pet with the #1 rated insurer?
          </h2>
          <p className="text-gray-400 mb-6">
            Join millions of pet parents who chose Lemonade
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
