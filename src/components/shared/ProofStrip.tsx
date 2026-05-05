interface ProofStripProps {
  rating?: string;
  highlights?: string[];
}

export default function ProofStrip({
  rating = "⭐️⭐️⭐️⭐️⭐️",
  highlights = ["Rated highly by pet parents", "Fast setup", "Flexible plans"]
}: ProofStripProps) {
  return (
    <div className="inline-flex items-center gap-4 bg-white border border-gray-200 shadow-sm py-3 px-5 rounded-2xl">
      <div className="flex flex-col items-center">
        <span className="text-3xl font-extrabold text-[var(--lemonade-dark)] leading-none">4.9</span>
        <span className="text-xs font-semibold text-yellow-500 leading-none mt-1">★★★★★</span>
      </div>
      <span className="w-px h-10 bg-gray-200" aria-hidden="true" />
      <div className="flex flex-col gap-1">
        {highlights.map((highlight, index) => (
          <span key={index} className="flex items-center gap-2 text-sm font-medium text-[var(--lemonade-dark)] whitespace-nowrap">
            <span className="text-green-500 text-xs">✓</span>
            {highlight}
          </span>
        ))}
      </div>
    </div>
  );
}
