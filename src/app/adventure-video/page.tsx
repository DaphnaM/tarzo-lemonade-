import Image from 'next/image';
import { Footer, CTAButton, FAQAccordion, TrustStrip } from '@/components/shared';

export const metadata = {
  title: 'Pet Insurance for Adventurous Dogs | Lemonade',
  description: 'Your adventure buddy deserves protection. Cover accidents, injuries, and illnesses from $10/mo.',
};

export default function AdventureVideoPage() {
  const faqItems = [
    {
      question: "What injuries are covered for active dogs?",
      answer: "Lemonade covers all accidents including torn ligaments (ACL/CCL), broken bones, cuts, sprains, water-related injuries, heatstroke, snake bites, and insect stings. If your adventurous pup gets hurt on a hike, at the beach, or in the backyard, they're covered."
    },
    {
      question: "Is swimming-related care covered?",
      answer: "Yes! Water aspiration, ear infections from swimming, and any injuries that occur during water activities are covered under the accident and illness plan. This includes emergency care if needed."
    },
    {
      question: "What about hiking or outdoor injuries?",
      answer: "Absolutely covered. Paw pad injuries, foxtail removal, tick-borne illnesses (Lyme disease, etc.), altitude sickness, and encounters with wildlife are all included in your coverage."
    },
    {
      question: "How fast can I get reimbursed?",
      answer: "Lemonade's AI processes about 30% of claims instantly—within seconds. More complex claims typically take 1-2 business days. Just snap a photo of your vet bill in the app."
    },
    {
      question: "Can I use any vet or emergency clinic?",
      answer: "Yes! Lemonade works with any licensed veterinarian, specialist, or emergency animal hospital in the US. No network restrictions, so you can get care wherever your adventures take you."
    },
    {
      question: "Is there a waiting period?",
      answer: "Accidents have just a 2-day waiting period—so you're covered quickly. Illnesses have a 14-day waiting period. Cruciate ligament issues have a 6-month waiting period."
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white">
        {/* Video Background/Hero */}
        <div className="relative w-full h-[65vh] min-h-[500px] bg-black">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover object-[center_70%]"
          >
            <source src="/images/pets-video-web.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative -mt-20 px-6 pb-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--lemonade-dark)] mb-4 leading-tight">
              They catch waves, not breaks.<br />
              <span className="text-[var(--lemonade-pink)]">Their insurance should keep up.</span>
            </h1>
            <p className="text-lg text-[var(--lemonade-gray)] mb-6 max-w-xl mx-auto">
              Surfing, swimming, beach runs, outdoor adventures—your fearless pup faces more risks than a couch potato. Make sure they&apos;re covered.
            </p>
            <CTAButton size="large">Get My Free Quote</CTAButton>
            <div className="mt-6">
              <TrustStrip items={["Any vet in the US", "Claims paid in seconds", "From $10/month"]} />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[var(--lemonade-dark)] py-6">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { stat: "4.9★", label: "App Store rating" },
            { stat: "~50%", label: "Claims paid instantly" },
            { stat: "90 sec", label: "To get a quote" },
            { stat: "Any", label: "Licensed US vet" },
          ].map((item, i) => (
            <div key={i}>
              <div className="text-2xl font-extrabold text-white">{item.stat}</div>
              <div className="text-sm text-gray-400">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Adventure Risks Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-[var(--lemonade-dark)] text-center mb-3">
            Adventure comes with risks
          </h2>
          <p className="text-center text-[var(--lemonade-gray)] mb-10 max-w-xl mx-auto">
            Active dogs face injuries that can cost thousands. Here&apos;s what you could be looking at without insurance:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { injury: "ACL/CCL tear", cost: "$3,000–$6,000", icon: "🦴", desc: "Common in active dogs" },
              { injury: "Broken bone", cost: "$1,500–$4,000", icon: "🩹", desc: "Falls, jumps, rough play" },
              { injury: "Water aspiration", cost: "$1,000–$3,000", icon: "💧", desc: "From swimming accidents" },
              { injury: "Snake bite", cost: "$2,000–$5,000", icon: "🐍", desc: "Hiking encounters" },
            ].map((item, i) => (
              <div key={i} className="bg-red-50 border border-red-100 rounded-xl p-5 text-center">
                <span className="text-3xl block mb-2">{item.icon}</span>
                <h3 className="font-bold text-[var(--lemonade-dark)]">{item.injury}</h3>
                <p className="text-[var(--lemonade-pink)] font-bold text-lg">{item.cost}</p>
                <p className="text-xs text-[var(--lemonade-gray)] mt-1">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-[var(--lemonade-gray)] mb-4">
              Lemonade covers up to <strong className="text-[var(--lemonade-dark)]">90% of vet bills</strong> for accidents and illnesses.
            </p>
            <CTAButton>See What You&apos;d Pay</CTAButton>
          </div>
        </div>
      </section>

      {/* What's Covered */}
      <section className="py-16 px-6 bg-blue-50">
        <div className="max-w-5xl mx-auto">
          {/* Header with GIF */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-extrabold text-[var(--lemonade-dark)] mb-3">
                Coverage built for active dogs
              </h2>
              <p className="text-[var(--lemonade-gray)]">
                Everything an adventurous pup might need
              </p>
            </div>

            {/* Swimming GIF with fade effect */}
            <div className="relative w-64 h-44 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/swimming-dogs.gif"
                alt="Dogs jumping into water"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-50/60 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-l from-blue-50/40 via-transparent to-transparent" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-lg text-[var(--lemonade-dark)] mb-4 flex items-center gap-2">
                <span className="text-2xl">🩹</span> Accidents
              </h3>
              <ul className="space-y-2">
                {[
                  "Broken bones & fractures",
                  "Torn ligaments (ACL/CCL)",
                  "Cuts, bites & lacerations",
                  "Sprains & strains",
                  "Foreign object ingestion",
                  "Heatstroke & hypothermia",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-[var(--lemonade-gray)]">
                    <span className="text-green-500">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-lg text-[var(--lemonade-dark)] mb-4 flex items-center gap-2">
                <span className="text-2xl">💊</span> Illnesses
              </h3>
              <ul className="space-y-2">
                {[
                  "Tick-borne diseases (Lyme, etc.)",
                  "Ear infections",
                  "Skin allergies & hot spots",
                  "Digestive issues",
                  "Respiratory infections",
                  "Cancer treatment",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-[var(--lemonade-gray)]">
                    <span className="text-green-500">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-pink-100 border border-pink-200 rounded-xl p-4 text-center max-w-md mx-auto">
            <p className="font-semibold text-[var(--lemonade-dark)] text-sm">🎁 Optional wellness add-on available</p>
            <p className="text-[var(--lemonade-gray)] text-xs">Vaccinations, flea/tick prevention, annual checkups & more</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-[var(--lemonade-dark)] text-center mb-10">
            How it works
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Get a quote", desc: "Tell us about your dog. Takes 90 seconds." },
              { step: "2", title: "Customize", desc: "Pick your deductible, reimbursement rate & limits." },
              { step: "3", title: "Visit any vet", desc: "Go on adventures. See any licensed vet when needed." },
              { step: "4", title: "Get reimbursed", desc: "Submit claims in-app. Get paid in seconds to days." },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 rounded-full bg-[var(--lemonade-pink)] text-white flex items-center justify-center text-xl font-bold mx-auto mb-3">
                  {item.step}
                </div>
                <h3 className="font-bold text-[var(--lemonade-dark)] mb-1">{item.title}</h3>
                <p className="text-sm text-[var(--lemonade-gray)]">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <CTAButton size="large">Start My Quote</CTAButton>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-[var(--lemonade-dark)] text-center mb-10">
            What adventure dog parents say
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "My lab tore his ACL on a hike. $4,200 surgery bill—Lemonade covered $3,780. Claim was approved in 2 days.",
                author: "Mike R.",
                pet: "Owner of Bear, 4yo Lab"
              },
              {
                quote: "Luna got stung by a bee at the dog park and had an allergic reaction. Emergency vet visit was $800. Got reimbursed instantly!",
                author: "Sarah T.",
                pet: "Owner of Luna, 2yo Golden"
              },
              {
                quote: "Best investment for my active pup. He's always getting into something. Peace of mind knowing he's covered.",
                author: "James K.",
                pet: "Owner of Scout, 3yo Aussie"
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-[var(--lemonade-gray)] mb-4 text-sm">&ldquo;{item.quote}&rdquo;</p>
                <div>
                  <p className="font-bold text-[var(--lemonade-dark)]">{item.author}</p>
                  <p className="text-xs text-[var(--lemonade-gray)]">{item.pet}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-[var(--lemonade-dark)] text-center mb-3">
            Questions about coverage
          </h2>
          <p className="text-center text-[var(--lemonade-gray)] mb-10">
            Everything active dog owners need to know
          </p>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-[var(--lemonade-pink)]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            They&apos;re always ready for the next adventure.
          </h2>
          <p className="text-pink-100 mb-8 text-lg">
            Make sure you&apos;re ready too. Get covered in 90 seconds.
          </p>
          <CTAButton variant="secondary" size="large" className="bg-white hover:bg-gray-100">
            Get My Free Quote
          </CTAButton>
        </div>
      </section>

      <Footer />
    </div>
  );
}
