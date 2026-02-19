import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const variants = [
    {
      path: '/adventure-video',
      name: 'Adventure Video',
      theme: 'Active Pets + Video',
      description: 'Video hero for adventurous pet parents',
      icon: '🎥',
      gradient: 'from-violet-500 to-purple-500',
      bg: 'bg-violet-50 hover:bg-violet-100',
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
      description: 'App-like design, CTA visible without scrolling (mobile only)',
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
      path: '/adventure',
      name: 'Adventure Dogs',
      theme: 'Active Pets',
      description: 'GIF hero for adventurous pet parents',
      icon: '🐕',
      gradient: 'from-rose-500 to-pink-500',
      bg: 'bg-rose-50 hover:bg-rose-100',
    },
    {
      path: '/compare',
      name: 'Top 5 Comparison',
      theme: 'Research Authority',
      description: 'Lemonade #1, others greyed out',
      icon: '🔬',
      gradient: 'from-teal-500 to-emerald-500',
      bg: 'bg-teal-50 hover:bg-teal-100',
    },
    {
      path: '/get-quote',
      name: 'Save Up to 90% on Vet Bills',
      theme: 'Speed + Simplicity',
      description: 'Emphasizes quick quote flow and ease of use',
      icon: '⚡',
      gradient: 'from-pink-500 to-rose-500',
      bg: 'bg-pink-50 hover:bg-pink-100',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="pt-10 md:pt-16 pb-8 md:pb-12 px-4 md:px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logos */}
          <div className="flex items-center justify-center gap-4 md:gap-6 mb-4 md:mb-6">
            <div className="bg-white rounded-2xl p-3 shadow-lg animate-fade-in-up" style={{ animationDelay: '0ms' }}>
              <Image
                src="/TARZO-LogoFull-BLK.png"
                alt="Tarzo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
            </div>
            <span className="text-slate-500 text-2xl animate-fade-in" style={{ animationDelay: '150ms' }}>×</span>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 shadow-lg shadow-pink-500/30 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <span className="font-script text-3xl text-white">L</span>
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-3 md:mb-4 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            Tarzo Landing Page Variants
          </h1>
          <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-3 md:mb-4 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            A/B test variants for Lemonade Pet Insurance. Click any card to preview.
          </p>
          <p className="text-xs md:text-sm text-slate-500 max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            Created by Tarzo in partnership with Lemonade to test different messaging approaches for pet insurance acquisition.
          </p>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="px-4 md:px-6 pb-12 md:pb-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {variants.map((variant, index) => (
            <Link
              key={variant.path}
              href={variant.path}
              className={`group relative overflow-hidden rounded-2xl ${variant.bg} border border-white/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl animate-fade-in-up`}
              style={{ animationDelay: `${500 + index * 75}ms` }}
            >
              {/* Gradient accent bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${variant.gradient}`} />

              <div className="p-4 md:p-6">
                <div className="flex items-start justify-between mb-3 md:mb-4">
                  <div className="flex items-center gap-2 md:gap-3">
                    <span className="text-2xl md:text-3xl">{variant.icon}</span>
                    <div>
                      <span className="text-[10px] md:text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        Version {index + 1}
                      </span>
                      <h2 className="text-lg md:text-xl font-bold text-slate-900">
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

                <p className="text-sm md:text-base text-slate-600 mb-3 md:mb-4">
                  {variant.description}
                </p>

                <div className="flex items-center justify-between gap-2">
                  <span className={`inline-block px-2 md:px-3 py-1 md:py-1.5 rounded-full text-[10px] md:text-xs font-semibold bg-white/80 text-slate-700 shadow-sm`}>
                    {variant.theme}
                  </span>
                  <code className="text-[10px] md:text-xs text-slate-400 font-mono">
                    {variant.path}
                  </code>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}
