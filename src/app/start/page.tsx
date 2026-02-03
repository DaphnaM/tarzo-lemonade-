import Image from 'next/image';
import { Header, Footer, CTAButton, FAQAccordion, SectionWrapper } from '@/components/shared';
import { DualCTAButtons } from '@/components/specific';

export const metadata = {
  title: 'Pet Insurance Made for Your Pet | Lemonade',
  description: 'Get a personalized quote based on your dog or cat. Coverage tailored to their age, breed, and needs.',
};

export default function StartPage() {
  const faqItems = [
    {
      question: "Why does my pet's breed matter for insurance?",
      answer: "Different breeds have different health risks. For example, large dogs like German Shepherds are prone to hip dysplasia, while Bulldogs often have breathing issues. Cats like Persians may have eye problems. Your quote is personalized to your pet's specific breed risks so you get accurate pricing."
    },
    {
      question: "Does my pet's age affect the price?",
      answer: "Yes. Younger pets generally cost less to insure because they're less likely to have developed health conditions. Puppies and kittens can be enrolled as young as 8 weeks. There's no upper age limit, but senior pets will have higher premiums. The best time to enroll is when your pet is young and healthy."
    },
    {
      question: "What's the difference between dog and cat coverage?",
      answer: "The base coverage is the same — accidents, illnesses, diagnostics, and treatments. But cats are typically cheaper to insure (~$20/mo average) because they tend to have fewer emergencies than dogs (~$35/mo average). Dogs also have higher rates of injuries and hereditary conditions that require expensive treatments."
    },
    {
      question: "Can I insure both my dog and cat together?",
      answer: "Absolutely! Each pet gets their own policy tailored to their needs. And you'll get a 5% multi-pet discount when you insure 2 or more pets. You can manage all your policies in one app."
    },
    {
      question: "What if I have a mixed breed?",
      answer: "No problem! Mixed breeds are welcome. When you get a quote, you can select 'Mixed Breed' and indicate the size (small, medium, large). Mixed breeds often have fewer hereditary issues than purebreds, which can mean lower premiums."
    },
    {
      question: "Are certain breeds excluded from coverage?",
      answer: "Lemonade doesn't exclude specific dog or cat breeds. However, they don't cover working dogs used for commercial purposes (herding, guarding, sled racing). Regular family pets of any breed are welcome."
    },
    {
      question: "Does indoor vs outdoor affect my cat's coverage?",
      answer: "Your cat's lifestyle doesn't change the base coverage — accidents and illnesses are covered regardless. However, outdoor cats may be more prone to injuries and infections, which could affect your claims over time. The quote process is the same for indoor and outdoor cats."
    },
    {
      question: "What about puppies/kittens — is there special coverage?",
      answer: "Yes! Lemonade offers a Puppy/Kitten Preventative Package add-on that covers first-year expenses like spaying/neutering, microchipping, and initial vaccinations. It's designed specifically for pets in their first year of life."
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-6 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-bold mb-6">
            🎯 Personalized coverage for YOUR pet
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--lemonade-dark)] mb-6 leading-tight">
            Pet insurance made for <span className="text-[var(--lemonade-pink)]">your pet</span>
          </h1>
          <p className="text-xl text-[var(--lemonade-gray)] mb-8 max-w-2xl mx-auto">
            Every pet is unique. Get a personalized quote based on your dog or cat&apos;s age, breed, and where you live. Takes about 90 seconds.
          </p>
          <DualCTAButtons
            dogLabel="🐶 Get My Dog Quote"
            catLabel="🐱 Get My Cat Quote"
          />
          <p className="mt-6 text-sm text-[var(--lemonade-gray)]">
            Free quote • No commitment • Cancel anytime
          </p>
        </div>
      </section>

      {/* Dog vs Cat Stats */}
      <section className="py-8 bg-[var(--lemonade-dark)]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center p-6 border-r-0 md:border-r border-gray-700">
            <span className="text-4xl mb-3 block">🐕</span>
            <div className="text-3xl font-extrabold text-white">~$35/month</div>
            <div className="text-sm text-gray-400 mt-1">Average for dogs</div>
          </div>
          <div className="text-center p-6">
            <span className="text-4xl mb-3 block">🐈</span>
            <div className="text-3xl font-extrabold text-white">~$20/month</div>
            <div className="text-sm text-gray-400 mt-1">Average for cats</div>
          </div>
        </div>
      </section>

      {/* Why Personalize */}
      <SectionWrapper background="white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--lemonade-dark)] mb-4">
            Because every pet is different
          </h2>
          <p className="text-lg text-[var(--lemonade-gray)] max-w-2xl mx-auto">
            A 2-year-old Labrador has very different health risks than a 10-year-old Persian cat. Your coverage should reflect that.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Dog Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div className="relative h-48">
              <Image
                src="/images/happy-dog.jpg"
                alt="Happy dog"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[var(--lemonade-dark)] mb-4">🐕 For Dog Parents</h3>
              <div className="space-y-3 mb-6">
                <p className="text-[var(--lemonade-gray)]"><span className="font-bold text-[var(--lemonade-dark)]">Common claims:</span> ACL tears, hip dysplasia, allergies, cancer, foreign object ingestion</p>
                <p className="text-[var(--lemonade-gray)]"><span className="font-bold text-[var(--lemonade-dark)]">Why it matters:</span> Dogs are active and curious — they get into things. Large breeds have joint issues. Some breeds have hereditary conditions.</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 mb-6">
                <p className="text-sm text-[var(--lemonade-gray)]">
                  <span className="font-bold">Did you know?</span> 1 in 4 dogs will develop cancer. ACL surgery costs $3,000–$7,000. Lemonade covers both.
                </p>
              </div>
              <CTAButton className="w-full">Get My Dog Quote</CTAButton>
            </div>
          </div>

          {/* Cat Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div className="relative h-48">
              <Image
                src="/images/happy-cat.jpg"
                alt="Happy cat"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[var(--lemonade-dark)] mb-4">🐈 For Cat Parents</h3>
              <div className="space-y-3 mb-6">
                <p className="text-[var(--lemonade-gray)]"><span className="font-bold text-[var(--lemonade-dark)]">Common claims:</span> Urinary blockages, diabetes, kidney disease, hyperthyroidism, dental issues</p>
                <p className="text-[var(--lemonade-gray)]"><span className="font-bold text-[var(--lemonade-dark)]">Why it matters:</span> Cats hide illness well, so problems are often discovered late. Chronic conditions like diabetes require ongoing treatment.</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 mb-6">
                <p className="text-sm text-[var(--lemonade-gray)]">
                  <span className="font-bold">Did you know?</span> Urinary blockages in male cats can cost $3,000+ to treat. Diabetes treatment runs $200+/month. Lemonade covers both.
                </p>
              </div>
              <CTAButton className="w-full">Get My Cat Quote</CTAButton>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* What's Covered */}
      <SectionWrapper background="gray">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--lemonade-dark)] text-center mb-4">
          Comprehensive coverage for dogs AND cats
        </h2>
        <p className="text-lg text-[var(--lemonade-gray)] text-center mb-12 max-w-2xl mx-auto">
          Same great protection, personalized pricing
        </p>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              icon: "🩹",
              title: "Accidents",
              items: ["Broken bones", "Cuts & lacerations", "Toxic ingestion", "Car accidents", "Burns", "Foreign object removal"]
            },
            {
              icon: "💊",
              title: "Illnesses",
              items: ["Cancer", "Diabetes", "Infections", "Allergies", "Digestive issues", "Heart disease"]
            },
            {
              icon: "🏥",
              title: "Treatments",
              items: ["Surgery", "Hospitalization", "Medications", "X-rays & MRIs", "Blood tests", "Emergency care"]
            },
          ].map((category) => (
            <div key={category.title} className="bg-white rounded-xl p-6 shadow-sm">
              <span className="text-3xl mb-4 block">{category.icon}</span>
              <h3 className="font-bold text-xl text-[var(--lemonade-dark)] mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-[var(--lemonade-gray)]">
                    <span className="text-green-500">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <DualCTAButtons
            dogLabel="🐶 Dog Quote"
            catLabel="🐱 Cat Quote"
          />
        </div>
      </SectionWrapper>

      {/* How It Works */}
      <SectionWrapper background="white">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--lemonade-dark)] text-center mb-4">
          Get your personalized quote in 90 seconds
        </h2>
        <p className="text-lg text-[var(--lemonade-gray)] text-center mb-12 max-w-2xl mx-auto">
          Quick, easy, and tailored to your pet
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[
            { step: "1", title: "Tell us about your pet", desc: "Dog or cat? What breed? How old? That's all we need to start." },
            { step: "2", title: "Get your personalized price", desc: "Based on your pet's unique profile and your location." },
            { step: "3", title: "Customize your plan", desc: "Adjust deductible, reimbursement rate, and add-ons to fit your budget." },
            { step: "4", title: "You're covered!", desc: "Accident coverage starts immediately. Use any licensed vet." },
          ].map((item) => (
            <div key={item.step} className="text-center bg-purple-50 rounded-xl p-6">
              <div className="w-14 h-14 rounded-full bg-[var(--lemonade-pink)] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="font-bold text-[var(--lemonade-dark)] mb-2">{item.title}</h3>
              <p className="text-sm text-[var(--lemonade-gray)]">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <CTAButton size="large">Start My Personalized Quote</CTAButton>
        </div>
      </SectionWrapper>

      {/* Multi-Pet Discount */}
      <SectionWrapper background="gray">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-5xl mb-6 block">🐕🐈</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--lemonade-dark)] mb-4">
            Have multiple pets? Save 5%!
          </h2>
          <p className="text-lg text-[var(--lemonade-gray)] mb-6">
            When you insure 2 or more pets with Lemonade, you automatically get a 5% multi-pet discount. Each pet gets their own personalized policy, but you manage them all in one simple app.
          </p>
          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-8">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <p className="text-2xl font-bold text-[var(--lemonade-pink)]">5%</p>
              <p className="text-xs text-[var(--lemonade-gray)]">Multi-pet discount</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <p className="text-2xl font-bold text-[var(--lemonade-pink)]">10%</p>
              <p className="text-xs text-[var(--lemonade-gray)]">Bundle discount</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <p className="text-2xl font-bold text-[var(--lemonade-pink)]">5%</p>
              <p className="text-xs text-[var(--lemonade-gray)]">Annual pay discount</p>
            </div>
          </div>
          <CTAButton>Get Quotes for All My Pets</CTAButton>
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper background="white">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--lemonade-dark)] text-center mb-4">
          Questions about dog & cat coverage
        </h2>
        <p className="text-lg text-[var(--lemonade-gray)] text-center mb-10 max-w-2xl mx-auto">
          Find answers specific to your pet
        </p>
        <FAQAccordion items={faqItems} />
      </SectionWrapper>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-[var(--lemonade-pink)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Get a quote tailored to your pet
          </h2>
          <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
            Whether you have a playful puppy or a senior cat, Lemonade has coverage designed for them. See your personalized price in 90 seconds.
          </p>
          <DualCTAButtons
            dogLabel="🐶 Dog Quote"
            catLabel="🐱 Cat Quote"
          />
          <p className="mt-6 text-sm text-pink-200">
            Dogs avg ~$35/mo • Cats avg ~$20/mo • Cancel anytime
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
