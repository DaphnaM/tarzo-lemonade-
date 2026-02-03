import Image from 'next/image';
import { Header, Footer, CTAButton, TrustStrip, FAQAccordion, TestimonialCard, SectionWrapper } from '@/components/shared';

export const metadata = {
  title: 'Pet Insurance in 90 Seconds | Lemonade',
  description: 'Protect your dog or cat today — customize your plan in minutes. No phone calls. Cancel anytime.',
};

export default function GetQuotePage() {
  const faqItems = [
    {
      question: "Can I use my current vet?",
      answer: "Yes! Lemonade works with any licensed veterinarian in the US. Unlike some insurers that restrict you to a network, you're free to visit your trusted vet, any specialist, or even an emergency animal hospital."
    },
    {
      question: "How fast can I get covered?",
      answer: "You can complete a quote and purchase a policy in about 90 seconds. Your coverage starts at 12:01 AM the day after purchase. Accident coverage kicks in immediately with no waiting period, while illness coverage begins after a 14-day waiting period."
    },
    {
      question: "What does Lemonade pet insurance cover?",
      answer: "The base plan covers accidents (broken bones, cuts, swallowed objects) and illnesses (diabetes, cancer, UTIs, allergies). This includes diagnostics like X-rays, MRIs, blood tests, plus medications, surgeries, emergency care, and hospitalization. You can add optional coverage for vet visit fees, dental illness, physical therapy, and behavioral conditions."
    },
    {
      question: "How much does it cost?",
      answer: "Plans start around $10/month depending on your pet's age, breed, and location. The average is about $35/month for dogs and $20/month for cats. You control the price by choosing your deductible ($100-$750), reimbursement rate (70-90%), and annual limit ($5,000-$100,000)."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes, you can cancel your policy at any time with no cancellation fees. If you cancel within the first 14 days before any claims, you'll get a full refund."
    },
    {
      question: "Are pre-existing conditions covered?",
      answer: "Pre-existing conditions aren't covered, but here's the good news: if a curable condition has been symptom-free and treatment-free for 12 months, it may become eligible for coverage again. That's why signing up while your pet is young and healthy is ideal."
    },
    {
      question: "How do I file a claim?",
      answer: "Just open the Lemonade app, snap a photo of your vet bill, and submit. Many pet claims are processed instantly by AI. Once approved, reimbursement goes directly to your bank account — many customers receive payment within hours."
    },
    {
      question: "Is there a multi-pet discount?",
      answer: "Yes! You get 5% off when you insure 2 or more pets. You can also save 10% by bundling with Lemonade renters, home, or car insurance, and 5% more by paying annually upfront."
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-6 bg-gradient-to-b from-pink-50 to-white overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <span className="inline-block px-4 py-1 bg-pink-100 text-[var(--lemonade-pink)] rounded-full text-sm font-medium mb-6">
              #1 Rated Pet Insurance App
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--lemonade-dark)] mb-6 leading-tight">
              Pet insurance in<br />
              <span className="text-[var(--lemonade-pink)]">90 seconds.</span>
            </h1>
            <p className="text-xl text-[var(--lemonade-gray)] mb-8 max-w-lg">
              Join millions of pet parents who protect their furry family members. Customize your coverage, pick your price, and never stress about vet bills again.
            </p>
            <CTAButton size="large">Get My Free Quote</CTAButton>
            <p className="mt-4 text-sm text-[var(--lemonade-gray)]">
              No credit card required • Cancel anytime • No phone calls
            </p>
            <div className="mt-8">
              <TrustStrip items={["Any licensed vet in the US", "Claims paid in minutes", "70-90% of bills covered"]} />
            </div>
          </div>
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/hero-dog.jpg"
              alt="Happy golden retriever"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-[var(--lemonade-dark)]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { stat: "4.9★", label: "App Store Rating (85K+ reviews)" },
            { stat: "~50%", label: "Pet Claims Paid Instantly" },
            { stat: "90 sec", label: "To Get Your Quote" },
            { stat: "Any Vet", label: "In the US Accepted" },
          ].map((item) => (
            <div key={item.label}>
              <div className="text-2xl md:text-3xl font-bold text-white">{item.stat}</div>
              <div className="text-sm text-gray-400">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Pet Insurance */}
      <SectionWrapper background="white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--lemonade-dark)] mb-4">
            Vet bills can devastate your savings
          </h2>
          <p className="text-lg text-[var(--lemonade-gray)] max-w-2xl mx-auto">
            1 in 3 pets need emergency care each year. In 2024, 37% of pet owners went into debt from unexpected vet bills.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { procedure: "Emergency exam", cost: "$800–$1,500", icon: "🏥" },
            { procedure: "X-rays & MRI", cost: "$1,000–$3,000", icon: "📷" },
            { procedure: "Surgery", cost: "$3,000–$7,000", icon: "🔪" },
            { procedure: "Cancer treatment", cost: "$5,000–$10,000+", icon: "💊" },
          ].map((item) => (
            <div key={item.procedure} className="bg-red-50 border border-red-100 rounded-xl p-6 text-center">
              <span className="text-3xl mb-3 block">{item.icon}</span>
              <h3 className="font-bold text-[var(--lemonade-dark)] mb-1">{item.procedure}</h3>
              <p className="text-[var(--lemonade-pink)] font-bold text-lg">{item.cost}</p>
            </div>
          ))}
        </div>
        <p className="text-center mt-8 text-[var(--lemonade-gray)]">
          With Lemonade, you could get <span className="font-bold text-[var(--lemonade-dark)]">70-90% of these costs covered</span>.
        </p>
        <div className="text-center mt-8">
          <CTAButton>See What You&apos;d Pay</CTAButton>
        </div>
      </SectionWrapper>

      {/* How It Works */}
      <SectionWrapper background="gray">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--lemonade-dark)] text-center mb-4">
          From quote to coverage in 90 seconds
        </h2>
        <p className="text-lg text-[var(--lemonade-gray)] text-center mb-12 max-w-2xl mx-auto">
          No paperwork. No phone calls. No waiting on hold. Just a few taps and you&apos;re covered.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[
            { step: "1", title: "Tell us about your pet", desc: "Name, breed, age — that's it. Takes 30 seconds." },
            { step: "2", title: "Customize your plan", desc: "Choose deductible, reimbursement rate, and annual limit." },
            { step: "3", title: "Visit any vet", desc: "Go to your regular vet, a specialist, or emergency clinic." },
            { step: "4", title: "Get reimbursed fast", desc: "Submit claims in the app. Many are paid instantly." },
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
          <CTAButton>Start My 90-Second Quote</CTAButton>
        </div>
      </SectionWrapper>

      {/* What's Covered */}
      <SectionWrapper background="white">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--lemonade-dark)] mb-6">
              Comprehensive coverage you can customize
            </h2>
            <div className="space-y-4">
              {[
                { title: "Accidents", desc: "Broken bones, cuts, toxic ingestion, car accidents" },
                { title: "Illnesses", desc: "Cancer, diabetes, allergies, infections, digestive issues" },
                { title: "Diagnostics", desc: "X-rays, MRIs, CT scans, blood tests, ultrasounds" },
                { title: "Treatments", desc: "Surgery, hospitalization, medications, emergency care" },
                { title: "Hereditary conditions", desc: "Hip dysplasia, heart disease, eye disorders" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <span className="text-green-500 text-xl mt-0.5">✓</span>
                  <div>
                    <span className="font-bold text-[var(--lemonade-dark)]">{item.title}:</span>
                    <span className="text-[var(--lemonade-gray)]"> {item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-pink-50 rounded-lg">
              <p className="text-sm text-[var(--lemonade-dark)]">
                <span className="font-bold">Optional add-ons:</span> Vet visit fees, dental illness, physical therapy, behavioral conditions, end-of-life care — starting at $1.89/month
              </p>
            </div>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/vet-dog.jpg"
              alt="Dog at the vet"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="text-center mt-10">
          <CTAButton>Build My Custom Plan</CTAButton>
        </div>
      </SectionWrapper>

      {/* Social Proof */}
      <SectionWrapper background="gray">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--lemonade-dark)] text-center mb-4">
          What pet parents are saying
        </h2>
        <p className="text-lg text-[var(--lemonade-gray)] text-center mb-10 max-w-2xl mx-auto">
          Rated 4.9 stars on the App Store from 85,000+ reviews
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <TestimonialCard quote="Easy to use and affordable. I was able to customize my coverage to fit my budget. Claims are processed quickly and I always get reimbursed within a few days." />
          <TestimonialCard quote="The app is so simple to use. Filing a claim takes less than 5 minutes and I usually hear back the same day. Highly recommend for any pet owner." />
          <TestimonialCard quote="Switched from another pet insurance company and couldn't be happier. Lemonade's prices are better and their customer service is actually responsive." />
        </div>
        <div className="text-center mt-10">
          <CTAButton>Get My Free Quote</CTAButton>
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper background="white">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--lemonade-dark)] text-center mb-4">
          Questions? We&apos;ve got answers.
        </h2>
        <p className="text-lg text-[var(--lemonade-gray)] text-center mb-10 max-w-2xl mx-auto">
          Everything you need to know about Lemonade pet insurance
        </p>
        <FAQAccordion items={faqItems} />
      </SectionWrapper>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-[var(--lemonade-pink)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Your pet deserves the best care.
          </h2>
          <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
            Don&apos;t wait until an emergency. Get peace of mind in 90 seconds — it&apos;s free to see your price.
          </p>
          <CTAButton variant="secondary" size="large">Get My Free Quote Now</CTAButton>
          <p className="mt-4 text-sm text-pink-200">
            No commitment • See your price instantly • Cancel anytime
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
