import Image from 'next/image';
import { Footer, CTAButton, ProofStrip, FAQAccordion, TestimonialCard, SectionWrapper } from '@/components/shared';

export const metadata = {
  title: 'Pet Insurance You Can Trust | Lemonade',
  description: 'Clear coverage. Easy claims. Real peace of mind for pet parents. Rated 4.9 stars by 85,000+ customers.',
};

export default function CoveragePage() {
  const faqItems = [
    {
      question: "Why should I trust Lemonade?",
      answer: "Lemonade is a licensed insurance company backed by major reinsurers. They're a public benefit corporation that takes a flat fee and donates leftover premiums to charity — so they have no financial incentive to deny your claims. They're rated 4.9 stars on the App Store from 85,000+ reviews."
    },
    {
      question: "How does the claims process actually work?",
      answer: "You pay your vet bill, then open the Lemonade app and take a photo of the itemized invoice. Describe what happened in a few sentences and submit. Many pet claims are reviewed and paid instantly by AI. Larger claims get human review within 24-48 hours. Money goes directly to your bank account."
    },
    {
      question: "What if my claim gets denied?",
      answer: "Lemonade explains exactly why any claim is denied. Common reasons: pre-existing condition, waiting period hadn't passed, or the condition isn't covered under your plan. You can always reach out to their support team to discuss, and they have a reputation for being transparent about decisions."
    },
    {
      question: "Can I really go to ANY vet?",
      answer: "Yes — any licensed veterinarian in the United States. This includes your regular vet, specialists (dermatologists, oncologists, cardiologists), 24-hour emergency hospitals, and university veterinary hospitals. No network restrictions whatsoever."
    },
    {
      question: "Is my pet's information secure?",
      answer: "Lemonade uses bank-level encryption and security. They don't sell your personal information to third parties. Your pet's medical records are only used for claims processing and are stored securely."
    },
    {
      question: "What if I have questions about my policy?",
      answer: "You can chat with Lemonade's support team through the app 24/7. They also have a comprehensive help center, phone support, and email. Most customers report quick, helpful responses from real people when AI can't solve their issue."
    },
    {
      question: "How long has Lemonade been around?",
      answer: "Lemonade launched in 2016 and started offering pet insurance in 2020. They now protect millions of pets across the US. The company is publicly traded (NYSE: LMND) and is headquartered in New York City."
    },
    {
      question: "What happens when my policy renews?",
      answer: "Your policy renews automatically each year. Lemonade will notify you of any rate changes before renewal. Rates can change based on your pet's age and claims history, but Lemonade is known for competitive pricing even at renewal."
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-bold mb-6">
              ⭐ 4.9 stars from 85,000+ reviews
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--lemonade-dark)] mb-6 leading-tight">
              Pet insurance you can <span className="text-[var(--lemonade-pink)]">actually trust</span>
            </h1>
            <p className="text-xl text-[var(--lemonade-gray)] mb-8 max-w-lg">
              No confusing fine print. No claim games. Just clear coverage, fast payouts, and real humans when you need them.
            </p>
            <CTAButton size="large">Get My Free Quote</CTAButton>
            <p className="mt-4 text-sm text-[var(--lemonade-gray)]">
              Any licensed vet • Fast AI-powered claims • Cancel anytime
            </p>
            <div className="mt-8">
              <ProofStrip
                rating="⭐️⭐️⭐️⭐️⭐️"
                highlights={["85,000+ App Store reviews", "Millions of pets protected", "Public benefit corp"]}
              />
            </div>
          </div>
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/family-pet.jpg"
              alt="Happy family with their dog"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="py-8 bg-[var(--lemonade-dark)]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { stat: "4.9★", label: "App Store rating (85K+ reviews)" },
            { stat: "B Corp", label: "Public Benefit Corporation" },
            { stat: "~50%", label: "Pet claims paid instantly" },
            { stat: "In-App", label: "24/7 AI + human support" },
          ].map((item) => (
            <div key={item.label}>
              <div className="text-2xl md:text-3xl font-extrabold text-white">{item.stat}</div>
              <div className="text-sm text-gray-400 mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Trust Lemonade */}
      <SectionWrapper background="white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--lemonade-dark)] mb-4">
            Built different from traditional insurance
          </h2>
          <p className="text-lg text-[var(--lemonade-gray)] max-w-2xl mx-auto">
            Lemonade is a public benefit corporation. That means they&apos;re legally committed to balancing profit with social good.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: "💝",
              title: "No incentive to deny claims",
              desc: "Lemonade takes a flat fee. Leftover premiums go to charity through their Giveback program — so denying your claim doesn't help their bottom line."
            },
            {
              icon: "🤖",
              title: "AI-powered, human-backed",
              desc: "AI handles routine claims instantly (many paid in seconds). Complex cases get human review. You get the best of both worlds: speed and empathy."
            },
            {
              icon: "📱",
              title: "Designed for real life",
              desc: "File claims from your phone in 2 minutes. Track status in real-time. Get paid directly to your bank account. No paperwork, no faxes, no 1-800 numbers."
            },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <span className="text-4xl mb-4 block">{item.icon}</span>
              <h3 className="font-bold text-xl text-[var(--lemonade-dark)] mb-2">{item.title}</h3>
              <p className="text-[var(--lemonade-gray)]">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <CTAButton>See Why Pet Parents Trust Us</CTAButton>
        </div>
      </SectionWrapper>

      {/* Social Proof */}
      <SectionWrapper background="gray">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--lemonade-dark)] text-center mb-4">
          Real reviews from real pet parents
        </h2>
        <p className="text-lg text-[var(--lemonade-gray)] text-center mb-10 max-w-2xl mx-auto">
          Don&apos;t just take our word for it — here&apos;s what customers are saying
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <TestimonialCard quote="Very easy signup process and reasonable rates. When I had to file a claim, it was straightforward through the app and I got reimbursed quickly." />
          <TestimonialCard quote="I appreciate how transparent they are about what's covered and what isn't. No surprises. The Giveback program where they donate unclaimed premiums is a nice bonus." />
          <TestimonialCard quote="Customer service has been great whenever I've had questions. The app makes everything simple and I can see my policy details anytime." />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mt-6">
          <TestimonialCard quote="Compared rates with several pet insurance companies and Lemonade had the best combination of coverage and price for my situation." />
          <TestimonialCard quote="Love that I can customize my deductible and reimbursement percentage. Made it easy to find a plan that fits my budget." />
        </div>
        <div className="text-center mt-10">
          <CTAButton>Join 2 Million+ Happy Pet Parents</CTAButton>
        </div>
      </SectionWrapper>

      {/* Transparent Coverage */}
      <SectionWrapper background="white">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--lemonade-dark)] mb-6">
              Crystal clear coverage — no surprises
            </h2>
            <p className="text-lg text-[var(--lemonade-gray)] mb-6">
              With Lemonade, you know exactly what you&apos;re getting. No confusing policy language or hidden exclusions.
            </p>
            <div className="space-y-4">
              {[
                { title: "You choose your terms", items: ["Deductible: $100, $250, $500, or $750", "Reimbursement: 70%, 80%, or 90%", "Annual limit: $5K to $100K"] },
                { title: "Base plan covers", items: ["All accidents & injuries", "All new illnesses", "Hereditary conditions", "Diagnostics, surgery, meds"] },
                { title: "Optional add-ons", items: ["Vet visit fees", "Dental illness", "Physical therapy", "Behavioral conditions"] },
              ].map((section) => (
                <div key={section.title} className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-bold text-[var(--lemonade-dark)] mb-2">{section.title}</h4>
                  <ul className="space-y-1">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-[var(--lemonade-gray)]">
                        <span className="text-green-500">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/hero-cat.jpg"
              alt="Cat looking trustingly at camera"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="text-center mt-10">
          <CTAButton>See My Coverage Options</CTAButton>
        </div>
      </SectionWrapper>

      {/* The Lemonade Giveback */}
      <SectionWrapper background="gray">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-5xl mb-6 block">💝</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--lemonade-dark)] mb-4">
            Insurance that gives back
          </h2>
          <p className="text-lg text-[var(--lemonade-gray)] mb-6">
            Here&apos;s how Lemonade is different: They take a flat fee from your premium. What&apos;s left after paying claims goes to charities you choose through their annual Giveback program.
          </p>
          <p className="text-lg text-[var(--lemonade-gray)] mb-8">
            This isn&apos;t just feel-good marketing — it removes the financial incentive to deny claims. When Lemonade pays your claim, it doesn&apos;t hurt their bottom line.
          </p>
          <div className="bg-white rounded-xl p-6 shadow-sm inline-block">
            <p className="text-4xl font-extrabold text-[var(--lemonade-pink)]">$10M+</p>
            <p className="text-[var(--lemonade-gray)]">donated to nonprofits through Giveback</p>
          </div>
        </div>
        <div className="text-center mt-10">
          <CTAButton>Get My Free Quote</CTAButton>
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper background="white">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--lemonade-dark)] text-center mb-4">
          Trust & transparency questions
        </h2>
        <p className="text-lg text-[var(--lemonade-gray)] text-center mb-10 max-w-2xl mx-auto">
          We believe in answering the hard questions
        </p>
        <FAQAccordion items={faqItems} />
      </SectionWrapper>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-[var(--lemonade-pink)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Get peace of mind: Save Up to 90% on Vet Bills
          </h2>
          <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
            Join the millions of pet parents who trust Lemonade to protect their furry family members. See your price instantly — no commitment required.
          </p>
          <CTAButton variant="secondary" size="large">Get My Free Quote</CTAButton>
          <p className="mt-4 text-sm text-pink-200">
            Rated 4.9 stars • 85,000+ reviews • Cancel anytime
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
