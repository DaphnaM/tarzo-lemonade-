import Link from 'next/link';

export default function Home() {
  const variants = [
    {
      path: '/get-quote',
      name: '90 Seconds to Coverage',
      theme: 'Speed + Simplicity',
      description: 'Emphasizes quick quote flow and ease of use',
      icon: '⚡',
      gradient: 'from-pink-500 to-rose-500',
      bg: 'bg-pink-50 hover:bg-pink-100',
    },
    {
      path: '/protect',
      name: 'Vet Bill Shock',
      theme: 'Emotion + Urgency',
      description: 'Highlights real vet costs to create urgency',
      icon: '🚨',
      gradient: 'from-red-500 to-orange-500',
      bg: 'bg-red-50 hover:bg-red-100',
    },
    {
      path: '/plans',
      name: 'Price + Savings',
      theme: 'Budget Shoppers',
      description: 'Focuses on affordability and plan tiers',
      icon: '💰',
      gradient: 'from-emerald-500 to-green-500',
      bg: 'bg-emerald-50 hover:bg-emerald-100',
    },
    {
      path: '/coverage',
      name: 'Trust & Proof',
      theme: 'Skeptical Users',
      description: 'Heavy on social proof and testimonials',
      icon: '⭐',
      gradient: 'from-blue-500 to-cyan-500',
      bg: 'bg-blue-50 hover:bg-blue-100',
    },
    {
      path: '/start',
      name: 'Dog/Cat Personalization',
      theme: 'Facebook Cold Traffic',
      description: 'Dual CTAs for dog and cat owners',
      icon: '🐾',
      gradient: 'from-purple-500 to-violet-500',
      bg: 'bg-purple-50 hover:bg-purple-100',
    },
    {
      path: '/simple',
      name: 'Editor\'s Choice Widget',
      theme: 'Clean & Focused',
      description: 'Single-card widget style with badge',
      icon: '🏆',
      gradient: 'from-amber-500 to-yellow-500',
      bg: 'bg-amber-50 hover:bg-amber-100',
    },
    {
      path: '/mobile',
      name: 'Mobile App Style',
      theme: 'Ultra Minimal',
      description: 'App-like design, CTA visible without scrolling',
      icon: '📱',
      gradient: 'from-slate-500 to-gray-500',
      bg: 'bg-slate-50 hover:bg-slate-100',
    },
    {
      path: '/gif',
      name: 'Adventure GIF',
      theme: 'Eye-Catching',
      description: 'Animated GIF of dogs having fun',
      icon: '🏊',
      gradient: 'from-cyan-500 to-teal-500',
      bg: 'bg-cyan-50 hover:bg-cyan-100',
    },
    {
      path: '/video',
      name: 'Video Background',
      theme: 'Dynamic',
      description: 'Auto-playing video for engagement',
      icon: '🎬',
      gradient: 'from-indigo-500 to-purple-500',
      bg: 'bg-indigo-50 hover:bg-indigo-100',
    },
    {
      path: '/compare',
      name: 'Top 5 Comparison',
      theme: 'Research Authority',
      description: 'Lemonade #1, others greyed out',
      icon: '🔬',
      gradient: 'from-rose-500 to-pink-500',
      bg: 'bg-rose-50 hover:bg-rose-100',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="pt-16 pb-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 shadow-lg shadow-pink-500/30 mb-6">
            <span className="font-script text-4xl text-white">L</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Landing Page Variants
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            A/B test variants for Lemonade Pet Insurance. Click any card to preview.
          </p>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="px-6 pb-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          {variants.map((variant, index) => (
            <Link
              key={variant.path}
              href={variant.path}
              className={`group relative overflow-hidden rounded-2xl ${variant.bg} border border-white/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl`}
            >
              {/* Gradient accent bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${variant.gradient}`} />

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{variant.icon}</span>
                    <div>
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        Version {index + 1}
                      </span>
                      <h2 className="text-xl font-bold text-slate-900">
                        {variant.name}
                      </h2>
                    </div>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className={`inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r ${variant.gradient} text-white shadow-lg`}>
                      →
                    </span>
                  </div>
                </div>

                <p className="text-slate-600 mb-4">
                  {variant.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className={`inline-block px-3 py-1.5 rounded-full text-xs font-semibold bg-white/80 text-slate-700 shadow-sm`}>
                    {variant.theme}
                  </span>
                  <code className="text-xs text-slate-400 font-mono">
                    {variant.path}
                  </code>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* URLs Section */}
      <div className="px-6 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur rounded-2xl border border-slate-700 p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🔗</span>
              <h3 className="font-bold text-white text-lg">Direct URLs for A/B Testing</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {variants.map((variant, index) => (
                <div key={variant.path} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900/50">
                  <span className="text-slate-500 text-sm">V{index + 1}</span>
                  <code className="text-pink-400 text-sm font-mono">
                    yourdomain.com{variant.path}
                  </code>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 pb-8">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-slate-500 text-sm">
            Built for A/B testing · Deployed on Netlify
          </p>
        </div>
      </div>
    </div>
  );
}
