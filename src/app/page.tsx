import Link from 'next/link';

export default function Home() {
  const variants = [
    {
      path: '/get-quote',
      name: 'Version 1 — "90 Seconds to Coverage"',
      theme: 'Speed + Simplicity',
      description: 'Emphasizes quick quote flow and ease of use',
      color: 'bg-pink-100 border-pink-300',
    },
    {
      path: '/protect',
      name: 'Version 2 — "Vet Bill Shock"',
      theme: 'Emotion + Urgency',
      description: 'Highlights real vet costs to create urgency',
      color: 'bg-red-100 border-red-300',
    },
    {
      path: '/plans',
      name: 'Version 3 — "Price + Savings"',
      theme: 'Budget Shoppers',
      description: 'Focuses on affordability and plan tiers',
      color: 'bg-green-100 border-green-300',
    },
    {
      path: '/coverage',
      name: 'Version 4 — "Trust & Proof"',
      theme: 'Skeptical Users',
      description: 'Heavy on social proof and testimonials',
      color: 'bg-blue-100 border-blue-300',
    },
    {
      path: '/start',
      name: 'Version 5 — "Dog/Cat Personalization"',
      theme: 'Facebook Cold Traffic',
      description: 'Dual CTAs for dog and cat owners',
      color: 'bg-purple-100 border-purple-300',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-4xl mb-4 block">🍋</span>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Lemonade Pet Insurance Landing Pages
          </h1>
          <p className="text-gray-600">
            A/B Test Variants — Click to preview each version
          </p>
        </div>

        <div className="space-y-4">
          {variants.map((variant) => (
            <Link
              key={variant.path}
              href={variant.path}
              className={`block p-6 rounded-xl border-2 ${variant.color} hover:shadow-lg transition-all duration-200`}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <h2 className="text-lg font-bold text-gray-900">{variant.name}</h2>
                  <p className="text-sm text-gray-600">{variant.description}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-block px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-700">
                    {variant.theme}
                  </span>
                  <span className="text-gray-400">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 p-6 bg-white rounded-xl border border-gray-200">
          <h3 className="font-bold text-gray-900 mb-2">Direct URLs for A/B Testing:</h3>
          <ul className="space-y-1 text-sm font-mono text-gray-600">
            {variants.map((variant) => (
              <li key={variant.path}>
                <code className="text-[var(--lemonade-pink)]">yourdomain.com{variant.path}</code>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
